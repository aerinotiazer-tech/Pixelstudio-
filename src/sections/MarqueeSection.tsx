import React from 'react';
import { Star, Zap, CheckCircle2, ShieldCheck, Smartphone, Globe } from 'lucide-react';

const HIGHLIGHTS = [
  { title: "Hôtel Baie Bleue", loc: "Nosy Be", tag: "+185% Réservations", tech: "0.7s 4G" },
  { title: "Maison Soie & Coton", loc: "Tana Analakely", tag: "Catalogue MVola", tech: "E-commerce" },
  { title: "Le Baobab Gourmand", loc: "Tamatave", tag: "Menu QR Code", tech: "Local SEO" },
  { title: "Madagascar Discovery", loc: "Antananarivo", tag: "Circuits & Devis", tech: "Multilingue" },
  { title: "Vanilla & Spices", loc: "Sava / Sambava", tag: "Export & B2B", tech: "Stripe & MVola" },
  { title: "Clinic Medical Plus", loc: "Tana Ankorondrano", tag: "Prise de RDV", tech: "Ultra-rapide" },
  { title: "Lodge Sainte-Marie", loc: "Île Sainte-Marie", tag: "Whales Safari", tech: "Direct WhatsApp" },
  { title: "Boutique Artisanale", loc: "Majunga", tag: "Paiement Orange Money", tech: "Mobile First" },
];

export const MarqueeSection = () => {
  const duplicated = [...HIGHLIGHTS, ...HIGHLIGHTS, ...HIGHLIGHTS];

  return (
    <section className="bg-[#091132] py-8 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
        {duplicated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#c9a84c]/50 transition-colors shrink-0 backdrop-blur-sm"
          >
            <div className="w-8 h-8 rounded-xl bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c]">
              <Zap className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">{item.title}</span>
                <span className="text-[10px] text-white/50">({item.loc})</span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs font-semibold text-[#c9a84c]">{item.tag}</span>
                <span className="text-[10px] text-white/40">•</span>
                <span className="text-[10px] text-emerald-400 font-mono">{item.tech}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
