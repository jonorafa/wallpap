'use client';

import React from 'react';
import { Search, User, ShoppingBag } from 'lucide-react';

export default function HeaderMinimal({ onOpenContact, onOpenCart, cartCount, onOpenSearch }) {
  return (
    <header className="w-full bg-[#121212] border-b border-[#222222] py-5 px-6 sm:px-12 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Name Logo */}
        <a href="#" className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity">
          PaperPaletteClub
        </a>

        {/* Right Menu Links & Icons */}
        <div className="flex items-center gap-6 text-sm text-slate-200 font-medium">
          <a href="#shop" className="hover:text-white underline decoration-white underline-offset-4">
            Shop
          </a>
          <button onClick={onOpenContact} className="hover:text-white transition-colors">
            Contact
          </button>

          <div className="flex items-center gap-4 ml-2">
            <button onClick={onOpenSearch} className="hover:text-white text-slate-300 transition-colors" aria-label="Recherche">
              <Search className="w-5 h-5" />
            </button>

            <button onClick={onOpenContact} className="hover:text-white text-slate-300 transition-colors" aria-label="Compte">
              <User className="w-5 h-5" />
            </button>

            <button onClick={onOpenCart} className="relative hover:text-white text-slate-300 transition-colors" aria-label="Panier">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-2 bg-white text-black font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
