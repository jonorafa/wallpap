'use client';

import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, Download, Sparkles, X } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, cartDetails, onClearCart, t }) {
  const [downloadProgress, setDownloadProgress] = useState({});

  useEffect(() => {
    if (!isOpen) return;
    // Launch gold confetti celebration
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#E5A93B', '#F5C775', '#ffffff', '#B37B1D']
    });
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadFile = (wallpaper, format) => {
    const key = `${wallpaper.id}-${format}`;
    setDownloadProgress((prev) => ({ ...prev, [key]: true }));

    // TODO: replace with secure download flow (Tranzila + signed URL)
    // Virtual download link trigger
    const link = document.createElement('a');
    link.href = wallpaper.image || wallpaper.images?.[0];
    link.download = `RekaPaper-${wallpaper.id}-${format}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadProgress((prev) => ({ ...prev, [key]: false }));
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-[#0d0e16] rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl text-white space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center mx-auto text-slate-950 shadow-xl shadow-amber-500/30">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif-luxury">
            {t.orderConfirmed}
          </h2>
          <p className="text-amber-200/80 text-xs sm:text-sm">
            {t.orderSub}
          </p>
        </div>

        {/* Downloads list */}
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
            {t.filesReady}
          </div>

          {cartDetails?.cart?.map((item, idx) => (
            <div
              key={`${item.wallpaper.id}-${idx}`}
              className="bg-[#121420] p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <img
                  src={item.wallpaper.image || item.wallpaper.images?.[0]}
                  alt={item.wallpaper.title}
                  className="w-12 h-12 rounded-xl object-cover border border-white/10"
                />
                <div>
                  <h4 className="text-xs font-bold text-white">{item.wallpaper.title}</h4>
                  <span className="text-[11px] text-amber-300 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Pack 8K (iPhone & Mac)</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleDownloadFile(item.wallpaper, item.format)}
                className="w-full sm:w-auto gold-gradient-bg text-slate-950 px-4 py-2.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 hover:brightness-110 shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>
                  {downloadProgress[`${item.wallpaper.id}-${item.format}`] ? t.downloading : t.downloadBtn}
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Installation Tip */}
        <div className="bg-[#121422] p-4 rounded-2xl border border-amber-500/20 text-xs text-slate-300 space-y-2">
          <div className="font-bold text-amber-300 flex items-center gap-1.5 font-mono">
            <Sparkles className="w-4 h-4" />
            <span>{t.installGuideTitle}</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {t.installGuideText}
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => {
            onClearCart();
            onClose();
          }}
          className="w-full glass-panel text-white py-3.5 rounded-2xl font-bold text-xs hover:bg-white/10 transition-colors"
        >
          {t.closeAndReturn}
        </button>

      </div>

    </div>
  );
}
