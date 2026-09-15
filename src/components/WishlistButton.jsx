'use client';

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import { content } from '../lib/content';
import { readWishlist, toggleWishlist } from '../lib/wishlist';

export default function WishlistButton({ packId }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(readWishlist().includes(packId));
  }, [packId]);

  const handleToggle = () => {
    setIsSaved(toggleWishlist(packId).includes(packId));
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
    >
      <Heart className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : ''}`} />
      <span>{isSaved ? content.wishlist.added : content.wishlist.add}</span>
    </button>
  );
}
