import React from 'react';

export default function PackCollage({ pack }) {
  if (pack.coverType === 'grid') {
    // 3x3 Grid Collage layout for Complete Collection
    return (
      <div className="w-full aspect-square bg-[#1a1a1a] rounded-sm overflow-hidden grid grid-cols-3 grid-rows-3 gap-[2px] p-[2px] group-hover:opacity-95 transition-opacity duration-300">
        <img src={pack.images[0]} alt="" className="w-full h-full object-cover col-span-2 row-span-1" />
        <img src={pack.images[1]} alt="" className="w-full h-full object-cover col-span-1 row-span-1" />
        <img src={pack.images[2]} alt="" className="w-full h-full object-cover col-span-1 row-span-2" />
        <img src={pack.images[3]} alt="" className="w-full h-full object-cover col-span-2 row-span-1" />
        <img src={pack.images[4]} alt="" className="w-full h-full object-cover col-span-1 row-span-1" />
        <img src={pack.images[0]} alt="" className="w-full h-full object-cover col-span-1 row-span-1" />
      </div>
    );
  }

  // Horizontal Strips Collage layout for individual packs
  return (
    <div className="w-full aspect-square bg-[#1a1a1a] rounded-sm overflow-hidden flex flex-col justify-between gap-[2px] p-[2px] group-hover:opacity-95 transition-opacity duration-300">
      {pack.images.slice(0, 3).map((img, idx) => (
        <div key={idx} className="flex-1 overflow-hidden relative">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover object-center transform scale-105 group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  );
}
