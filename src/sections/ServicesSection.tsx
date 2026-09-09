import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { SERVICES_DETAILED } from '../data/portfolioData';
import { Check, Clock, Sparkles, ArrowRight, Zap, ShoppingBag, Gauge } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesSection = ({ onSelectService }: ServicesSectionProps) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#c9a84c]" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-[#c9a84c]" />;
      case 'Gauge':
        return <Gauge className="w-6 h-6 text-[#c9a84c]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#c9a84c]" />;
    }
  };

  return (
    <section id="services" className="bg-[#f8f9fc] text-[#0d173d] rounded-t-[40px] sm:rounded-t-[60px] px-4 sm:px-6 lg:px-8 py-24 relative z-20 border-t border-white/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a2a6c]/10 text-[#1a2a6c] text-xs font-bold uppercase tracking-wider">
            <Clock className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Offres Clés en Main • 48h Chrono</span>
          </div>
          <h2 className="font-black uppercase text-[clamp(2.3rem,6vw,75px)] leading-none tracking-tight text-[#0d173d]">
            Nos Solutions & Tarifs
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Des forfaits transparents taillés pour le marché malgache, sans frais mensuels cachés.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES_DETAILED.map((service, i) => (
            <FadeIn
              key={service.num}
              delay={i * 0.15}
              className={`flex flex-col justify-between p-7 sm:p-8 rounded-3xl transition-all duration-300 relative ${
                service.highlight
                  ? 'bg-[#101c4c] text-white shadow-2xl ring-2 ring-[#c9a84c] scale-100 md:-translate-y-2'
                  : 'bg-white text-[#0d173d] border border-slate-200 shadow-sm hover:shadow-xl'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c9a84c] text-[#0d173d] text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Le Plus Populaire
                </div>
              )}

              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    service.highlight ? 'bg-white/10' : 'bg-[#c9a84c]/20'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                  <span className={`text-2xl font-black ${service.highlight ? 'text-[#c9a84c]' : 'text-slate-300'}`}>
                    {service.num}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className={`text-xs sm:text-sm font-medium mb-6 ${service.highlight ? 'text-white/70' : 'text-slate-500'}`}>
                  {service.subtitle}
                </p>

                {/* Price pill */}
                <div className="mb-6 pb-6 border-b border-current/10">
                  <span className="text-xs uppercase font-bold tracking-wider opacity-60 block">À partir de</span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className={`text-3xl font-black tracking-tight ${service.highlight ? 'text-[#c9a84c]' : 'text-[#1a2a6c]'}`}>
                      {service.startingPriceMGA}
                    </span>
                    <span className="text-xs opacity-60 font-medium">({service.startingPriceEUR})</span>
                  </div>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-300">
                    <Clock className="w-3 h-3" />
                    <span>Délai : {service.deliveryTime}</span>
                  </div>
                </div>

                {/* Deliverables List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70 block">Ce qui est inclus :</span>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${service.highlight ? 'text-[#c9a84c]' : 'text-[#1a2a6c]'}`} />
                      <span className={service.highlight ? 'text-white/90' : 'text-slate-700'}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div>
                <a
                  href="#simulateur"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className={`w-full py-3.5 px-4 rounded-2xl font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2 ${
                    service.highlight
                      ? 'bg-[#c9a84c] text-[#0d173d] hover:bg-[#dfbd5b] shadow-lg shadow-[#c9a84c]/20 hover:scale-[1.02]'
                      : 'bg-[#101c4c] text-white hover:bg-[#1a2a6c]'
                  }`}
                >
                  <span>Configurer cette offre</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* The 48-Hour Process Step-by-Step */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">Méthode Éprouvée</span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0d173d] uppercase tracking-tight">
              Comment livrons-nous en 48 heures chrono ?
            </h3>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Un processus d’exécution chirurgical sans réunions interminables ni perte de temps.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#101c4c] text-[#c9a84c] font-black text-sm flex items-center justify-center">1</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Jour 1 • Matin</span>
              </div>
              <h4 className="font-bold text-base text-[#0d173d]">Brief Express & Maquette</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Échange de 20 min par WhatsApp ou téléphone pour valider vos photos, vos offres et vos couleurs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#101c4c] text-[#c9a84c] font-black text-sm flex items-center justify-center">2</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Jour 1 • Soir</span>
              </div>
              <h4 className="font-bold text-base text-[#0d173d]">Développement & Mobile</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Codage sur-mesure ultra-léger, optimisation du temps de chargement 4G et intégration WhatsApp / MVola.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#c9a84c] text-[#0d173d] font-black text-sm flex items-center justify-center">3</span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Jour 2 • Soir</span>
              </div>
              <h4 className="font-bold text-base text-[#0d173d]">Mise en ligne & Formation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Attribution de votre nom de domaine, activation du certificat SSL et tutoriel vidéo pour être 100% autonome.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
