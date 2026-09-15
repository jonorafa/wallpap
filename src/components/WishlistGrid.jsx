'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';
import { readWishlist } from '../lib/wishlist';
import { content } from '../lib/content';

export default function WishlistGrid({ packs }) {
  const [savedIds, setSavedIds] = useState(null);

  useEffect(() => {
    setSavedIds(readWishlist());
  }, []);

  // null while reading localStorage on mount, so the empty state doesn't flash
  if (savedIds === null) return null;

  const saved = packs.filter((pack) => savedIds.includes(pack.id));

  if (saved.length === 0) {
    return (
      <div className="space-y-4">
        <p className="text-white/70">{content.wishlist.empty}</p>
        <Link
          href="/"
          className="inline-block underline hover:text-white/70 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          {content.wishlist.browse}
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
      {saved.map((pack) => (
        <ProductCard key={pack.id} pack={pack} />
      ))}
    </div>
  );
}
