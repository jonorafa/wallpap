import React from 'react';

export default function Logo({ className = '' }) {
  return (
    <span className={`text-lg font-bold ${className}`}>
      Reka<span className="font-normal text-white/60">Paper</span>
    </span>
  );
}
