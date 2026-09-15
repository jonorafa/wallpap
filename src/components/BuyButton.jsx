'use client';

import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { content, formatPrice } from '../lib/content';

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
        onClick={handleBuyNow}
        disabled={isProcessing}
        className="w-full bg-white text-black py-4 rounded-lg text-sm font-semibold hover:bg-white/85 transition-colors disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        {isProcessing
          ? content.product.processing
          : `${content.product.buyNow} — ${formatPrice(pack.price)}`}
      </button>

      <button
        onClick={() => addToCart(pack)}
        className="block mx-auto text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
      >
        {content.product.addToBag}
      </button>
    </div>
  );
}
