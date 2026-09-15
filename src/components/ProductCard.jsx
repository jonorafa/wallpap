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
      <div className="pt-3 text-left">
        <p className="font-bold">{pack.title}</p>
        <p className="mt-1 flex items-center gap-2">
          <span className="text-white/60">{formatPrice(pack.price)}</span>
          <span className="text-xs text-white/40">{content.product.wallpaperCount(pack.images.length)}</span>
        </p>
      </div>
    </Link>
  );
}
