import React from 'react';
import { TESTIMONIALS } from '../data/portfolioData';
import { FadeIn } from '../components/FadeIn';
import { Star, MapPin, CheckCircle, Quote, Smartphone } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section id="avis" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#091130] text-white relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-[#c9a84c]" />
            <span>Retours d'Expérience 100% Malgaches</span>
          </div>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.3rem,6vw,75px)] leading-none tracking-tight">
            Ils nous font confiance
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium">
            Découvrez comment nous avons transformé la visibilité de commerçants et hôteliers de Madagascar.
          </p>
        </div>

        {/* Testimonials 3-Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <FadeIn
              key={t.id}
              delay={idx * 0.15}
              className="bg-[#121f52] border border-white/10 rounded-3xl p-7 flex flex-col justify-between hover:border-[#c9a84c]/50 transition-all shadow-xl space-y-6"
            >
              <div className="space-y-4">
                {/* Stars and verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#c9a84c] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Avis Vérifié
                  </span>
                </div>

                {/* Comment quote */}
                <p className="text-white/90 text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Context info */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#c9a84c]"
                  />
                  <div>
                    <div className="font-bold text-sm text-white">{t.name}</div>
                    <div className="text-xs text-[#c9a84c] font-medium">{t.business}</div>
                    <div className="text-[10px] text-white/50 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-2.5 h-2.5" />
                      <span>{t.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono">
                    {t.paymentMethod}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Madagascar Trust Strip */}
        <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-wrap items-center justify-around gap-6 text-center text-xs text-white/70">
          <div>
            <div className="text-2xl font-black text-[#c9a84c]">48h</div>
            <div className="text-[11px] uppercase tracking-wider mt-0.5">Délai moyen respecté</div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-black text-[#c9a84c]">100%</div>
            <div className="text-[11px] uppercase tracking-wider mt-0.5">Clients satisfaits</div>
          </div>
          <div className="h-8 w-px bg-white/10 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-black text-[#c9a84c]">0 Ar</div>
            <div className="text-[11px] uppercase tracking-wider mt-0.5">Frais cachés ou imprévus</div>
          </div>
        </div>

      </div>
    </section>
  );
};
