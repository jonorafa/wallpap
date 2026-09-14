'use client';

import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function HeaderActions() {
  const { cart, openCart } = useCart();

  return (
    <div className="flex items-center gap-5">
      <button aria-label="חיפוש" className="text-white/80 hover:text-white transition-colors">
        <Search className="w-5 h-5" />
      </button>
      <button aria-label="חשבון" className="text-white/80 hover:text-white transition-colors">
        <User className="w-5 h-5" />
      </button>
      <button onClick={openCart} aria-label="עגלה" className="relative text-white/80 hover:text-white transition-colors">
        <ShoppingBag className="w-5 h-5" />
        {cart.length > 0 && (
          <span className="absolute -top-2 -end-2 w-4 h-4 rounded-full bg-white text-black text-[10px] font-bold flex items-center justify-center">
            {cart.length}
          </span>
        )}
      </button>
    </div>
  );
}
