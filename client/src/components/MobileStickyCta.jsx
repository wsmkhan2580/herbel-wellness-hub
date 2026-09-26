import { ArrowRight } from 'lucide-react';
import { scrollToLeadForm } from '../utils/scroll.js';

export default function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#173f2f]/10 bg-white/95 p-3 backdrop-blur md:hidden">
      <button onClick={scrollToLeadForm} className="btn-primary w-full">Fill the Form/अभी फ़ॉर्म भरें</button>
    </div>
  );
}
