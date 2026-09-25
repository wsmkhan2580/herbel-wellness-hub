import { useEffect, useRef, useState } from 'react';
import { Clock3 } from 'lucide-react';

const COUNTDOWN_DURATION = 24 * 60 * 60 * 1000;

function getTimeLeft(deadline) {
  const difference = Math.max(0, deadline - Date.now());
  return {
    total: difference,
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
}

function TimeBox({ value, label, compact = false }) {
  return (
    <div className={`rounded-2xl border border-emerald-950/10 bg-white text-center shadow-sm ${compact ? 'min-w-[66px] px-2 py-2.5' : 'min-w-[82px] px-3 py-3.5 sm:min-w-[96px]'}`}>
      <strong className={`block tabular-nums text-[#173f2f] ${compact ? 'text-xl' : 'text-2xl sm:text-3xl'}`}>{String(value).padStart(2, '0')}</strong>
      <span className={`mt-1 block font-medium text-slate-500 ${compact ? 'text-[10px]' : 'text-[11px] sm:text-xs'}`}>{label}</span>
    </div>
  );
}

export default function PriceCountdown({ compact = false }) {
  const deadlineRef = useRef(Date.now() + COUNTDOWN_DURATION);
  const [timeLeft, setTimeLeft] = useState({ total: COUNTDOWN_DURATION, hours: 24, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = getTimeLeft(deadlineRef.current);
      setTimeLeft(next);
      if (next.total <= 0) window.clearInterval(timer);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`rounded-3xl border border-emerald-950/10 bg-[#eef5eb] ${compact ? 'p-3.5' : 'p-5 sm:p-6'}`}>
      <div className="flex items-center gap-3">
        <span className={`grid shrink-0 place-items-center rounded-2xl bg-[#173f2f] text-white ${compact ? 'h-9 w-9' : 'h-11 w-11'}`}><Clock3 size={compact ? 17 : 20} /></span>
        <p className={`font-bold text-[#173f2f] ${compact ? 'text-sm' : 'text-base sm:text-lg'}`}>24 Hour Countdown</p>
      </div>
      <div className={`mt-4 flex flex-wrap ${compact ? 'gap-2' : 'gap-2.5 sm:gap-3'}`} aria-label="24 hour countdown">
        <TimeBox value={timeLeft.hours} label="घंटे" compact={compact} />
        <TimeBox value={timeLeft.minutes} label="मिनट" compact={compact} />
        <TimeBox value={timeLeft.seconds} label="सेकंड" compact={compact} />
      </div>
    </div>
  );
}
