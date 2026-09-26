import { useState } from 'react';
import { CheckCircle2, Loader2, ShieldCheck } from 'lucide-react';
import api from '../services/api.js';

const problems = [
  'Premature Ejaculation',
  'Erectile Dysfunction',
  'Low Stamina',
  'Sexual Confidence',
  'Size Concern',
  'General Sexual Wellness',
  'Other'
];

const initial = { name: '', city: '', phone: '', problem: '', description: '' };

export default function LeadForm() {
  const [form, setForm] = useState(initial);
  const [state, setState] = useState({ loading: false, success: false, error: '' });

  const update = (e) => setForm((v) => ({ ...v, [e.target.name]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (
      !form.name.trim() ||
      !form.city.trim() ||
      !form.phone.trim() ||
      !form.problem ||
      form.description.trim().length < 5
    ) {
      setState({ loading: false, success: false, error: 'कृपया सभी required fields complete करें और अपनी problem के बारे में थोड़ा detail लिखें।' });
      return;
    }
    setState({ loading: true, success: false, error: '' });
    try {
      await api.post('/leads', form);
      setForm(initial);
      setState({ loading: false, success: true, error: '' });
    } catch (err) {
      setState({ loading: false, success: false, error: err.response?.data?.message || 'Details submit नहीं हो पाईं। Please try again.' });
    }
  }
return ( 
  <section id="lead-form" className="section-pad scroll-mt-24 bg-[#173f2f] text-white">  
    <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">  

      <div className="order-2 hidden lg:order-1 lg:block">
        <span className="inline-flex items-center rounded-full border border-[#c9963f]/40 bg-[#c9963f]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[#e4c98a]">Get Started</span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Apni Details Bharein Aur Shuru Karein</h2>
        <p className="mt-3 max-w-md leading-7 text-white/80">Form fill karne ke baad hamari team aapse contact karegi aur aapki serviceability confirm karegi.</p>
        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-[#c9963f]/30 bg-white/5 p-4 text-sm text-white/80">
          <ShieldCheck size={20} className="mt-0.5 shrink-0 text-[#e4c98a]" />
          Aapki details private rakhi jaati hain aur sirf enquiry follow-up ke liye use hoti hain.
        </div>
      </div>  
  
      <div className="order-1 rounded-[2rem] bg-white p-5 text-slate-900 shadow-2xl sm:p-6 lg:order-2">  
        {state.success ? (  
          <div className="grid min-h-[390px] place-items-center text-center">  
            <div>  
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#f0e8d2] text-[#173f2f]">
                <CheckCircle2 size={32} />
              </span>  
              <h3 className="mt-5 font-serif text-2xl font-extrabold text-[#173f2f]">
                Details successfully submit ho gayi hain.
              </h3>  
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
                Aapki details successfully receive ho gayi hain. Zarurat ho to ek aur request submit kar sakte hain.
              </p>  
              <button
                className="btn-secondary mt-6"
                onClick={() => setState({ loading: false, success: false, error: '' })}
              >
                Ek aur Request Submit Karein
              </button>  
            </div>  
          </div>  
        ) : (  
          <form onSubmit={submit} noValidate>  
            <h3 className="font-serif text-xl font-extrabold text-[#173f2f] sm:text-2xl">
              Apni Details Bharein
            </h3>  
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              Sabhi required fields complete karna zaroori hai.
            </p>  
            <div className="mt-4 grid gap-3.5 sm:mt-5 sm:gap-4">  
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <div>  
                  <label className="label" htmlFor="name">Full Name</label>  
                  <input id="name" name="name" value={form.name} onChange={update} className="input" autoComplete="name" required maxLength={120} placeholder="Apna poora naam likhein" />  
                </div>  
                <div>  
                  <label className="label" htmlFor="city">City</label>  
                  <input id="city" name="city" value={form.city} onChange={update} className="input" autoComplete="address-level2" required maxLength={120} placeholder="Apna City likhein" />  
                </div>
              </div>
              <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
                <div>  
                  <label className="label" htmlFor="phone">Phone Number</label>  
                  <input id="phone" name="phone" type="tel" value={form.phone} onChange={update} className="input" autoComplete="tel" required maxLength={15} placeholder="Apna phone number likhein" />  
                </div>  
                <div>  
                  <label className="label" htmlFor="problem">Concern</label>  
                  <select id="problem" name="problem" value={form.problem} onChange={update} className="input" required>  
                    <option value="">Select Karein</option>  
                    {problems.map((item) => <option key={item} value={item}>{item}</option>)}  
                  </select>  
                </div>
              </div>
              <div>  
                <label className="label" htmlFor="description">Apni Problem Describe Karein</label>  
                <textarea id="description" name="description" value={form.description} onChange={update} className="input min-h-24 resize-y" required minLength={5} maxLength={1000} placeholder="Apni problem apne words mein likhein — jaise kab se hai, kis tarah ki difficulty feel hoti hai ya kya concern hai" />  
                <p className="mt-1.5 text-[11px] text-slate-500">
                  Maximum 1000 characters. Emergency ya urgent medical issue mein local medical care lein.
                </p>  
              </div>  
              {state.error && <div className="rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700" role="alert">{state.error}</div>}  
              <button className="btn-primary w-full" type="submit" disabled={state.loading}>  
                {state.loading ? <><Loader2 className="animate-spin" size={18} /> Submit ho raha hai...</> : 'Submit Details'}  
              </button>  
            </div>  
          </form>  
        )}  
      </div>  
    </div>  
  </section> 
); 
}
