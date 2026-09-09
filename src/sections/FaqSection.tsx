import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/portfolioData';
import { FadeIn } from '../components/FadeIn';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0b143a] text-white relative z-20 border-t border-white/10">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Foire Aux Questions</span>
          </div>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.3rem,6vw,75px)] leading-none tracking-tight">
            Questions fréquentes
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium">
            Tout ce que vous devez savoir avant de lancer votre projet avec PixelStudio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeIn
                key={idx}
                delay={idx * 0.08}
                className="rounded-2xl border border-white/10 bg-[#121f52] overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#c9a84c] text-[#0d173d]' : 'text-white/70'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-white/80 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </FadeIn>
            );
          })}
        </div>

        {/* Still have a question pill */}
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
          <p className="text-sm text-white/80">
            Une question spécifique à votre secteur d'activité ?
          </p>
          <a
            href="https://wa.me/261340000000?text=Bonjour%20PixelStudio%2C%20j'ai%20une%20question%20pour%20mon%20site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#c9a84c] hover:underline"
          >
            <span>Posez-nous directement votre question sur WhatsApp →</span>
          </a>
        </div>

      </div>
    </section>
  );
};
