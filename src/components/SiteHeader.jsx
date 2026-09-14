import React from 'react';

export default function SiteHeader() {
  return (
    <header className="border-b border-black/10">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight">
          RekaPaper
        </a>

        <a href="mailto:hello@rekapaper.com" className="text-sm hover:opacity-60 transition-opacity">
          צור קשר
        </a>
      </div>
    </header>
  );
}
