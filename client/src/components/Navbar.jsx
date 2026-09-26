import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandMark from './BrandMark.jsx';
import { scrollToLeadForm } from '../utils/scroll.js';

const links = [
  ['Home', '#home'],
  ['Benefits', '#benefits'],
  ['How It Works', '#how-it-works'],
  ['Experience', '#testimonials'],
  ['Contact', '#contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-all ${scrolled ? 'border-[#173f2f]/10 bg-[#faf6ea]/95 py-1 shadow-sm backdrop-blur' : 'border-transparent bg-[#faf6ea]/85 py-2 backdrop-blur'}`}>
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#home" aria-label="Herbal Wellness Hub home"><BrandMark /></a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map(([label, href]) => <a key={label} href={href} className="text-sm font-semibold text-slate-700 transition hover:text-[#b9812e]">{label}</a>)}
        </nav>
        <div className="hidden lg:block">
          <button className="btn-primary" onClick={scrollToLeadForm}>Get Started</button>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-2xl border border-[#173f2f]/10 bg-white text-[#173f2f] lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-[#173f2f]/10 bg-white lg:hidden">
          <div className="section-shell py-4">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {links.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-[#f6f1e2]">{label}</a>
              ))}
              <button className="btn-primary mt-2" onClick={() => { setOpen(false); scrollToLeadForm(); }}>Get Started</button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
