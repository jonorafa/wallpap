'use client';

import React, { useEffect, useState } from 'react';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

// Measured directly on /public/mockups/laptop.avif (740x457, front-on, no
// perspective skew): the white screen area runs x 140-620, y 31-331.
const SCREEN = { left: '18.92%', top: '6.78%', width: '64.86%', height: '65.65%' };

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
    <div className="mx-auto w-full max-w-2xl">
      <div className="relative w-full" style={{ aspectRatio: '740 / 457' }}>
        {/* Laptop frame photo, untouched */}
        <img
          src="/mockups/laptop.png"
          alt=""
          className="absolute inset-0 h-full w-full select-none"
          draggable={false}
        />

        {/* Wallpaper composited into the screen area, on top of the frame's white screen */}
        <div className="absolute overflow-hidden" style={SCREEN}>
          <img
            src={images[selected]}
            alt=""
            className="h-full w-full object-cover transition-opacity duration-300"
          />

          <div className="pointer-events-none absolute inset-x-0 top-[12%] flex flex-col items-center text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.5)]">
            <span className="text-[3.2vw] sm:text-xs font-medium tracking-wide">{date}</span>
            <span className="mt-0.5 text-[8vw] sm:text-3xl font-semibold tabular-nums leading-none">
              {time}
            </span>
          </div>
        </div>
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
