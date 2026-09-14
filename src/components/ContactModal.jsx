import React, { useState } from 'react';
import { X, Send, Check, MessageSquare } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, t }) {
  if (!isOpen) return null;

  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#0d0e16] border border-amber-500/30 rounded-3xl p-6 text-white space-y-4 shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest font-mono">
          <MessageSquare className="w-4 h-4" />
          <span>RekaStudio Support</span>
        </div>

        <h3 className="text-xl font-bold text-white font-serif-luxury">{t.contactTitle}</h3>
        <p className="text-xs text-slate-400">
          {t.contactSub}
        </p>

        {sent ? (
          <div className="py-8 text-center space-y-2 text-emerald-400">
            <Check className="w-8 h-8 mx-auto" />
            <p className="text-sm font-semibold">{t.msgSuccess}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div>
              <label className="text-xs text-slate-300 block mb-1 font-semibold">{t.yourEmail}</label>
              <input
                type="email"
                required
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#121420] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <div>
              <label className="text-xs text-slate-300 block mb-1 font-semibold">{t.message}</label>
              <textarea
                required
                rows={4}
                placeholder="..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-[#121420] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50"
              />
            </div>

            <button
              type="submit"
              className="w-full gold-gradient-bg text-slate-950 py-3 rounded-xl text-xs font-extrabold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.sendMsg}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
