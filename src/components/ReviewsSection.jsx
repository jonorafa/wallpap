import React from 'react';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/wallpapers';

export default function ReviewsSection({ t, lang }) {
  return (
    <section id="reviews" className="py-20 bg-[#090A0F] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 font-mono">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="ml-2 text-white">{t.reviewsSub}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
              {t.reviewsTitle} <span className="gold-gradient-text">{t.reviewsTitleAccent}</span>
            </h2>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => {
            const commentText = typeof rev.content === 'object' ? rev.content[lang] : rev.content;

            return (
              <div
                key={rev.id}
                className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition-all shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] text-amber-300 font-mono bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {t.verifiedPurchase}
                    </span>
                  </div>

                  <p className="text-slate-300 text-xs leading-relaxed italic">
                    "{commentText}"
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-9 h-9 rounded-full object-cover border border-amber-400/40"
                    />
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>{rev.name}</span>
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                      <span className="text-[10px] text-slate-400">{rev.role}</span>
                    </div>
                  </div>

                  <span className="text-[10px] text-slate-400 font-mono">
                    {rev.pack}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
