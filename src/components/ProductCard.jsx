import React from 'react';
import Link from 'next/link';
import PackCollage from './PackCollage';

export default function ProductCard({ pack }) {
  return (
    <Link href={`/pack/${pack.id}`} className="group block">
      <div className="group-hover:opacity-90 transition-opacity duration-300">
        <PackCollage images={pack.images} />
      </div>
      <div className="pt-3 flex items-center justify-between text-sm">
        <span className="font-medium">{pack.title}</span>
        <span className="text-white/60">₪{pack.price}</span>
      </div>
    </Link>
  );
}
