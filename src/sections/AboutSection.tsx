import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { Smartphone, ShieldCheck, Zap, Globe, Sparkles, MapPin, Award, CheckCircle } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="a-propos" className="min-h-screen relative flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-24 overflow-hidden bg-[#16245c] text-white border-t border-white/10">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Floating Decorative Glass Pillars */}
      <div className="hidden xl:block absolute top-20 left-12 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl w-60 transform -rotate-3 hover:rotate-0 transition-transform">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-[#c9a84c]/20 text-[#c9a84c]">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#c9a84c] uppercase">Délai Record</div>
            <div className="text-sm font-black text-white">48h Chrono</div>
          </div>
        </div>
      </div>

      <div className="hidden xl:block absolute bottom-24 right-12 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl w-64 transform rotate-3 hover:rotate-0 transition-transform">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
            <Smartphone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-emerald-400 uppercase">Mobile Money</div>
            <div className="text-sm font-black text-white">MVola & Orange Money</div>
          </div>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center w-full max-w-5xl mx-auto text-center space-y-12">
        
        {/* Section Badge */}
        <FadeIn delay={0.05} y={20}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Créateur Web Indépendant • Madagascar</span>
          </div>
        </FadeIn>

        {/* Section Title */}
        <FadeIn delay={0.15} y={30}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,7vw,85px)]">
            À propos de moi
          </h2>
        </FadeIn>

        {/* Core Narrative */}
        <div className="max-w-3xl mx-auto space-y-6">
          <AnimatedText
            text="Je suis un développeur web passionné basé à Madagascar. Je transforme les projets des commerces, hôtels et créateurs malgaches en vitrines numériques professionnelles et rentables."
            className="font-semibold text-center leading-relaxed text-[clamp(1.1rem,2.5vw,1.8rem)] text-white/95"
          />

          <FadeIn delay={0.3} y={20}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto pt-4">
              À Madagascar, une page Facebook ne suffit plus pour rassurer les clients exigeants et les touristes. Avec un vrai site web à votre nom, vous gagnez une crédibilité immédiate, vous vous référencez en première page de Google et vous encaissez facilement par MVola ou Orange Money.
            </p>
          </FadeIn>
        </div>

        {/* 4 Pillars of Value Grid */}
        <FadeIn delay={0.4} y={30} className="w-full pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#c9a84c]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">Livraison 48h</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Votre temps est précieux. Votre site est conçu, validé et mis en ligne en deux jours ouvrés.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#c9a84c]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">100% Mobile First</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                90% des internautes à Madagascar naviguent sur téléphone. Votre site sera ultra-fluide sur tout smartphone.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#c9a84c]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">SEO Madagascar</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Optimisé pour apparaître sur Google lorsqu'un client recherche vos services à Tana ou en province.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#c9a84c]/50 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-1">Paiements Locaux</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Transactions simplifiées par MVola, Orange Money et Airtel Money sans frais cachés.
              </p>
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
};
