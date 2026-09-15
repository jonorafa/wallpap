'use client';

import React, { useEffect, useState } from 'react';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

function useLiveClock() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return { date: '', time: '' };

  const date = `${now.toLocaleDateString('en-US', { weekday: 'short' })} ${now.getDate()} ${now.toLocaleDateString('en-US', { month: 'short' })}`;
  const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

  return { date, time };
}

export default function WallpaperPreview({ images }) {
  const [selected, setSelected] = useState(0);
  const { date, time } = useLiveClock();

  return (
    <div className="mx-auto w-full max-w-xl">
      {/* Laptop frame */}
      <div className="rounded-t-2xl bg-gradient-to-b from-neutral-300 to-neutral-400 p-[3px] shadow-2xl">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] bg-black">
          <div className="absolute inset-x-0 top-0 z-20 flex h-4 items-center justify-center rounded-b-md bg-black">
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
          </div>

          <img
            src={images[selected]}
            alt=""
            className="h-full w-full object-cover transition-opacity duration-300"
          />

          <div className="pointer-events-none absolute inset-x-0 top-[16%] flex flex-col items-center text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            <span className="text-xs sm:text-sm font-medium tracking-wide">{date}</span>
            <span className="mt-1 text-5xl sm:text-6xl font-semibold tabular-nums leading-none">{time}</span>
          </div>
        </div>
      </div>

      {/* Hinge / base */}
      <div className="relative h-3 sm:h-4 rounded-b-2xl bg-gradient-to-b from-neutral-300 to-neutral-400 shadow-lg">
        <div className="absolute left-1/2 top-0 h-1.5 w-20 -translate-x-1/2 rounded-b-full bg-neutral-500/30" />
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {images.map((image, idx) => (
          <button
            key={image}
            onClick={() => setSelected(idx)}
            aria-label={`Preview wallpaper ${idx + 1}`}
            aria-pressed={selected === idx}
            className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg transition-all ${FOCUS} ${
              selected === idx ? 'ring-2 ring-indigo-500 ring-offset-2 ring-offset-[#0d0d0d]' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img src={image} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
