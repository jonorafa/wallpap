import React, { useState, useRef } from 'react';
import { X, Smartphone, Monitor, Layers, ZoomIn, Eye, ShoppingBag, Check, Sparkles, ShieldCheck } from 'lucide-react';

export default function DevicePreviewModal({ wallpaper, onClose, onAddToCart }) {
  if (!wallpaper) return null;

  const [activeDevice, setActiveDevice] = useState('iphone'); // 'iphone' or 'mac'
  const [selectedFormat, setSelectedFormat] = useState('bundle');
  const [showUIOverlay, setShowUIOverlay] = useState(true);
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });
  const [isAdded, setIsAdded] = useState(false);

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPos({ x, y });
  };

  const handleAdd = () => {
    onAddToCart(wallpaper, selectedFormat);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const price = wallpaper.prices[selectedFormat];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      
      {/* Modal Card */}
      <div className="relative w-full max-w-5xl glass-panel-gold rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl my-auto flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-40 p-2.5 rounded-full bg-black/60 hover:bg-amber-500 text-slate-300 hover:text-slate-950 transition-colors border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Interactive Preview Area */}
        <div className="lg:w-7/12 bg-[#0a0b12] p-6 flex flex-col items-center justify-between min-h-[440px] relative border-b lg:border-b-0 lg:border-r border-white/10">
          
          {/* Top Controls Bar */}
          <div className="w-full flex items-center justify-between gap-2 mb-4 z-20">
            {/* Device Switch */}
            <div className="flex items-center bg-[#131522] p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setActiveDevice('iphone')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeDevice === 'iphone' ? 'gold-gradient-bg text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>iPhone</span>
              </button>
              <button
                onClick={() => setActiveDevice('mac')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeDevice === 'mac' ? 'gold-gradient-bg text-slate-950' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Mac</span>
              </button>
            </div>

            {/* Toggle UI Overlay & Loupe buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowUIOverlay(!showUIOverlay)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  showUIOverlay ? 'bg-amber-500/20 border-amber-500/50 text-amber-300' : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                {showUIOverlay ? 'Masquer l\'Horloge/UI' : 'Afficher l\'Horloge/UI'}
              </button>

              <button
                onClick={() => setIsZoomActive(!isZoomActive)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                  isZoomActive ? 'gold-gradient-bg text-slate-950 font-bold' : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Loupe HD</span>
              </button>
            </div>
          </div>

          {/* Center Stage Mockup with Loupe */}
          <div
            ref={containerRef}
            onMouseEnter={() => setIsZoomActive(true)}
            onMouseLeave={() => setIsZoomActive(false)}
            onMouseMove={handleMouseMove}
            className="relative flex items-center justify-center my-auto w-full py-2 cursor-crosshair"
          >
            {/* iPhone Frame Mode */}
            {activeDevice === 'iphone' && (
              <div className="relative w-[220px] sm:w-[250px] aspect-[9/19.5] rounded-[44px] p-2.5 bg-[#1a1c2a] border-[5px] border-[#2d3044] shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
                
                {/* Dynamic Island */}
                {showUIOverlay && (
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 flex items-center justify-end px-2">
                    <div className="w-2 h-2 rounded-full bg-[#0e1628]" />
                  </div>
                )}

                {/* Lockscreen UI */}
                {showUIOverlay && (
                  <div className="absolute top-12 left-0 right-0 z-20 text-center text-white pointer-events-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    <div className="text-[10px] font-semibold text-slate-200 uppercase tracking-widest">Mercredi 2 Sept.</div>
                    <div className="text-4xl font-extrabold font-mono tracking-tight">09:41</div>
                  </div>
                )}

                <div className="w-full h-full rounded-[34px] overflow-hidden relative">
                  <img
                    src={wallpaper.image}
                    alt={wallpaper.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* Mac Frame Mode */}
            {activeDevice === 'mac' && (
              <div className="relative w-full max-w-md aspect-[16/10] bg-[#1a1c2a] border-[6px] border-[#2d3044] rounded-t-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden">
                
                {/* macOS Menu Bar */}
                {showUIOverlay && (
                  <div className="h-5 bg-black/60 backdrop-blur-md px-3 flex items-center justify-between text-[9px] text-slate-200 z-20 relative border-b border-white/10">
                    <div className="flex items-center gap-2 font-medium">
                      <span></span>
                      <span className="font-bold">Finder</span>
                      <span>Fichier</span>
                      <span>Édition</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono">
                      <span>100%</span>
                      <span>9:41</span>
                    </div>
                  </div>
                )}

                <div className="w-full h-full relative">
                  <img
                    src={wallpaper.image}
                    alt={wallpaper.title}
                    className="w-full h-full object-cover"
                  />

                  {/* macOS Dock */}
                  {showUIOverlay && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1 rounded-xl flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[8px]"></div>
                      <div className="w-5 h-5 rounded bg-slate-700 flex items-center justify-center text-[8px]">⚙️</div>
                      <div className="w-5 h-5 rounded bg-amber-600 flex items-center justify-center text-[8px]">🎨</div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Floating Impasto Zoom Loupe Circle */}
            {isZoomActive && (
              <div
                style={{
                  top: `${zoomPos.y}%`,
                  left: `${zoomPos.x}%`,
                  backgroundImage: `url(${wallpaper.image})`,
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  backgroundSize: '350%',
                }}
                className="absolute w-36 h-36 rounded-full border-4 border-amber-400 shadow-2xl pointer-events-none -translate-x-1/2 -translate-y-1/2 z-40 bg-no-repeat ring-4 ring-black/80 animate-scaleIn"
              >
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-black/80 px-2 py-0.5 rounded text-[9px] text-amber-300 font-bold uppercase tracking-wider whitespace-nowrap">
                  Zoom Impasto 3.5x
                </div>
              </div>
            )}
          </div>

          <div className="text-center text-xs text-amber-300/80 font-medium mt-2 flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5" />
            <span>Survolez l'image pour activer la loupe d'inspection des pinceaux</span>
          </div>
        </div>

        {/* Right Info & Pricing Purchase Panel */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                {wallpaper.categoryName}
              </span>
              <span className="text-xs text-slate-400">8K Ultra HD Retina</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {wallpaper.title}
            </h2>
            <p className="text-amber-200/70 text-xs font-serif-luxury italic">
              {wallpaper.subtitle}
            </p>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {wallpaper.description}
            </p>

            {/* Resolution specs */}
            <div className="bg-[#121422] p-3 rounded-2xl border border-white/10 space-y-1.5 text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-slate-400">
                  <Smartphone className="w-3.5 h-3.5 text-amber-400" /> Resolution iPhone:
                </span>
                <span className="font-mono text-white text-[11px] font-bold">{wallpaper.resolution.iphone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1 text-slate-400">
                  <Monitor className="w-3.5 h-3.5 text-amber-400" /> Resolution Mac:
                </span>
                <span className="font-mono text-white text-[11px] font-bold">{wallpaper.resolution.mac}</span>
              </div>
            </div>
          </div>

          {/* Format selection */}
          <div className="space-y-4">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
              Sélectionnez votre option :
            </label>

            <div className="space-y-2">
              <button
                onClick={() => setSelectedFormat('bundle')}
                className={`w-full p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                  selectedFormat === 'bundle'
                    ? 'glass-panel-gold border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-[#121422] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white flex items-center gap-2">
                      <span>Pack Duo Assorti (iPhone + Mac)</span>
                      <span className="text-[9px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded">POPULAIRE</span>
                    </div>
                    <span className="text-[11px] text-slate-400">2 fichiers séparés 4K/8K optimisés</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-black gold-gradient-text block">6.99 €</span>
                  <span className="text-[10px] text-emerald-400 font-semibold line-through">8.98 €</span>
                </div>
              </button>

              <button
                onClick={() => setSelectedFormat('iphone')}
                className={`w-full p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                  selectedFormat === 'iphone'
                    ? 'glass-panel-gold border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-[#121422] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Format iPhone Seul</div>
                    <span className="text-[11px] text-slate-400">4K Retina Portrait (1290x2796)</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-white">3.99 €</span>
              </button>

              <button
                onClick={() => setSelectedFormat('mac')}
                className={`w-full p-3.5 rounded-2xl border flex items-center justify-between text-left transition-all ${
                  selectedFormat === 'mac'
                    ? 'glass-panel-gold border-amber-400 shadow-lg shadow-amber-500/20'
                    : 'bg-[#121422] border-white/10 text-slate-400 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
                    <Monitor className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Format Mac / Desktop Seul</div>
                    <span className="text-[11px] text-slate-400">8K Ultra HD Paysage (5120x2880)</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-white">4.99 €</span>
              </button>
            </div>

            {/* Add to cart CTA */}
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`w-full py-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-xl transition-all duration-300 ${
                isAdded
                  ? 'bg-emerald-500 text-slate-950 scale-95'
                  : 'gold-gradient-bg text-slate-950 hover:brightness-110 shadow-amber-500/25 active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Ajouté au Panier !</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-5 h-5" />
                  <span>Ajouter au Panier — {price.toFixed(2)} €</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> Fichiers HD d'origine</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-amber-400" /> Garantie 100% Qualité</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
