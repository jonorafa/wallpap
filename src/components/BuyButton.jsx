'use client';

import React, { useState } from 'react';

export default function BuyButton({ pack }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleBuyNow = () => {
    setIsProcessing(true);
    // TODO: connect to Tranzila checkout flow
    setTimeout(() => setIsProcessing(false), 1200);
  };

  return (
    <button
      onClick={handleBuyNow}
      disabled={isProcessing}
      className="w-full bg-black text-white py-4 rounded-lg text-sm font-semibold hover:bg-black/85 transition-colors disabled:opacity-60"
    >
      {isProcessing ? '...' : `קנה עכשיו — ₪${pack.price}`}
    </button>
  );
}
