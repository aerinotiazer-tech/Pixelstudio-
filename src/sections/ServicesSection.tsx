import React from 'react';
import { FadeIn } from '../components/FadeIn';

const services = [
  {
    num: '01',
    title: 'Sites Vitrines',
    desc: 'Présentez votre activité, vos produits et vos coordonnées avec un site web moderne et professionnel, conçu pour convertir vos visiteurs en clients.',
  },
  {
    num: '02',
    title: 'E-commerce',
    desc: 'Vendez vos produits en ligne avec une boutique sécurisée, adaptée au paiement mobile money (MVola, Orange Money, Airtel Money).',
  },
  {
    num: '03',
    title: 'Landing Pages',
    desc: 'Des pages conçues pour convertir vos visiteurs en clients, avec un design percutant et un appel à l\'action clair.',
  },
  {
    num: '04',
    title: 'Automatisation',
    desc: 'Automatisez vos réservations, vos relances clients et vos rappels avec des systèmes simples connectés à Calendly et Google AI.',
  },
  {
    num: '05',
    title: 'Audit & Conseil',
    desc: 'Analysez la performance de votre site existant (SEO, vitesse, sécurité) et recevez un plan d\'action personnalisé pour l\'améliorer.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-10">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-28">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((svc, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30} duration={0.8} className="w-full">
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12">
              <div className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none md:w-1/3 shrink-0">
                {svc.num}
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-medium uppercase text-[clamp(1rem,2.2vw,2.1rem)] text-[#0C0C0C]">
                  {svc.title}
                </h3>
                <p className="font-light text-[clamp(0.85rem,1.6vw,1.25rem)] text-[#0C0C0C]/60 max-w-2xl leading-relaxed mt-2">
                  {svc.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
