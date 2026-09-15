import React from 'react';
import Link from 'next/link';
import HeaderActions from './HeaderActions';
import Logo from './Logo';
import { content } from '../lib/content';

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function SiteHeader() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-4 sm:py-6 flex items-center justify-between gap-4">
        <Link href="/" className={`shrink-0 ${FOCUS}`}>
          <Logo />
        </Link>

        <nav className="flex items-center gap-4 sm:gap-8 text-base">
          <div className="hidden sm:flex items-center gap-8">
            <Link href="/" className={`hover:text-white/70 transition-colors ${FOCUS}`}>
              {content.nav.collections}
            </Link>
            <Link href="/contact" className={`hover:text-white/70 transition-colors ${FOCUS}`}>
              {content.nav.contact}
            </Link>
          </div>
          <HeaderActions />
        </nav>
      </div>
    </header>
  );
}
