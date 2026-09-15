import React from 'react';
import Link from 'next/link';
import { content } from '../lib/content';

const LINKS = [
  { href: '/terms', label: content.footer.terms },
  { href: '/privacy', label: content.footer.privacy },
  { href: '/refund', label: content.footer.refund },
  { href: '/contact', label: content.footer.contact }
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-white/70">{content.footer.rights(new Date().getFullYear())}</p>
      </div>
    </footer>
  );
}
