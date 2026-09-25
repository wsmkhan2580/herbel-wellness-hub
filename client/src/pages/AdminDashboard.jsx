import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CalendarDays, ChevronLeft, ChevronRight, Download, Eye, Filter, LogOut,
  RefreshCw, Search, Trash2, UserRound, UsersRound, X, MessageSquareText, Star, CheckCircle2
} from 'lucide-react';
import BrandMark from '../components/BrandMark.jsx';
import api from '../services/api.js';

const problems = [
  'Premature Ejaculation', 'Erectile Dysfunction', 'Low Stamina', 'Sexual Confidence',
  'Size Concern', 'General Sexual Wellness', 'Other'
];

function formatDateTime(value) {
  const date = new Date(value);
  return {
    date: date.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' }),
    time: date.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' })
  };
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({ search: '', problem: '', startDate: '', endDate: '' });
  const [applied, setApplied] = useState(filters);
  const [page, setPage] = useState(1);
  const [data, setData] = useState({ items: [], total: 0, pages: 1 });
  const [stats, setStats] = useState({ total: 0, today: 0, byProblem: [], recent: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState([]);
  const [feedbackError, setFeedbackError] = useState('');

  const query = useMemo(() => ({ ...applied, page, limit: 15 }), [applied, page]);

  async function loadStats() {
    const { data } = await api.get('/leads/stats');
    setStats(data);
  }

  async function loadFeedback() {
    setFeedbackError('');
    try {
      const { data } = await api.get('/feedback');
      setFeedback(data.items || []);
    } catch (err) {
      setFeedbackError(err.response?.data?.message || 'Could not load buyer feedback');
    }
  }

  async function loadLeads() {
    setLoading(true);
    setError('');
    try {
      const { data } = await api.get('/leads', { params: query });
      setData(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not load leads');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadLeads(); }, [query]);
  useEffect(() => { loadStats().catch(() => {}); loadFeedback(); }, []);

  function applyFilters(e) {
    e?.preventDefault();
    setPage(1);
    setApplied(filters);
  }

  function resetFilters() {
    const clean = { search: '', problem: '', startDate: '', endDate: '' };
    setFilters(clean);
    setApplied(clean);
    setPage(1);
  }

  async function exportExcel() {
    try {
      const response = await api.get('/leads/export', { params: applied, responseType: 'blob' });
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.download = 'herbal-wellness-hub-leads.xlsx';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError('Excel export failed');
    }
  }

  async function removeLead(id) {
    if (!window.confirm('Delete this lead permanently?')) return;
    try {
      await api.delete(`/leads/${id}`);
      setSelected(null);
      await Promise.all([loadLeads(), loadStats()]);
    } catch (err) {
      setError(err.response?.data?.message || 'Could not delete lead');
    }
  }

  async function approveFeedback(id, approved) {
    try {
      await api.patch(`/feedback/${id}/approval`, { approved });
      await loadFeedback();
    } catch (err) {
      setFeedbackError(err.response?.data?.message || 'Could not update feedback');
    }
  }

  async function removeFeedback(id) {
    if (!window.confirm('Delete this feedback permanently?')) return;
    try {
      await api.delete(`/feedback/${id}`);
      await loadFeedback();
    } catch (err) {
      setFeedbackError(err.response?.data?.message || 'Could not delete feedback');
    }
  }

  async function logout() {
    try { await api.post('/auth/logout'); } catch {}
    sessionStorage.removeItem('hwh_admin_token');
    navigate('/admin/login', { replace: true });
  }

  return (
    <div className="min-h-screen bg-[#f4f7f1]">
      <header className="sticky top-0 z-30 border-b border-emerald-950/10 bg-white/95 backdrop-blur">
        <div className="section-shell flex h-20 items-center justify-between gap-4">
          <BrandMark />
          <div className="flex items-center gap-2">
            <button onClick={() => Promise.all([loadLeads(), loadStats(), loadFeedback()])} className="btn-secondary px-4" aria-label="Refresh dashboard"><RefreshCw size={17} /></button>
            <button onClick={logout} className="btn-secondary px-4"><LogOut size={17} /> <span className="hidden sm:inline">Logout</span></button>
          </div>
        </div>
      </header>

      <main className="section-shell py-8 sm:py-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div><span className="eyebrow">Admin dashboard</span><h1 className="mt-3 text-3xl font-bold tracking-tight text-[#173f2f] sm:text-4xl">Lead Management</h1><p className="mt-2 text-sm text-slate-500">Search, filter, review, delete and export submitted leads.</p></div>
          <button onClick={exportExcel} className="btn-primary"><Download size={18} />Export to Excel</button>
        </div>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={UsersRound} label="Total Leads" value={stats.total} />
          <StatCard icon={CalendarDays} label="Today's Leads" value={stats.today} />
          <StatCard icon={UserRound} label="Recent Leads" value={stats.recent?.length || 0} />
          <StatCard icon={Filter} label="Concern Categories" value={stats.byProblem?.length || 0} />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.65fr_0.75fr]">
          <div className="card overflow-hidden">
            <form onSubmit={applyFilters} className="grid gap-3 border-b border-slate-100 p-4 sm:grid-cols-2 xl:grid-cols-5">
              <label className="relative xl:col-span-1"><span className="sr-only">Search</span><Search className="pointer-events-none absolute left-3 top-3.5 text-slate-400" size={17} /><input className="input pl-10" placeholder="Name, city or description" value={filters.search} onChange={(e) => setFilters((v) => ({ ...v, search: e.target.value }))} /></label>
              <select className="input" value={filters.problem} onChange={(e) => setFilters((v) => ({ ...v, problem: e.target.value }))}><option value="">All concerns</option>{problems.map((p) => <option key={p}>{p}</option>)}</select>
              <input type="date" className="input" value={filters.startDate} onChange={(e) => setFilters((v) => ({ ...v, startDate: e.target.value }))} aria-label="Start date" />
              <input type="date" className="input" value={filters.endDate} onChange={(e) => setFilters((v) => ({ ...v, endDate: e.target.value }))} aria-label="End date" />
              <div className="flex gap-2"><button className="btn-primary flex-1 px-4" type="submit">Apply</button><button className="btn-secondary px-4" type="button" onClick={resetFilters} aria-label="Reset filters"><X size={17} /></button></div>
            </form>

            {error && <div className="m-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{error}</div>}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[980px] text-left text-sm">
                <thead className="bg-slate-50 text-xs uppercase tracking-wide text-slate-500"><tr><th className="px-5 py-4">Name</th><th className="px-5 py-4">City</th><th className="px-5 py-4">Problem</th><th className="px-5 py-4">Description</th><th className="px-5 py-4">Date</th><th className="px-5 py-4">Time</th><th className="px-5 py-4 text-right">Actions</th></tr></thead>
                <tbody className="divide-y divide-slate-100">
                  {loading ? <tr><td colSpan="7" className="px-5 py-12 text-center text-slate-500">Loading leads...</td></tr> : data.items.length === 0 ? <tr><td colSpan="7" className="px-5 py-12 text-center text-slate-500">No leads found.</td></tr> : data.items.map((lead) => {
                    const dt = formatDateTime(lead.createdAt);
                    return <tr key={lead._id} className="bg-white hover:bg-emerald-50/30"><td className="px-5 py-4 font-semibold text-slate-800">{lead.name}</td><td className="px-5 py-4 text-slate-600">{lead.city}</td><td className="px-5 py-4"><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-900">{lead.problem}</span></td><td className="max-w-[280px] px-5 py-4 text-slate-600"><span className="line-clamp-2">{lead.description}</span></td><td className="px-5 py-4 text-slate-600">{dt.date}</td><td className="px-5 py-4 text-slate-600">{dt.time}</td><td className="px-5 py-4"><div className="flex justify-end gap-2"><button onClick={() => setSelected(lead)} className="grid h-9 w-9 place-items-center rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50" aria-label="View lead"><Eye size={16} /></button><button onClick={() => removeLead(lead._id)} className="grid h-9 w-9 place-items-center rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50" aria-label="Delete lead"><Trash2 size={16} /></button></div></td></tr>;
                  })}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 px-5 py-4 text-sm text-slate-600">
              <span>{data.total} lead{data.total === 1 ? '' : 's'} · Page {page} of {data.pages}</span>
              <div className="flex gap-2"><button className="btn-secondary min-h-10 px-3 py-2" disabled={page <= 1} onClick={() => setPage((p) => Math.max(p - 1, 1))}><ChevronLeft size={16} /></button><button className="btn-secondary min-h-10 px-3 py-2" disabled={page >= data.pages} onClick={() => setPage((p) => Math.min(p + 1, data.pages))}><ChevronRight size={16} /></button></div>
            </div>
          </div>

          <aside className="grid content-start gap-6">
            <div className="card p-5"><h2 className="font-bold text-[#173f2f]">Problem-wise Count</h2><div className="mt-4 grid gap-3">{stats.byProblem?.length ? stats.byProblem.map((item) => <div key={item._id} className="flex items-center justify-between gap-3 text-sm"><span className="text-slate-600">{item._id}</span><strong className="rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-900">{item.count}</strong></div>) : <p className="text-sm text-slate-500">No data yet.</p>}</div></div>
            <div className="card p-5"><h2 className="font-bold text-[#173f2f]">Recent Leads</h2><div className="mt-4 grid gap-3">{stats.recent?.length ? stats.recent.map((lead) => <button key={lead._id} onClick={() => setSelected(lead)} className="rounded-2xl bg-slate-50 p-3 text-left hover:bg-emerald-50"><span className="block text-sm font-semibold text-slate-800">{lead.name}</span><span className="mt-1 block text-xs text-slate-500">{lead.city} · {lead.problem}</span></button>) : <p className="text-sm text-slate-500">No recent leads.</p>}</div></div>
          </aside>
        </section>

        <section className="mt-8 card overflow-hidden">
          <div className="flex flex-col gap-2 border-b border-slate-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div><span className="eyebrow">Buyer feedback</span><h2 className="mt-3 text-2xl font-bold text-[#173f2f]">Feedback Approval</h2><p className="mt-1 text-sm text-slate-500">Only approved feedback appears on the public website.</p></div>
            <div className="rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900">Pending: {feedback.filter((item) => !item.approved).length}</div>
          </div>
          {feedbackError && <div className="m-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{feedbackError}</div>}
          <div className="grid gap-4 p-5 lg:grid-cols-2">
            {feedback.length ? feedback.map((item) => (
              <article key={item._id} className="rounded-3xl border border-slate-200 bg-white p-5">
                <div className="flex items-start justify-between gap-4">
                  <div><strong className="block text-[#173f2f]">{item.name}</strong><span className="mt-1 block text-xs text-slate-500">{item.city}</span></div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.approved ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'}`}>{item.approved ? 'Approved' : 'Pending'}</span>
                </div>
                <div className="mt-3 flex gap-1">{[1,2,3,4,5].map((n) => <Star key={n} size={15} className="text-amber-500" fill={n <= item.rating ? 'currentColor' : 'none'} />)}</div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.message}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {!item.approved ? <button className="btn-primary min-h-10 px-4 py-2" onClick={() => approveFeedback(item._id, true)}><CheckCircle2 size={16} />Approve</button> : <button className="btn-secondary min-h-10 px-4 py-2" onClick={() => approveFeedback(item._id, false)}><MessageSquareText size={16} />Unpublish</button>}
                  <button className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-rose-200 px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50" onClick={() => removeFeedback(item._id)}><Trash2 size={16} />Delete</button>
                </div>
              </article>
            )) : <div className="rounded-3xl bg-slate-50 p-6 text-sm text-slate-500 lg:col-span-2">No buyer feedback submitted yet.</div>}
          </div>
        </section>
      </main>

      {selected && <LeadModal lead={selected} onClose={() => setSelected(null)} onDelete={() => removeLead(selected._id)} />}
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return <div className="card p-5"><span className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><Icon size={19} /></span><strong className="mt-5 block text-3xl tracking-tight text-[#173f2f]">{value ?? 0}</strong><span className="mt-1 block text-sm text-slate-500">{label}</span></div>;
}

function LeadModal({ lead, onClose, onDelete }) {
  const dt = formatDateTime(lead.createdAt);
  return <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/50 p-4 backdrop-blur-sm" role="dialog" aria-modal="true"><div className="w-full max-w-lg rounded-[2rem] bg-white p-6 shadow-2xl sm:p-8"><div className="flex items-start justify-between gap-4"><div><span className="eyebrow">Lead details</span><h2 className="mt-3 text-2xl font-bold text-[#173f2f]">{lead.name}</h2></div><button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-500"><X size={18} /></button></div><dl className="mt-7 grid gap-4 rounded-2xl bg-slate-50 p-5 text-sm"><div className="grid grid-cols-[100px_1fr] gap-3"><dt className="text-slate-500">City</dt><dd className="font-medium text-slate-800">{lead.city}</dd></div><div className="grid grid-cols-[100px_1fr] gap-3"><dt className="text-slate-500">Problem</dt><dd className="font-medium text-slate-800">{lead.problem}</dd></div><div className="grid grid-cols-[100px_1fr] gap-3"><dt className="text-slate-500">Description</dt><dd className="whitespace-pre-wrap font-medium text-slate-800">{lead.description || "—"}</dd></div><div className="grid grid-cols-[100px_1fr] gap-3"><dt className="text-slate-500">Date</dt><dd className="font-medium text-slate-800">{dt.date}</dd></div><div className="grid grid-cols-[100px_1fr] gap-3"><dt className="text-slate-500">Time</dt><dd className="font-medium text-slate-800">{dt.time}</dd></div></dl><div className="mt-6 flex justify-end gap-3"><button onClick={onClose} className="btn-secondary">Close</button><button onClick={onDelete} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white hover:bg-rose-700"><Trash2 size={17} />Delete Lead</button></div></div></div>;
}
