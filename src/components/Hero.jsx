import React, { useState } from 'react';
import { Smartphone, Monitor, Sparkles, ArrowRight, ShieldCheck, Download, Eye, Layers, Palette } from 'lucide-react';
import { WALLPAPERS } from '../data/wallpapers';

export default function Hero({ onSelectWallpaper, t, lang }) {
  const [selectedHeroWallpaper, setSelectedHeroWallpaper] = useState(WALLPAPERS[0]);
  const [deviceMode, setDeviceMode] = useState('iphone'); // 'iphone' or 'mac'

  return (
    <section id="hero-studio" className="relative overflow-hidden pt-10 pb-16 md:py-24 bg-[#090A0F] border-b border-white/5">
      {/* Ambient light glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-start">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest shadow-xl shadow-amber-500/5">
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.heroBadge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15] font-serif-luxury">
              {t.heroTitleLine1} <br className="hidden sm:block" />
              {t.heroTitleLine2} <span className="gold-gradient-text">{t.heroTitleAccent}</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {t.heroDesc}
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#shop"
                className="gold-gradient-bg text-slate-950 px-8 py-4 rounded-xl font-extrabold text-sm hover:brightness-110 transition-all duration-300 shadow-xl shadow-amber-500/25 flex items-center gap-2.5 group"
              >
                <span>{t.heroCtaExplore}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${lang === 'he' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>

              <button
                onClick={() => onSelectWallpaper(selectedHeroWallpaper)}
                className="glass-panel text-amber-200 px-6 py-4 rounded-xl font-bold text-sm hover:bg-white/10 hover:border-amber-400/50 transition-all duration-300 flex items-center gap-2"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>{t.heroCtaTest}</span>
              </button>
            </div>

            {/* Feature Highlights Grid */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-start max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.heroFeature1Title}</span>
                </div>
                <p className="text-slate-400 text-xs mt-1">{t.heroFeature1Desc}</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Layers className="w-4 h-4" />
                  <span>{t.heroFeature2Title}</span>
                </div>
                <p className="text-slate-400 text-xs mt-1">{t.heroFeature2Desc}</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Download className="w-4 h-4" />
                  <span>{t.heroFeature3Title}</span>
                </div>
                <p className="text-slate-400 text-xs mt-1">{t.heroFeature3Desc}</p>
              </div>
            </div>

          </div>

          {/* Right Interactive Device Showcase Column */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            {/* Device Format Switcher Pills */}
            <div className="bg-[#121420] p-1.5 rounded-full border border-amber-500/20 mb-6 flex items-center gap-2 shadow-2xl">
              <button
                onClick={() => setDeviceMode('iphone')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  deviceMode === 'iphone'
                    ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>{t.deviceIphone}</span>
              </button>

              <button
                onClick={() => setDeviceMode('mac')}
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  deviceMode === 'mac'
                    ? 'gold-gradient-bg text-slate-950 shadow-lg shadow-amber-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>{t.deviceMac}</span>
              </button>
            </div>

            {/* Mockup Showcase Box */}
            <div className="relative w-full max-w-md flex flex-col items-center min-h-[440px] justify-center">
              
              {/* iPhone Mockup Mode */}
              {deviceMode === 'iphone' && (
                <div className="relative w-[240px] sm:w-[270px] aspect-[9/19.5] rounded-[48px] p-3 bg-[#161824] border-[7px] border-[#2a2d3e] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 animate-fadeIn">
                  
                  {/* Dynamic Island Notch */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-end px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0d1527] border border-slate-700" />
                  </div>

                  {/* Lockscreen Time Overlay */}
                  <div className="absolute top-14 left-0 right-0 z-20 text-center text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] pointer-events-none">
                    <div className="text-[11px] font-semibold tracking-wide uppercase text-slate-200">{t.dayWednesday}</div>
                    <div className="text-5xl font-extrabold tracking-tighter font-mono">09:41</div>
                  </div>

                  {/* Wallpaper Screen Canvas */}
                  <div className="w-full h-full rounded-[38px] overflow-hidden relative group cursor-pointer" onClick={() => onSelectWallpaper(selectedHeroWallpaper)}>
                    <img
                      src={selectedHeroWallpaper.image}
                      alt={selectedHeroWallpaper.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                    
                    {/* Bottom Floating Info Pill */}
                    <div className="absolute bottom-4 left-3 right-3 text-center bg-black/70 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">{t.previewIphone}</span>
                      <span className="text-xs text-white font-medium truncate block">{selectedHeroWallpaper.title}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Mac Display Mockup Mode */}
              {deviceMode === 'mac' && (
                <div className="relative w-full max-w-md aspect-[16/10] bg-[#161824] border-[7px] border-[#2a2d3e] rounded-t-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-500 animate-fadeIn">
                  
                  {/* macOS Menu Bar Overlay */}
                  <div className="h-5 bg-black/80 backdrop-blur-md border-b border-white/10 px-3 flex items-center justify-between text-[10px] text-slate-200 z-20 relative">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="text-amber-400 font-bold"></span>
                      <span className="font-bold text-white">RekaPaper</span>
                      <span className="hidden sm:inline">File</span>
                      <span className="hidden sm:inline">Edit</span>
                      <span className="hidden sm:inline">View</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[9px]">
                      <span>100%</span>
                      <span>9:41 AM</span>
                    </div>
                  </div>

                  {/* Mac Wallpaper Canvas */}
                  <div className="w-full h-[calc(100%-20px)] relative group cursor-pointer" onClick={() => onSelectWallpaper(selectedHeroWallpaper)}>
                    <img
                      src={selectedHeroWallpaper.image}
                      alt={selectedHeroWallpaper.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* macOS Dock Overlay */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-2xl flex items-center gap-2 shadow-2xl">
                      <div className="w-6 h-6 rounded-lg bg-amber-500/90 flex items-center justify-center text-[10px] text-slate-950 font-bold">R</div>
                      <div className="w-6 h-6 rounded-lg bg-blue-600/80 flex items-center justify-center text-[10px]">🎨</div>
                      <div className="w-6 h-6 rounded-lg bg-slate-700/80 flex items-center justify-center text-[10px]">⚙️</div>
                      <div className="w-6 h-6 rounded-lg bg-purple-600/80 flex items-center justify-center text-[10px]">🖼️</div>
                    </div>

                    <div className="absolute top-8 left-3 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-start">
                      <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block">{t.previewMac}</span>
                      <span className="text-xs text-white font-medium truncate block">{selectedHeroWallpaper.title}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Hero Wallpaper Selector Thumbnails */}
            <div className="mt-6 flex items-center gap-3 bg-[#0f111a] p-2 rounded-2xl border border-white/10 shadow-lg">
              <span className="text-[11px] text-slate-400 font-semibold px-2 hidden sm:inline">{t.changeArtwork}</span>
              <div className="flex items-center gap-2">
                {WALLPAPERS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedHeroWallpaper(item)}
                    className={`w-10 h-10 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      selectedHeroWallpaper.id === item.id
                        ? 'border-amber-400 scale-110 shadow-lg shadow-amber-500/30'
                        : 'border-transparent opacity-50 hover:opacity-100'
                    }`}
                    title={item.title}
                  >
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
