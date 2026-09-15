import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ packs }) {
  return (
    <div id="shop" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
      {packs.map((pack) => (
        <ProductCard key={pack.id} pack={pack} />
      ))}
    </div>
  );
}
