import ExcelJS from 'exceljs';
import Lead from '../models/Lead.js';
import { leadSchema } from '../utils/validation.js';

const IST_OFFSET = '+05:30';
const MAX_EXPORT_ROWS = 10000;

function dateRange(startDate, endDate) {
  const range = {};
  if (startDate) {
    const start = new Date(`${startDate}T00:00:00.000${IST_OFFSET}`);
    if (!Number.isNaN(start.getTime())) range.$gte = start;
  }
  if (endDate) {
    const end = new Date(`${endDate}T23:59:59.999${IST_OFFSET}`);
    if (!Number.isNaN(end.getTime())) range.$lte = end;
  }
  return Object.keys(range).length ? range : null;
}

function safeSearch(value = '') {
  return value.trim().slice(0, 120).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function makeQuery({ search, problem, startDate, endDate }) {
  const query = {};
  const value = safeSearch(search);
  if (value) {
    query.$or = [
      { name: { $regex: value, $options: 'i' } },
      { city: { $regex: value, $options: 'i' } },
      { description: { $regex: value, $options: 'i' } }
    ];
  }
  if (problem?.trim()) query.problem = problem.trim().slice(0, 80);
  const range = dateRange(startDate, endDate);
  if (range) query.createdAt = range;
  return query;
}

function safeExcelText(value = '') {
  const text = String(value ?? '');
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

export async function createLead(req, res, next) {
  try {
    const parsed = leadSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: 'Please complete all required fields correctly',
        errors: parsed.error.flatten().fieldErrors
      });
    }
    await Lead.create(parsed.data);
    res.status(201).json({ success: true });
  } catch (err) {
    next(err);
  }
}

export async function listLeads(req, res, next) {
  try {
    const page = Math.max(Number(req.query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(req.query.limit) || 15, 1), 100);
    const query = makeQuery(req.query);
    const [items, total] = await Promise.all([
      Lead.find(query).sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit).lean(),
      Lead.countDocuments(query)
    ]);
    res.json({ items, total, page, pages: Math.max(Math.ceil(total / limit), 1) });
  } catch (err) {
    next(err);
  }
}

export async function leadStats(req, res, next) {
  try {
    const now = new Date();
    const ist = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(now);
    const startToday = new Date(`${ist}T00:00:00.000${IST_OFFSET}`);
    const [total, today, byProblem, recent] = await Promise.all([
      Lead.countDocuments(),
      Lead.countDocuments({ createdAt: { $gte: startToday } }),
      Lead.aggregate([{ $group: { _id: '$problem', count: { $sum: 1 } } }, { $sort: { count: -1 } }]),
      Lead.find().sort({ createdAt: -1 }).limit(5).lean()
    ]);
    res.json({ total, today, byProblem, recent });
  } catch (err) {
    next(err);
  }
}

export async function getLead(req, res, next) {
  try {
    const lead = await Lead.findById(req.params.id).lean();
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ message: 'Invalid lead id' });
    next(err);
  }
}

export async function deleteLead(req, res, next) {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ success: true });
  } catch (err) {
    if (err.name === 'CastError') return res.status(400).json({ message: 'Invalid lead id' });
    next(err);
  }
}

export async function exportLeads(req, res, next) {
  try {
    const query = makeQuery(req.query);
    const items = await Lead.find(query).sort({ createdAt: -1 }).limit(MAX_EXPORT_ROWS).lean();
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('Leads');
    sheet.columns = [
      { header: 'Name', key: 'name', width: 28 },
      { header: 'City', key: 'city', width: 24 },
      { header: 'Problem', key: 'problem', width: 30 },
      { header: 'Problem Description', key: 'description', width: 60 },
      { header: 'Date', key: 'date', width: 15 },
      { header: 'Time', key: 'time', width: 15 }
    ];
    sheet.getRow(1).font = { bold: true };
    items.forEach((lead) => {
      const d = new Date(lead.createdAt);
      sheet.addRow({
        name: safeExcelText(lead.name),
        city: safeExcelText(lead.city),
        problem: safeExcelText(lead.problem),
        description: safeExcelText(lead.description),
        date: d.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
        time: d.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })
      });
    });
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="herbal-wellness-hub-leads.xlsx"');
    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    next(err);
  }
}
