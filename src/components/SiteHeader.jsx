import React from 'react';
import HeaderActions from './HeaderActions';

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-lg font-bold tracking-tight">
          RekaPaper
        </a>

        <nav className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-white/70 transition-colors">
              חנות
            </a>
            <a href="mailto:hello@rekapaper.com" className="hover:text-white/70 transition-colors">
              צור קשר
            </a>
          </div>

          <HeaderActions />
        </nav>
      </div>
    </header>
  );
}
