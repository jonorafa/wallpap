'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function BuyButton({ pack }) {
  const { addToCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleAddToCart = () => {
    addToCart(pack);
  };

  const handleBuyNow = () => {
    setIsProcessing(true);
    // TODO: connect to Tranzila checkout flow
    setTimeout(() => setIsProcessing(false), 1200);
  };

  return (
    <div className="space-y-2.5">
      <button
        onClick={handleAddToCart}
        className="w-full bg-white text-black py-4 rounded-lg text-sm font-semibold hover:bg-white/85 transition-colors"
      >
        הוסף לעגלה
      </button>

      <button
        onClick={handleBuyNow}
        disabled={isProcessing}
        className="w-full border border-white/25 text-white py-4 rounded-lg text-sm font-semibold hover:bg-white/5 transition-colors disabled:opacity-60"
      >
        {isProcessing ? '...' : `קנה עכשיו — ₪${pack.price}`}
      </button>
    </div>
  );
}
