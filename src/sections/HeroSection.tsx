import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

export const HeroSection = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative bg-[#1a2a6c]">
      <FadeIn as="nav" delay={0} y={-20} className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 z-20">
        <div className="text-[#c9a84c] font-black text-2xl md:text-3xl tracking-tighter hidden sm:block">PixelStudio_mg</div>
        <div className="flex gap-4 sm:gap-8 justify-center w-full sm:w-auto">
          {['À propos', 'Projets', 'Audit', 'Contact'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-white font-semibold uppercase tracking-wider text-sm md:text-lg hover:text-[#c9a84c] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </FadeIn>

      <div className="flex-1 flex flex-col justify-center w-full relative z-20">
        <div className="overflow-hidden w-full flex justify-center">
          <FadeIn delay={0.15} y={40} className="w-full text-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] mt-6 sm:mt-4 md:-mt-5">
              PIXEL STUDIO
            </h1>
          </FadeIn>
        </div>
      </div>

      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-white/80 font-medium uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            Des sites web qui font vendre, livrés en 48h.
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <a href="#contact">
            <ContactButton>Démarrer</ContactButton>
          </a>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[240px] sm:w-[320px] md:w-[400px] lg:w-[480px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
            alt="Abstract 3D Shape"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-full border-4 border-[#c9a84c] shadow-[0_0_40px_rgba(201,168,76,0.3)] pointer-events-none"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
};
