import React from 'react';
import { Palette, Layers, Sliders } from 'lucide-react';

export default function TextureShowcase({ t }) {
  return (
    <section id="quality" className="py-24 bg-[#090A0F] border-t border-b border-white/5 relative overflow-hidden">
      
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono">
            <Palette className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.showcaseBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold text-white font-serif-luxury">
            {t.showcaseTitle} <span className="gold-gradient-text">{t.showcaseTitleAccent}</span>
          </h2>

          <p className="text-slate-300 text-base leading-relaxed">
            {t.showcaseDesc}
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 space-y-5 group">
            <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif-luxury">{t.step1Title}</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {t.step1Desc}
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-amber-500/40 shadow-xl shadow-amber-500/10 space-y-5 relative group">
            <div className="absolute -top-3 right-6 gold-gradient-bg text-slate-950 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              {t.processSignature}
            </div>
            <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif-luxury">{t.step2Title}</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {t.step2Desc}
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-amber-500/30 transition-all duration-300 space-y-5 group">
            <div className="w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
              <Sliders className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif-luxury">{t.step3Title}</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              {t.step3Desc}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
