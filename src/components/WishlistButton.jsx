'use client';

import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const STORAGE_KEY = 'reka_wishlist';

export default function WishlistButton({ packId }) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setIsSaved(saved.includes(packId));
    } catch {
      // ignore unavailable storage
    }
  }, [packId]);

  const toggleWishlist = () => {
    let saved = [];
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
      saved = [];
    }

    const next = saved.includes(packId) ? saved.filter((id) => id !== packId) : [...saved, packId];

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore unavailable storage
    }
    setIsSaved(next.includes(packId));
  };

  return (
    <button
      onClick={toggleWishlist}
      className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors"
    >
      <Heart className={`w-4 h-4 ${isSaved ? 'fill-white text-white' : ''}`} />
      <span>{isSaved ? 'ברשימת המשאלות' : 'הוסף לרשימת המשאלות'}</span>
    </button>
  );
}
