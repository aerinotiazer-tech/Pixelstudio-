import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Sites Vitrines',
    desc: 'Présentez votre activité, vos produits et vos coordonnées avec un site web moderne et professionnel, conçu pour asseoir votre crédibilité et convertir vos visiteurs en clients.',
    deliverables: ['Design Responsive', 'SEO Google Local', 'Intégration WhatsApp', 'Hébergement haute disponibilité']
  },
  {
    num: '02',
    title: 'E-commerce',
    desc: 'Vendez vos produits en direct avec une boutique sécurisée, intuitive et optimisée pour les paiements locaux sans friction.',
    deliverables: ['Paiement MVola & Orange Money', 'Catalogue dynamique', 'Panier d\'achat simplifié', 'Sécurité SSL']
  },
  {
    num: '03',
    title: 'Landing Pages',
    desc: 'Des pages d\'atterrissage percutantes conçues pour une offre ciblée, maximisant le retour sur investissement de vos campagnes.',
    deliverables: ['Copywriting axé conversion', 'Formulaires qualifiés', 'Temps de chargement < 2s', 'A/B Testing']
  },
  {
    num: '04',
    title: 'Automatisation',
    desc: 'Connectez vos outils de gestion et synchronisez vos prises de rendez-vous, commandes et relances sans intervention manuelle répétitive.',
    deliverables: ['Synchronisation Calendly', 'Notifications instantanées', 'Collecte de prospects', 'Rapports automatisés']
  },
  {
    num: '05',
    title: 'Audit & Conseil',
    desc: 'Analysez en profondeur la vitesse, le référencement et l\'expérience utilisateur de votre plateforme actuelle pour débloquer votre croissance.',
    deliverables: ['Diagnostic technique complet', 'Audit compatibilité 4G', 'Plan d\'action chiffré', 'Conseil ergonomie']
  },
];

export const ServicesSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="services" className="bg-[#FFFFFF] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-28 md:py-36 relative z-10">
      <FadeIn delay={0} y={40}>
        <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-16 sm:mb-20 md:mb-24">
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col divide-y divide-[#0C0C0C]/10 border-t border-[#0C0C0C]/10">
        {services.map((svc, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            className="group py-8 sm:py-10 md:py-12 px-3 sm:px-6 transition-all duration-300 hover:bg-[#0C0C0C]/[0.02] rounded-2xl cursor-default"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-center justify-between">
              {/* Left Column: Number & Title */}
              <div className="flex items-baseline gap-6 md:w-5/12">
                <span className="font-mono font-black text-3xl sm:text-4xl md:text-5xl text-[#0C0C0C]/30 group-hover:text-[#0C0C0C] transition-colors duration-300 select-none">
                  {svc.num}
                </span>
                <h3 className="font-medium uppercase text-xl sm:text-2xl md:text-3xl text-[#0C0C0C] tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                  {svc.title}
                </h3>
              </div>

              {/* Middle: Description & Deliverables */}
              <div className="flex-1 md:pr-6">
                <p className="font-light text-sm sm:text-base text-[#0C0C0C]/70 leading-relaxed">
                  {svc.desc}
                </p>

                {/* Deliverables pill tags */}
                <div className="flex items-center gap-2 flex-wrap mt-3.5">
                  {svc.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/10 text-[#0C0C0C]/60 group-hover:border-[#0C0C0C]/20 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Interactive Arrow */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-[#0C0C0C]/10 group-hover:border-[#0C0C0C] group-hover:bg-[#0C0C0C] group-hover:text-white text-[#0C0C0C] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
