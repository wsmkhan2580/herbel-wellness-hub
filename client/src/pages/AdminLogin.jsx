import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { LockKeyhole, Loader2 } from 'lucide-react';
import BrandMark from '../components/BrandMark.jsx';
import api from '../services/api.js';

export default function AdminLogin() {
  const navigate = useNavigate();
  const token = sessionStorage.getItem('hwh_admin_token');
  const [form, setForm] = useState({ email: '', password: '' });
  const [state, setState] = useState({ loading: false, error: '' });

  if (token) return <Navigate to="/admin" replace />;

  async function submit(e) {
    e.preventDefault();
    setState({ loading: true, error: '' });
    try {
      const { data } = await api.post('/auth/login', form);
      sessionStorage.setItem('hwh_admin_token', data.token);
      navigate('/admin', { replace: true });
    } catch (err) {
      setState({ loading: false, error: err.response?.data?.message || 'Login failed' });
    }
  }

  return (
    <div className="grid min-h-screen place-items-center bg-[radial-gradient(circle_at_20%_15%,rgba(188,218,187,.55),transparent_30%),#f4f7f1] p-4">
      <div className="w-full max-w-md rounded-[2rem] border border-emerald-950/10 bg-white p-6 shadow-soft sm:p-8">
        <BrandMark />
        <span className="mt-8 grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-800"><LockKeyhole size={22} /></span>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#173f2f]">Admin Login</h1>
        <p className="mt-2 text-sm leading-6 text-slate-500">Use the admin credentials configured on the server.</p>
        <form onSubmit={submit} className="mt-7 grid gap-5">
          <div><label className="label" htmlFor="email">Email</label><input id="email" type="email" className="input" value={form.email} onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))} required autoComplete="username" /></div>
          <div><label className="label" htmlFor="password">Password</label><input id="password" type="password" className="input" value={form.password} onChange={(e) => setForm((v) => ({ ...v, password: e.target.value }))} required minLength={8} autoComplete="current-password" /></div>
          {state.error && <div className="rounded-2xl bg-rose-50 p-3 text-sm text-rose-700">{state.error}</div>}
          <button type="submit" className="btn-primary w-full" disabled={state.loading}>{state.loading ? <><Loader2 size={18} className="animate-spin" />Signing in...</> : 'Sign In'}</button>
        </form>
      </div>
    </div>
  );
}
