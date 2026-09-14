import React, { useState } from 'react';
import { Palette, Mail, Check } from 'lucide-react';

export default function Footer({ t }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 3000);
    }
  };

  return (
    <footer className="bg-[#050609] border-t border-white/10 text-slate-400 text-xs py-16 relative overflow-hidden">
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 via-amber-600 to-amber-800 p-0.5 shadow-lg shadow-amber-500/20">
                <div className="w-full h-full bg-[#0d0e15] rounded-[9px] flex items-center justify-center">
                  <Palette className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <span className="font-serif-luxury text-xl font-extrabold text-white tracking-tight">
                {t.brandName}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              {t.footerDesc}
            </p>
          </div>

          {/* Collections Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">{t.footerCollections}</h4>
            <ul className="space-y-2.5">
              <li><a href="#shop" className="hover:text-amber-300 transition-colors">Old Money Vibes</a></li>
              <li><a href="#shop" className="hover:text-amber-300 transition-colors">Riviera & Sunset</a></li>
              <li><a href="#shop" className="hover:text-amber-300 transition-colors">Nordic Canvas & Clay</a></li>
              <li><a href="#shop" className="hover:text-amber-300 transition-colors">Obsidian & Gold 24K</a></li>
            </ul>
          </div>

          {/* Compatibility Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 font-mono">{t.footerCompatibility}</h4>
            <ul className="space-y-2.5 text-slate-300">
              <li><span>iPhone 16 Pro Max, 15, 14, 13 (4K)</span></li>
              <li><span>Mac Studio, MacBook Pro 14" & 16" (8K)</span></li>
              <li><span>Studio Display & Pro Display XDR</span></li>
              <li><span>iPad Pro & iPad Air Retina</span></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">{t.footerCircle}</h4>
            <p className="text-slate-400 text-xs">{t.footerCircleDesc}</p>
            
            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>{t.subscribedMsg}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="email@example.com"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#121420] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  className="gold-gradient-bg text-slate-950 font-bold px-4 py-2.5 rounded-xl hover:brightness-110 shadow-lg shadow-amber-500/20"
                  title={t.subscribe}
                >
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} {t.rightsReserved}</p>
          <div className="flex items-center gap-6">
            <a href="#hero-studio" className="hover:text-amber-300 transition-colors">{t.backToTop}</a>
            <a href="#faq" className="hover:text-amber-300 transition-colors">{t.navFaq}</a>
            <a href="#reviews" className="hover:text-amber-300 transition-colors">{t.navReviews}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
