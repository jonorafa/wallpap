import React from 'react';
import { PACK_CATEGORIES } from '../data/wallpapers';
import { Sparkles, Palette, Smartphone, Monitor, Grid } from 'lucide-react';

export default function ThemeFilterBar({ activeCategory, setActiveCategory, activeFormat, setActiveFormat, t }) {
  return (
    <div id="shop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-1.5 font-mono">
            <Palette className="w-4 h-4" />
            <span>{t.catalogSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif-luxury">
            {t.catalogTitle} <span className="gold-gradient-text">{t.catalogTitleAccent}</span>
          </h2>
          <p className="text-slate-400 text-sm mt-1.5 max-w-xl">
            {t.catalogDesc}
          </p>
        </div>

        {/* Format Selector Pills */}
        <div className="flex items-center bg-[#131520] p-1.5 rounded-2xl border border-white/10 self-start md:self-auto shadow-inner">
          <button
            onClick={() => setActiveFormat('all')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFormat === 'all'
                ? 'gold-gradient-bg text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>{t.filterAllFormats}</span>
          </button>

          <button
            onClick={() => setActiveFormat('iphone')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFormat === 'iphone'
                ? 'gold-gradient-bg text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>{t.filterIphone}</span>
          </button>

          <button
            onClick={() => setActiveFormat('mac')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFormat === 'mac'
                ? 'gold-gradient-bg text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>{t.filterMac}</span>
          </button>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none border-b border-white/10">
        {PACK_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const label = t[cat.nameKey] || cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'glass-panel-gold text-amber-300 border-amber-500/50 shadow-lg shadow-amber-500/10 scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
              <span>{label}</span>
            </button>
          );
        })}
      </div>

    </div>
  );
}
