'use client';

import React, { useState, useEffect } from 'react';
import { X, Smartphone, Monitor, Check, ShoppingBag, Star, Sparkles, ShieldCheck, Download } from 'lucide-react';

export default function PackDetailModal({ pack, onClose, onAddToCart, t, lang }) {
  const [deviceFormat, setDeviceFormat] = useState('iphone');
  const [selectedImage, setSelectedImage] = useState(pack?.images?.[0]);
  const [isAdded, setIsAdded] = useState(false);

  // Reset preview state each time a (new) pack is opened (matches prior behavior)
  useEffect(() => {
    if (pack) {
      setDeviceFormat('iphone');
      setSelectedImage(pack.images[0]);
      setIsAdded(false);
    }
  }, [pack?.id]);

  if (!pack) return null;

  const handleAdd = () => {
    onAddToCart(pack, deviceFormat);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const descriptionText = typeof pack.description === 'object' ? pack.description[lang] : pack.description;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0f111a] border border-amber-500/30 rounded-3xl overflow-hidden p-6 sm:p-8 text-white shadow-2xl flex flex-col md:flex-row gap-8 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Interactive Mockup Preview */}
        <div className="md:w-1/2 flex flex-col items-center justify-center bg-[#08090d] rounded-2xl p-6 relative border border-white/5">
          
          {/* Format Switcher Pills */}
          <div className="flex items-center gap-2 mb-6 bg-[#161824] p-1.5 rounded-xl border border-white/10">
            <button
              onClick={() => setDeviceFormat('iphone')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceFormat === 'iphone'
                  ? 'gold-gradient-bg text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>iPhone 4K</span>
            </button>

            <button
              onClick={() => setDeviceFormat('mac')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                deviceFormat === 'mac'
                  ? 'gold-gradient-bg text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Mac 8K</span>
            </button>
          </div>

          {/* Main Image Frame with Device Simulator */}
          {deviceFormat === 'iphone' ? (
            <div className="relative w-full max-w-[220px] aspect-[9/19] rounded-[36px] overflow-hidden border-[6px] border-[#252838] shadow-2xl bg-black">
              {/* Dynamic Island Notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20 flex items-center justify-end px-2" />
              <img
                src={selectedImage}
                alt={pack.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-10 left-0 right-0 text-center text-white font-mono text-2xl font-bold drop-shadow-md">
                09:41
              </div>
            </div>
          ) : (
            <div className="relative w-full max-w-sm aspect-[16/10] rounded-t-xl overflow-hidden border-[6px] border-[#252838] shadow-2xl bg-black">
              <div className="h-4 bg-black/80 text-[8px] text-white px-2 flex items-center justify-between">
                <span> Finder</span>
                <span>9:41 AM</span>
              </div>
              <img
                src={selectedImage}
                alt={pack.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Gallery Thumbnails Strip */}
          <div className="flex items-center gap-2 mt-6 overflow-x-auto max-w-full pb-2">
            {pack.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-12 h-12 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                  selectedImage === img
                    ? 'border-amber-400 scale-105 shadow-lg shadow-amber-500/30'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Info & Buying Action */}
        <div className="md:w-1/2 flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest font-mono flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{pack.count}</span>
              </span>
              <span className="flex items-center gap-1 text-amber-400 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{pack.rating || 5.0} / 5</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif-luxury leading-tight">
              {pack.title}
            </h2>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-white font-mono">
                {pack.price}
              </span>
              {pack.originalPrice && (
                <span className="text-sm text-slate-500 line-through font-mono">
                  {pack.originalPrice}
                </span>
              )}
            </div>

            <p className="text-slate-300 text-xs leading-relaxed">
              {descriptionText}
            </p>

            {/* Highlights List */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                {t.packIncluded}
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {pack.highlights ? (
                  pack.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))
                ) : (
                  <>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{t.spec1}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                      <span>{t.spec2}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Add to Cart CTA */}
          <div className="space-y-3 pt-4 border-t border-white/10">
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`w-full py-4 rounded-xl text-sm font-extrabold transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl ${
                isAdded
                  ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                  : 'gold-gradient-bg text-slate-950 hover:brightness-110 shadow-amber-500/25'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>{t.addedToCart}</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>{t.addToCartPrice} {pack.price}</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.sslSecure}</span>
              </span>
              <span className="flex items-center gap-1">
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.instantZipLink}</span>
              </span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
