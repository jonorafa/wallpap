import React, { useState } from 'react';
import { Eye, ShoppingBag, Star, Sparkles, Smartphone } from 'lucide-react';

export default function PackCard({ pack, onClick, onQuickAdd, t, lang }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleCardClick = (e) => {
    e.stopPropagation();
    onClick(pack);
  };

  const handleQuickAddClick = (e) => {
    e.stopPropagation();
    onQuickAdd(pack);
  };

  const currentImage = pack.images[activeImageIndex] || pack.images[0];
  const tagLabel = pack.tagKey ? t[pack.tagKey] : pack.tag;
  const descriptionText = typeof pack.description === 'object' ? pack.description[lang] : pack.description;

  return (
    <div
      onClick={handleCardClick}
      className="group cursor-pointer bg-[#121420]/80 hover:bg-[#16192a] border border-white/10 hover:border-amber-500/40 rounded-2xl p-4 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl group-hover:bg-amber-500/15 transition-all pointer-events-none" />

      <div>
        {/* Cover Collage / Image Box */}
        <div className="w-full aspect-square relative rounded-xl overflow-hidden bg-[#0d0e15] border border-white/10 mb-4 shadow-inner">
          
          {/* Main Display Image */}
          <img
            src={currentImage}
            alt={pack.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />

          {/* Dark gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

          {/* Top Tag Badge */}
          {tagLabel && (
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full gold-gradient-bg text-slate-950 text-[10px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>{tagLabel}</span>
            </div>
          )}

          {/* Bottom Count Pill */}
          <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-[11px] text-amber-200 font-semibold flex items-center gap-1.5">
            <Smartphone className="w-3 h-3 text-amber-400" />
            <span>{pack.count}</span>
          </div>

          {/* Quick Eye Preview Icon on Hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="bg-slate-950/80 backdrop-blur-md text-amber-200 text-xs font-bold px-4 py-2 rounded-xl border border-amber-500/40 flex items-center gap-2 shadow-2xl">
              <Eye className="w-4 h-4 text-amber-400" />
              <span>{t.viewStudio}</span>
            </span>
          </div>
        </div>

        {/* Thumbnail Selector Strip */}
        {pack.images && pack.images.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 mb-3" onClick={(e) => e.stopPropagation()}>
            {pack.images.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImageIndex(idx)}
                className={`w-6 h-1.5 rounded-full transition-all ${
                  activeImageIndex === idx
                    ? 'bg-amber-400 w-8'
                    : 'bg-white/20 hover:bg-white/50'
                }`}
                title={`Image ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Title & Rating */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-3 h-3 fill-amber-400" />
              <span>{pack.rating || 5.0}</span>
              <span className="text-slate-500">({pack.reviewsCount || 198})</span>
            </span>
            <span className="text-slate-400 uppercase">Reka Studio</span>
          </div>

          <h3 className="text-sm font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
            {pack.title}
          </h3>

          <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed">
            {descriptionText}
          </p>
        </div>
      </div>

      {/* Footer Price & Add Button */}
      <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between gap-2">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-base font-extrabold text-white font-mono">
              {pack.price}
            </span>
            {pack.originalPrice && (
              <span className="text-xs text-slate-500 line-through font-mono">
                {pack.originalPrice}
              </span>
            )}
          </div>
          <span className="text-[10px] text-emerald-400 font-medium block">
            {t.instantDownloadTag}
          </span>
        </div>

        <button
          onClick={handleQuickAddClick}
          className="p-2.5 rounded-xl bg-white/10 hover:bg-amber-500 text-slate-200 hover:text-slate-950 transition-all duration-300 border border-white/10 hover:border-amber-400 flex items-center justify-center shadow-lg"
          title={t.addToCart}
        >
          <ShoppingBag className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
