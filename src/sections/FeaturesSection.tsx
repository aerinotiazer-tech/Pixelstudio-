import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { Clock, CreditCard, MapPin } from 'lucide-react';

const FEATURES = [
  {
    icon: <Clock className="w-12 h-12 text-[#1a2a6c]" />,
    title: "Livraison en 48h",
    description: "Je crée votre site en 2 jours maximum."
  },
  {
    icon: <CreditCard className="w-12 h-12 text-[#1a2a6c]" />,
    title: "Paiement mobile money",
    description: "MVola, Orange Money, Airtel Money acceptés."
  },
  {
    icon: <MapPin className="w-12 h-12 text-[#1a2a6c]" />,
    title: "100% malgache",
    description: "Je comprends votre marché et vos besoins."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="pourquoi-nous" className="bg-white text-[#1a2a6c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <h2 className="font-black uppercase text-center text-[clamp(2.5rem,7vw,90px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
        Pourquoi PixelStudio_mg ?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {FEATURES.map((feature, i) => (
          <FadeIn
            key={i}
            delay={i * 0.15}
            className="flex flex-col items-center text-center gap-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="w-24 h-24 rounded-full bg-[#c9a84c]/20 flex items-center justify-center">
              {feature.icon}
            </div>
            <h3 className="font-bold text-2xl uppercase tracking-wide">
              {feature.title}
            </h3>
            <p className="font-medium text-gray-600 text-lg leading-relaxed">
              {feature.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
