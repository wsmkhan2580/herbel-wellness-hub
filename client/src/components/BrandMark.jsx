import { Leaf } from 'lucide-react';

export default function BrandMark({ compact = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#173f2f] text-[#e4c98a] shadow-card">
        <Leaf size={20} strokeWidth={1.8} />
      </span>
      {!compact && (
        <span className="leading-tight">
          <strong className="block font-serif text-[15px] font-bold tracking-tight text-[#173f2f]">Herbal Wellness Hub</strong>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-[#b9812e]">Private wellness support</span>
        </span>
      )}
    </div>
  );
}
