import React from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';

export default function LegalPage({ title, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1 max-w-2xl w-full mx-auto px-6 py-12">
        <h1 className="text-2xl font-bold mb-6">{title}</h1>
        <div className="space-y-5 text-white/80 text-sm leading-relaxed [&_h2]:text-white [&_h2]:font-semibold [&_h2]:text-base [&_h2]:mt-8 [&_h2]:mb-2">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
