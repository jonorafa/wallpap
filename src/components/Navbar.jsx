'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { Search, ShoppingBag, Palette, MessageSquare, Globe } from 'lucide-react';

// Reads localStorage during initial render — must be skipped on the server
// to avoid an SSR crash / hydration mismatch (matches original CSR-only behavior).
const CountdownTimer = dynamic(() => import('./CountdownTimer'), { ssr: false });

export default function Navbar({ onOpenContact, onOpenCart, cartCount, onOpenSearch, lang, onToggleLang, t }) {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#090A0F]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
      
      {/* Top Marketing Urgency Banner Notice */}
      <div className="bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 text-amber-200 text-[11px] font-medium py-1.5 px-4 text-center border-b border-amber-500/20 flex flex-wrap items-center justify-center gap-3">
        <span>{t.announcement}</span>
        <CountdownTimer lang={lang} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between">
        
        {/* Brand Monogram & Language Switcher Group */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#0d0e15] rounded-[10px] flex items-center justify-center">
                <Palette className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-200 transition-colors font-serif-luxury">
                {t.brandName}
              </span>
              <span className="text-[9px] tracking-widest text-amber-400/80 uppercase font-mono">
                {t.brandSub}
              </span>
            </div>
          </a>

          {/* Language Switcher Button next to Brand Name */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold transition-all shadow-md active:scale-95"
            title={lang === 'he' ? 'Switch to English' : 'עבור לעברית'}
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'he' ? 'עברית | EN' : 'EN | עברית'}</span>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a href="#shop" className="hover:text-amber-300 transition-colors relative py-1">
            {t.navCollections}
          </a>
          <a href="#hero-studio" className="hover:text-amber-300 transition-colors py-1">
            {t.navPreview}
          </a>
          <a href="#quality" className="hover:text-amber-300 transition-colors py-1">
            {t.navQuality}
          </a>
          <a href="#reviews" className="hover:text-amber-300 transition-colors py-1">
            {t.navReviews}
          </a>
          <a href="#faq" className="hover:text-amber-300 transition-colors py-1">
            {t.navFaq}
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          
          {/* Search button */}
          <button
            onClick={onOpenSearch}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
            aria-label="Recherche"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Contact button */}
          <button
            onClick={onOpenContact}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.support}</span>
          </button>

          {/* Cart Drawer Trigger */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-4 py-2 rounded-xl gold-gradient-bg text-slate-950 hover:brightness-110 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
            aria-label="Panier"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">{t.cart}</span>
            <span className="w-5 h-5 rounded-full bg-slate-950 text-amber-300 text-[10px] font-mono flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>

        </div>

      </div>
    </header>
  );
}
