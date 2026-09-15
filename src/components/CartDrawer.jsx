'use client';

import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { content, formatPrice } from '../lib/content';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function CartDrawer() {
  const { cart, removeFromCart, isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    // TODO: connect to payment provider
  };

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={closeCart} />

      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-[#141414] border-l border-white/10 flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <h2 className="font-semibold">{content.bag.title}</h2>
          <button onClick={closeCart} aria-label={content.bag.close} className={FOCUS}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <p className="text-white/70 text-sm">{content.bag.empty}</p>
          ) : (
            cart.map((item, idx) => (
              <div key={`${item.id}-${idx}`} className="flex items-center gap-3">
                <img src={item.image} alt="" className="w-14 h-14 object-cover rounded" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{item.title}</p>
                  <p className="text-xs text-white/70">{formatPrice(item.price)}</p>
                </div>
                <button
                  onClick={() => removeFromCart(idx)}
                  aria-label={`${content.bag.remove} ${item.title}`}
                  className={`text-white/70 hover:text-white ${FOCUS}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-5 border-t border-white/10 space-y-3">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>{content.bag.total}</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button
              onClick={handleCheckout}
              className={`w-full bg-white text-black py-3.5 rounded-lg text-sm font-semibold hover:bg-white/85 transition-colors ${FOCUS}`}
            >
              {content.bag.checkout}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
