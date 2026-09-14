import React, { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';

export default function CountdownTimer({ lang }) {
  // Set 12-hour countdown timer (43200 seconds)
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedEnd = localStorage.getItem('reka_deal_endtime');
    const now = Date.now();
    if (savedEnd && parseInt(savedEnd) > now) {
      return Math.floor((parseInt(savedEnd) - now) / 1000);
    }
    // Set 12 hours from now
    const newEnd = now + 12 * 3600 * 1000;
    localStorage.setItem('reka_deal_endtime', newEnd.toString());
    return 12 * 3600;
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Reset 12 hours cycle
          const newEnd = Date.now() + 12 * 3600 * 1000;
          localStorage.setItem('reka_deal_endtime', newEnd.toString());
          return 12 * 3600;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  const textUrgency = lang === 'he' ? 'המבצע המיוחד מסתיים בעוד:' : 'Limited Offer Ends In:';

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold shadow-inner">
      <Flame className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
      <span className="hidden sm:inline text-[11px] font-sans">{textUrgency}</span>
      <div className="flex items-center gap-1 text-white font-mono font-black tracking-widest bg-black/40 px-2 py-0.5 rounded border border-white/10">
        <span>{hours}</span>
        <span className="text-amber-400 animate-pulse">:</span>
        <span>{minutes}</span>
        <span className="text-amber-400 animate-pulse">:</span>
        <span>{seconds}</span>
      </div>
    </div>
  );
}
