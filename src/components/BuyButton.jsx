'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { content, formatPrice } from '../lib/content';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

export default function BuyButton({ pack }) {
  const { addToCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBuyNow = () => {
    setIsProcessing(true);
    // TODO: connect to payment provider
    setTimeout(() => setIsProcessing(false), 1200);
  };

  return (
    <div className="space-y-3">
      <button
        onClick={() => addToCart(pack)}
        className={`w-full bg-indigo-500 text-white py-4 rounded-full text-base font-bold hover:bg-indigo-600 transition-colors ${FOCUS}`}
      >
        {content.product.addToBag}
      </button>

      <button
        onClick={handleBuyNow}
        disabled={isProcessing}
        className={`w-full bg-white text-black py-4 rounded-full text-base font-bold hover:bg-white/85 transition-colors disabled:opacity-70 ${FOCUS}`}
      >
        {isProcessing ? content.product.processing : content.product.buyNow}
      </button>
    </div>
  );
}
