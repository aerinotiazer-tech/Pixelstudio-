import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { Sparkles, ArrowRight, ShieldCheck, Zap, PhoneCall, Star, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote?: () => void;
}

export const HeroSection = ({ onOpenQuote }: HeroSectionProps) => {
  return (
    <section className="min-h-screen pt-28 sm:pt-32 pb-16 flex flex-col justify-between overflow-x-clip relative bg-gradient-to-b from-[#0b143a] via-[#14235e] to-[#1a2a6c] text-white">
      
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#c9a84c]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[90px] pointer-events-none"></div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col items-center justify-center text-center relative z-20">
        
        {/* Top Trust Pill */}
        <FadeIn delay={0.05} y={-15} className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#c9a84c]/30 text-xs sm:text-sm font-semibold tracking-wide text-[#e8cf7a] shadow-lg shadow-[#c9a84c]/5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Studio Web N°1 à Madagascar • Livraison 48h Chrono</span>
          </div>
        </FadeIn>

        {/* Main Giant Headline */}
        <FadeIn delay={0.15} y={30} className="w-full max-w-6xl">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-[0.95] text-[clamp(2.8rem,9vw,110px)] mb-4">
            PIXEL STUDIO
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white max-w-3xl mx-auto">
            Des sites web qui font vendre, <span className="text-[#c9a84c]">livrés en 48 heures</span>.
          </p>
        </FadeIn>

        {/* Subtitle / Value Proposition */}
        <FadeIn delay={0.25} y={20} className="max-w-2xl mx-auto mt-5">
          <p className="text-white/80 text-base sm:text-lg font-medium leading-relaxed">
            Nous transformons les commerces, hôtels et entrepreneurs de Madagascar en leaders numériques avec un site ultra-rapide optimisé pour le réseau 4G et connecté à MVola & WhatsApp.
          </p>
        </FadeIn>

        {/* Key Selling Points Pills */}
        <FadeIn delay={0.35} y={20} className="mt-8 flex flex-wrap justify-center gap-3 max-w-3xl">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90">
            <Clock className="w-4 h-4 text-[#c9a84c]" />
            <span>Mise en ligne en 48h garantie</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90">
            <ShieldCheck className="w-4 h-4 text-[#c9a84c]" />
            <span>Paiement MVola & Orange Money</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-white/90">
            <Zap className="w-4 h-4 text-[#c9a84c]" />
            <span>Ultra-rapide (&lt; 0.8s en 4G Malgache)</span>
          </div>
        </FadeIn>

        {/* Action Buttons */}
        <FadeIn delay={0.45} y={25} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c9a84c] text-[#0d173d] font-black uppercase text-sm tracking-wider hover:bg-[#dfbd5b] transition-all shadow-xl shadow-[#c9a84c]/25 hover:scale-105 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Estimer mon devis en 30s</span>
          </button>

          <a
            href="#projets"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-sm tracking-wider transition-all border border-white/20 flex items-center justify-center gap-2"
          >
            <span>Voir nos réalisations</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>

        {/* Interactive Magnetic Floating Orb with 3D feel and live metrics */}
        <FadeIn delay={0.55} y={35} className="mt-14 w-full max-w-4xl relative">
          <Magnet padding={120} strength={4} activeTransition="transform 0.25s ease-out">
            <div className="relative mx-auto w-[280px] sm:w-[420px] h-[180px] sm:h-[240px] rounded-3xl overflow-hidden border-2 border-[#c9a84c]/50 shadow-[0_0_50px_rgba(201,168,76,0.25)] bg-gradient-to-tr from-[#091233] to-[#1c2e74] flex items-center justify-center group cursor-pointer">
              
              {/* Orb background texture */}
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80"
                alt="PixelStudio Digital Craft"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
              />

              <div className="relative z-10 text-center px-6 py-4 bg-black/40 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="flex items-center justify-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-white font-bold ml-1">4.9 / 5</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                  +35 Commerces Propulsés
                </div>
                <p className="text-xs text-[#c9a84c] font-semibold mt-1">
                  Antananarivo • Nosy Be • Tamatave • Majunga
                </p>
              </div>

              {/* Floating badges around orb */}
              <div className="absolute top-3 left-3 bg-[#c9a84c] text-[#0d173d] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                Livré en 48h
              </div>
              <div className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                MVola Ready 🇲🇬
              </div>
            </div>
          </Magnet>
        </FadeIn>

      </div>

    </section>
  );
};
