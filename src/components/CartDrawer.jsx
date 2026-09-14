'use client';

import React, { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag, ShieldCheck, Download, Layers } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, onUpdateCart, onCheckout, t }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  // Reset promo form each time the drawer is reopened (matches prior behavior)
  useEffect(() => {
    if (isOpen) {
      setPromoCode('');
      setDiscountPercent(0);
      setPromoError('');
      setPromoSuccess('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    setPromoError('');
    setPromoSuccess('');

    const cleanCode = promoCode.trim().toUpperCase();
    if (cleanCode === 'REKA10' || cleanCode === 'REKA20') {
      const pct = cleanCode === 'REKA20' ? 20 : 10;
      setDiscountPercent(pct);
      setPromoSuccess(`Privilege -${pct}% applied!`);
    } else if (cleanCode === 'OLDMONEY') {
      setDiscountPercent(15);
      setPromoSuccess('Old Money Privilege -15% applied!');
    } else {
      setPromoError('Invalid code. Try "REKA10"');
    }
  };

  const removeItem = (indexToRemove) => {
    const updated = cart.filter((_, idx) => idx !== indexToRemove);
    onUpdateCart(updated);
  };

  const subtotal = cart.reduce((acc, item) => {
    const price = item.wallpaper?.prices?.[item.format] || item.wallpaper?.numericPrice || 24.99;
    return acc + price;
  }, 0);

  const discountAmount = (subtotal * discountPercent) / 100;
  const total = Math.max(0, subtotal - discountAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#090A0F] border-l border-amber-500/20 text-white shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#0e101a]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-400" />
              <h2 className="text-lg font-bold text-white font-serif-luxury">{t.cartTitle}</h2>
              <span className="text-xs bg-amber-500/20 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                {cart.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto text-amber-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="text-base font-bold text-white font-serif-luxury">{t.emptyCartTitle}</h3>
                <p className="text-slate-400 text-xs max-w-xs mx-auto">
                  {t.emptyCartDesc}
                </p>
              </div>
            ) : (
              cart.map((item, index) => {
                const itemPrice = item.wallpaper?.prices?.[item.format] || item.wallpaper?.numericPrice || 24.99;

                return (
                  <div
                    key={`${item.wallpaper.id}-${item.format}-${index}`}
                    className="bg-[#121420] p-3.5 rounded-2xl border border-white/10 flex gap-3 items-center group relative hover:border-amber-500/30 transition-all"
                  >
                    <img
                      src={item.wallpaper.image || item.wallpaper.images?.[0]}
                      alt={item.wallpaper.title}
                      className="w-16 h-16 rounded-xl object-cover border border-white/10"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{item.wallpaper.title}</h4>
                      
                      <div className="flex items-center gap-1 text-[11px] text-amber-300 mt-1">
                        <Layers className="w-3 h-3" /> Pack 8K (iPhone + Mac)
                      </div>

                      <div className="text-xs font-black text-amber-400 font-mono mt-1">
                        ₪ {itemPrice.toFixed(2)}
                      </div>
                    </div>

                    <button
                      onClick={() => removeItem(index)}
                      className="p-2 text-slate-500 hover:text-rose-400 transition-colors"
                      title="Remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })
            )}

            {/* Promo Code Form */}
            {cart.length > 0 && (
              <form onSubmit={handleApplyPromo} className="pt-4 border-t border-white/10 space-y-2">
                <label className="text-xs font-semibold text-slate-300 block">{t.promoPrivilege}</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder={t.promoPlaceholder}
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-[#121420] border border-white/10 rounded-xl px-3 py-2 text-xs text-white uppercase placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                  />
                  <button
                    type="submit"
                    className="glass-panel text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-bold text-xs px-4 py-2 rounded-xl transition-all"
                  >
                    {t.apply}
                  </button>
                </div>
                {promoError && <p className="text-[11px] text-rose-400">{promoError}</p>}
                {promoSuccess && <p className="text-[11px] text-emerald-400">{promoSuccess}</p>}
              </form>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#0e101a] space-y-4">
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span>{t.subtotal}</span>
                  <span className="font-semibold font-mono">₪ {subtotal.toFixed(2)}</span>
                </div>
                
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold font-mono">
                    <span>{t.discount} ({discountPercent}%)</span>
                    <span>-₪ {discountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-base font-black text-white pt-2 border-t border-white/10">
                  <span>{t.totalTtc}</span>
                  <span className="gold-gradient-text text-xl font-mono">₪ {total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => onCheckout({ cart, total, discountPercent })}
                className="w-full gold-gradient-bg text-slate-950 py-4 rounded-2xl font-black text-sm hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25"
              >
                <Download className="w-5 h-5" />
                <span>{t.checkoutButton}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.securePmtText}</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
