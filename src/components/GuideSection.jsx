import React from 'react';
import { Smartphone, Monitor, Sparkles, CheckCircle2 } from 'lucide-react';

export default function GuideSection() {
  return (
    <section className="py-16 bg-[#0c0d16] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">Guide d'Installation Rapide</span>
          <h2 className="text-3xl font-extrabold text-white">Comment Appliquer vos Fonds Impasto ?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* iPhone Guide */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Sur iPhone (iOS 17 / 18)</h3>
                <span className="text-xs text-amber-300">Compatibilité Effet de Profondeur</span>
              </div>
            </div>

            <ol className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Téléchargez le fichier 4K dans votre application <strong>Photos</strong> ou <strong>Fichiers</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Ouvrez Réglages &gt; <strong>Fond d'écran</strong> &gt; Ajouter un nouveau fond d'écran.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Ajustez le cadrage pour que l'élément clé s'intègre sous l'horloge et profitez du relief impasto.</span>
              </li>
            </ol>
          </div>

          {/* Mac Guide */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gold-gradient-bg flex items-center justify-center text-slate-950 font-bold">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Sur Mac (macOS Sonoma / Sequoia)</h3>
                <span className="text-xs text-amber-300">Optimisé pour Écrans 5K & 8K Retina</span>
              </div>
            </div>

            <ol className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Enregistrez le fichier 8K haute définition dans vos images.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Faites un clic droit sur le Bureau et sélectionnez <strong>Modifier le fond d'écran...</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Glissez l'image Impasto dans la fenêtre pour l'appliquer immédiatement sur tous vos moniteurs.</span>
              </li>
            </ol>
          </div>

        </div>

      </div>
    </section>
  );
}
