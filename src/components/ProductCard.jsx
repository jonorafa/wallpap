import React, { useState } from 'react';
import { Eye, ShoppingBag, Star, Smartphone, Monitor, Layers, Check, Sparkles } from 'lucide-react';

export default function ProductCard({ wallpaper, onPreview, onAddToCart }) {
  const [selectedFormat, setSelectedFormat] = useState('bundle'); // 'iphone', 'mac', 'bundle'
  const [isAdded, setIsAdded] = useState(false);

  const getPrice = () => wallpaper.prices[selectedFormat];

  const handleAdd = () => {
    onAddToCart(wallpaper, selectedFormat);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="group glass-panel rounded-3xl overflow-hidden border border-white/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between">
      
      {/* Image Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#121420] cursor-pointer" onClick={() => onPreview(wallpaper)}>
        <img
          src={wallpaper.image}
          alt={wallpaper.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
        />

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity" />

        {/* Badges top left */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          {wallpaper.isBestSeller && (
            <span className="gold-gradient-bg text-slate-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Bestseller</span>
            </span>
          )}
          {wallpaper.isNew && (
            <span className="bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-lg">
              Nouveau
            </span>
          )}
        </div>

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); onPreview(wallpaper); }}
            className="gold-gradient-bg text-slate-950 px-4 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
          >
            <Eye className="w-4 h-4" />
            <span>Tester la Loupe HD</span>
          </button>
        </div>

        {/* Category Tag bottom left */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-[10px] font-bold text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-amber-500/20">
            {wallpaper.categoryName}
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
            <div className="flex items-center gap-1 text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{wallpaper.rating.toFixed(1)}</span>
              <span className="text-slate-500 font-normal">({wallpaper.reviewsCount})</span>
            </div>
            <span className="text-[11px] text-slate-400">8K Retina Ultra HD</span>
          </div>

          <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
            {wallpaper.title}
          </h3>
          <p className="text-slate-400 text-xs mt-1 line-clamp-2 leading-relaxed">
            {wallpaper.description}
          </p>
        </div>

        {/* Format Selection Selector */}
        <div className="space-y-3 pt-2 border-t border-white/5">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
            <span>Choisir le format :</span>
            {selectedFormat === 'bundle' && (
              <span className="text-amber-400 text-[10px] font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Économisez 25%
              </span>
            )}
          </div>

          <div className="grid grid-cols-3 gap-1.5 bg-[#0f111a] p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setSelectedFormat('iphone')}
              className={`py-1.5 px-2 rounded-lg text-[11px] font-bold flex flex-col items-center gap-0.5 transition-all ${
                selectedFormat === 'iphone'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1">
                <Smartphone className="w-3 h-3" />
                <span>iPhone</span>
              </div>
              <span className="text-[10px] opacity-80">{wallpaper.prices.iphone}€</span>
            </button>

            <button
              onClick={() => setSelectedFormat('mac')}
              className={`py-1.5 px-2 rounded-lg text-[11px] font-bold flex flex-col items-center gap-0.5 transition-all ${
                selectedFormat === 'mac'
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1">
                <Monitor className="w-3 h-3" />
                <span>Mac</span>
              </div>
              <span className="text-[10px] opacity-80">{wallpaper.prices.mac}€</span>
            </button>

            <button
              onClick={() => setSelectedFormat('bundle')}
              className={`py-1.5 px-2 rounded-lg text-[11px] font-bold flex flex-col items-center gap-0.5 transition-all ${
                selectedFormat === 'bundle'
                  ? 'gold-gradient-bg text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1">
                <Layers className="w-3 h-3" />
                <span>Pack Duo</span>
              </div>
              <span className="text-[10px] font-black">{wallpaper.prices.bundle}€</span>
            </button>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-xs text-slate-400 block">Prix total</span>
              <div className="text-xl font-black text-white gold-gradient-text">
                {getPrice().toFixed(2)} €
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all duration-300 ${
                isAdded
                  ? 'bg-emerald-500 text-slate-950 scale-95'
                  : 'gold-gradient-bg text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-95'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Ajouté !</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Ajouter</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
