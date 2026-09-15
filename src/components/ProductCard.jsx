import React from 'react';
import Link from 'next/link';
import PackCollage from './PackCollage';
import { content, formatPrice } from '../lib/content';

export default function ProductCard({ pack }) {
  return (
    <Link
      href={`/pack/${pack.id}`}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <div className="group-hover:opacity-90 transition-opacity duration-300">
        <PackCollage images={pack.images} />
      </div>
      <div className="pt-3 flex items-baseline justify-between gap-3 text-sm">
        <span className="font-medium">{pack.title}</span>
        <span className="text-white/70">{formatPrice(pack.price)}</span>
      </div>
      <p className="text-white/70 text-xs mt-0.5">{content.product.wallpaperCount(pack.images.length)}</p>
    </Link>
  );
}
