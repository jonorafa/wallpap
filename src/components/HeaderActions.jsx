'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { content } from '../lib/content';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';
const ICON = 'w-5 h-5 sm:w-6 sm:h-6';

export default function HeaderActions() {
  const { cart, openCart } = useCart();

  return (
    <div className="flex items-center gap-3 sm:gap-6">
      {/* Decorative for now — no search or account system yet */}
      <button aria-label="Search" className={`text-white/80 hover:text-white transition-colors ${FOCUS}`}>
        <Search className={ICON} strokeWidth={1.5} />
      </button>

      <button aria-label="Account" className={`text-white/80 hover:text-white transition-colors ${FOCUS}`}>
        <User className={ICON} strokeWidth={1.5} />
      </button>

      <Link
        href="/wishlist"
        aria-label={content.nav.wishlist}
        className={`text-white/80 hover:text-white transition-colors ${FOCUS}`}
      >
        <Heart className={ICON} strokeWidth={1.5} />
      </Link>

      <button
        onClick={openCart}
        aria-label={content.nav.bag}
        className={`relative text-white/80 hover:text-white transition-colors ${FOCUS}`}
      >
        <ShoppingBag className={ICON} strokeWidth={1.5} />
        {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
}
