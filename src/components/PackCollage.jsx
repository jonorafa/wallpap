import React from 'react';

export default function PackCollage({ images, aspect = 'aspect-square', minStrips = 6 }) {
  const stripCount = Math.max(images.length, minStrips);
  const strips = Array.from({ length: stripCount }, (_, i) => ({
    image: images[i % images.length],
    // vary the crop so a repeated image doesn't show the exact same slice twice
    position: `50% ${(i * 37) % 100}%`
  }));

  return (
    <div className={`w-full ${aspect} overflow-hidden bg-white/5 flex flex-col gap-[2px]`}>
      {strips.map((strip, idx) => (
        <div key={idx} className="flex-1 overflow-hidden">
          <img
            src={strip.image}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: strip.position }}
          />
        </div>
      ))}
    </div>
  );
}
