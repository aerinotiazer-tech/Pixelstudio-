import React from 'react';
import { FadeIn } from '../components/FadeIn';

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message envoyé !');
  };

  return (
    <section id="contact" className="bg-[#1a2a6c] text-white py-24 px-5 sm:px-8 md:px-10 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10">
        
        <FadeIn delay={0} y={30} className="flex flex-col gap-8">
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,6vw,70px)] leading-none tracking-tight">
            Discutons de votre projet
          </h2>
          <p className="text-lg text-white/80 font-medium">
            Prêt à transformer votre présence en ligne ? Remplissez ce formulaire ou réservez directement un créneau pour un audit gratuit.
          </p>
          <div className="mt-4">
            <a 
              href="https://calendly.com/rachidlemonteur/audit-gratuit" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#c9a84c] text-[#1a2a6c] rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors"
            >
              📅 Réserver un audit gratuit
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider">Nom complet</label>
              <input type="text" id="name" required className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#c9a84c] focus:outline-none text-white" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider">Email</label>
              <input type="email" id="email" required className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#c9a84c] focus:outline-none text-white" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider">Téléphone</label>
              <input type="tel" id="phone" className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#c9a84c] focus:outline-none text-white" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-[#c9a84c] uppercase tracking-wider">Message</label>
              <textarea id="message" rows={4} required className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-[#c9a84c] focus:outline-none text-white resize-none"></textarea>
            </div>
            
            <button
              type="submit"
              className="mt-4 px-8 py-4 bg-white text-[#1a2a6c] rounded-xl font-bold uppercase tracking-wider hover:bg-[#c9a84c] transition-colors"
            >
              Envoyer ma demande
            </button>
          </form>
        </FadeIn>

      </div>
    </section>
  );
};
