import React from 'react';
import Link from 'next/link';

export default function ProductCard({ pack }) {
  return (
    <Link href={`/pack/${pack.id}`} className="group block">
      <div className="aspect-square overflow-hidden bg-black/5">
        <img
          src={pack.images[0]}
          alt={pack.title}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>
      <div className="pt-3 flex items-center justify-between text-sm">
        <span className="font-medium">{pack.title}</span>
        <span className="text-black/60">₪{pack.price}</span>
      </div>
    </Link>
  );
}
