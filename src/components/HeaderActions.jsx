'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { content } from '../lib/content';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function HeaderActions() {
  const { cart, openCart } = useCart();

  return (
    <div className="flex items-center gap-5">
      <Link
        href="/wishlist"
        aria-label={content.nav.wishlist}
        className={`text-white/80 hover:text-white transition-colors ${FOCUS}`}
      >
        <Heart className="w-5 h-5" />
      </Link>

      <button
        onClick={openCart}
        aria-label={content.nav.bag}
        className={`relative text-white/80 hover:text-white transition-colors ${FOCUS}`}
      >
        <ShoppingBag className="w-5 h-5" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
}
