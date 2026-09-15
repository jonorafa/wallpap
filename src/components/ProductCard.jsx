import React from 'react';
import Link from 'next/link';
import PackCollage from './PackCollage';
import { formatPrice } from '../lib/content';

export default function ProductCard({ pack }) {
  return (
    <Link
      href={`/pack/${pack.id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <div className="group-hover:opacity-90 transition-opacity duration-300">
        <PackCollage images={pack.images} />
      </div>
      <div className="pt-3 text-left">
        <p className="font-bold">{pack.title}</p>
        <p className="text-white/60 mt-1">{formatPrice(pack.price)}</p>
      </div>
    </Link>
  );
}
