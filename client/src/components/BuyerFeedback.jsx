import { useEffect, useState } from 'react';
import { MessageSquareText, Star, Send, ShieldCheck } from 'lucide-react';
import api from '../services/api.js';
import Reveal from './Reveal.jsx';

const initialForm = { name: '', city: '', rating: 5, message: '' };

function Stars({ rating, interactive = false, onChange }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((value) => {
        const Icon = Star;
        if (interactive) {
          return (
            <button
              key={value}
              type="button"
              onClick={() => onChange?.(value)}
              className="rounded-lg p-1 text-amber-500 transition hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
              aria-label={`${value} star rating`}
            >
              <Icon size={22} fill={value <= rating ? 'currentColor' : 'none'} />
            </button>
          );
        }
        return <Icon key={value} size={17} className="text-amber-500" fill={value <= rating ? 'currentColor' : 'none'} />;
      })}
    </div>
  );
}

export default function BuyerFeedback() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function loadFeedback() {
    try {
      const { data } = await api.get('/feedback/public');
      setItems(data.items || []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { loadFeedback(); }, []);

  function update(e) {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submit(e) {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');
    setError('');
    try {
      const { data } = await api.post('/feedback', { ...form, rating: Number(form.rating) });
      setMessage(data.message || 'Thank you. Your feedback has been submitted for review.');
      setForm(initialForm);
    } catch (err) {
      setError(err.response?.data?.message || 'We could not submit your feedback. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="testimonials" className="section-pad scroll-mt-24 bg-[#f5f7f2]">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Buyer Feedback</span>
            <h2 className="h2">What Buyers Say</h2>
            <p className="copy">Only approved feedback is shown here. Buyers can share their product and service experience without making medical or guaranteed-result claims.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            {loading ? (
              <div className="card p-6 text-sm text-slate-500 sm:col-span-2">Loading buyer feedback...</div>
            ) : items.length ? items.map((item) => (
              <Reveal key={item._id}>
                <article className="card h-full p-6">
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><MessageSquareText size={20} /></span>
                    <Stars rating={item.rating} />
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-700">“{item.message}”</p>
                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <strong className="block text-sm text-[#173f2f]">{item.name}</strong>
                    <span className="mt-1 block text-xs text-slate-500">{item.city}</span>
                  </div>
                </article>
              </Reveal>
            )) : (
              <div className="card p-7 sm:col-span-2">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><ShieldCheck size={22} /></span>
                  <div><h3 className="text-lg font-bold text-[#173f2f]">No approved buyer feedback is published yet</h3><p className="mt-2 text-sm leading-6 text-slate-600">Genuine feedback will appear here after it is submitted and approved by the admin.</p></div>
                </div>
              </div>
            )}
          </div>

          <Reveal>
            <form onSubmit={submit} className="card p-6 sm:p-7">
              <span className="eyebrow">Share Experience</span>
              <h3 className="mt-4 text-2xl font-bold text-[#173f2f]">Share Your Feedback</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Your feedback may be published on the website after review.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label><span className="label">Full Name</span><input className="input" name="name" value={form.name} onChange={update} autoComplete="name" required maxLength={120} /></label>
                <label><span className="label">City</span><input className="input" name="city" value={form.city} onChange={update} autoComplete="address-level2" required maxLength={120} /></label>
              </div>

              <div className="mt-4">
                <span className="label">Rating</span>
                <Stars rating={Number(form.rating)} interactive onChange={(rating) => setForm((current) => ({ ...current, rating }))} />
              </div>

              <label className="mt-4 block"><span className="label">Your Experience</span><textarea className="input min-h-32 resize-y" name="message" value={form.message} onChange={update} required minLength={8} maxLength={600} placeholder="Write your genuine product or service experience" /></label>

              {message && <div className="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-800">{message}</div>}
              {error && <div className="mt-4 rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{error}</div>}

              <button disabled={submitting} type="submit" className="btn-primary mt-5 w-full disabled:cursor-not-allowed disabled:opacity-60">{submitting ? 'Submitting...' : 'Submit Feedback'} <Send size={17} /></button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
