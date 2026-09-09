import React from 'react';
import { FadeIn } from '../components/FadeIn';

const SERVICES = [
  {
    num: "01",
    name: "Livraison en 48h",
    description: "Je crée votre site en 2 jours maximum, avec une qualité irréprochable et un design unique."
  },
  {
    num: "02",
    name: "Paiement Mobile Money",
    description: "Transactions simples et sécurisées. MVola, Orange Money et Airtel Money sont acceptés."
  },
  {
    num: "03",
    name: "100% Malgache",
    description: "Je comprends votre marché, vos défis et les attentes de vos clients locaux."
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white text-[#1a2a6c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-20">
      <h2 className="font-black uppercase text-center text-[clamp(2.5rem,8vw,120px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
        Pourquoi Moi ?
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10 border-b border-[rgba(26,42,108,0.15)] py-8 sm:py-10 md:py-12 first:border-t"
          >
            <div className="font-black text-[clamp(3rem,10vw,140px)] leading-none shrink-0 w-24 sm:w-32 md:w-48 text-[#c9a84c]">
              {service.num}
            </div>
            <div className="flex flex-col gap-2 md:gap-3">
              <h3 className="font-bold uppercase text-[clamp(1.2rem,2.2vw,2.1rem)] tracking-tight">
                {service.name}
              </h3>
              <p className="font-medium leading-relaxed max-w-2xl text-[clamp(0.9rem,1.6vw,1.25rem)] opacity-70">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
