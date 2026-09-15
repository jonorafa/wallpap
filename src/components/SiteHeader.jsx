import React from 'react';
import Link from 'next/link';
import HeaderActions from './HeaderActions';
import Logo from './Logo';
import { content } from '../lib/content';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className={FOCUS}>
          <Logo />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className={`hover:text-white/70 transition-colors ${FOCUS}`}>
            {content.nav.collections}
          </Link>
          <HeaderActions />
        </nav>
      </div>
    </header>
  );
}
