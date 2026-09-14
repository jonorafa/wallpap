import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/wallpapers';

export default function FaqSection({ t, lang }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-[#07080c] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-widest font-mono">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.faqBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white font-serif-luxury">
            {t.faqTitle} <span className="gold-gradient-text">{t.faqTitleAccent}</span>
          </h2>

          <p className="text-slate-400 text-sm">
            {t.faqSub}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const questionText = typeof faq.question === 'object' ? faq.question[lang] : faq.question;
            const answerText = typeof faq.answer === 'object' ? faq.answer[lang] : faq.answer;

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-start flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white hover:text-amber-300 transition-colors"
                >
                  <span>{questionText}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                    {answerText}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
