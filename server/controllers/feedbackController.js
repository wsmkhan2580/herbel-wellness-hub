import mongoose from 'mongoose';
import Feedback from '../models/Feedback.js';
import { feedbackSchema } from '../utils/validation.js';

function publicName(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return 'Buyer';
  if (parts.length === 1) return parts[0];
  return `${parts[0]} ${parts[parts.length - 1][0]}.`;
}

function validId(id) {
  return mongoose.isValidObjectId(id);
}

export async function createFeedback(req, res, next) {
  try {
    const parsed = feedbackSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({
        message: 'Please check the feedback details and try again.',
        errors: parsed.error.flatten().fieldErrors
      });
    }

    await Feedback.create({ ...parsed.data, approved: false });
    res.status(201).json({
      message: 'Thank you. Your feedback has been submitted for review.'
    });
  } catch (error) {
    next(error);
  }
}

export async function listPublicFeedback(req, res, next) {
  try {
    const items = await Feedback.find({ approved: true })
      .sort({ createdAt: -1 })
      .limit(12)
      .select('name city rating message createdAt')
      .lean();

    res.json({
      items: items.map((item) => ({
        ...item,
        name: publicName(item.name)
      }))
    });
  } catch (error) {
    next(error);
  }
}

export async function listFeedback(req, res, next) {
  try {
    const status = req.query.status;
    const filter = status === 'approved' ? { approved: true } : status === 'pending' ? { approved: false } : {};
    const items = await Feedback.find(filter).sort({ createdAt: -1 }).limit(100).lean();
    res.json({ items });
  } catch (error) {
    next(error);
  }
}

export async function setFeedbackApproval(req, res, next) {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: 'Invalid feedback id' });
    const approved = req.body?.approved;
    if (typeof approved !== 'boolean') return res.status(400).json({ message: 'approved must be true or false' });
    const item = await Feedback.findByIdAndUpdate(req.params.id, { approved }, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Feedback not found' });
    res.json({ item });
  } catch (error) {
    next(error);
  }
}

export async function deleteFeedback(req, res, next) {
  try {
    if (!validId(req.params.id)) return res.status(400).json({ message: 'Invalid feedback id' });
    const item = await Feedback.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Feedback not found' });
    res.json({ message: 'Feedback deleted' });
  } catch (error) {
    next(error);
  }
}
