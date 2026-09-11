import React from 'react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

export const HeroSection: React.FC = () => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} duration={0.8} className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-20">
        {['À propos', 'Services', 'Projets', 'Contact'].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {item}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex flex-col justify-center items-center w-full z-20 pointer-events-none mt-6 sm:mt-4 md:-mt-5">
        <div className="overflow-hidden w-full flex justify-center">
          <FadeIn delay={0.15} y={40} duration={0.9} className="w-full flex justify-center text-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              PixelStudio
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Hero Portrait (Absolute Center) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30} duration={1}>
          <Magnet padding={150} strength={3}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Portrait PixelStudio"
              className="w-full h-auto object-contain pointer-events-auto"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 pointer-events-none">
        <FadeIn delay={0.35} y={20} duration={0.8}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            créateur de sites web qui font vendre, livrés en 48h — à Madagascar
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} duration={0.8} className="pointer-events-auto">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
