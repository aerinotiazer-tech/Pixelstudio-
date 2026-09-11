import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { ContactButton } from '../components/ContactButton';
import { Magnet } from '../components/Magnet';

export const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const headingY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const headingRotateX = useTransform(scrollYProgress, [0, 1], [0, 12]);

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const smoothHeadingY = useSpring(headingY, { stiffness: 100, damping: 25 });
  const smoothHeadingRotateX = useSpring(headingRotateX, { stiffness: 100, damping: 25 });
  const smoothPortraitY = useSpring(portraitY, { stiffness: 100, damping: 25 });
  const smoothPortraitScale = useSpring(portraitScale, { stiffness: 100, damping: 25 });

  return (
    <section
      ref={heroRef}
      className="h-screen flex flex-col overflow-x-clip relative perspective-[1200px]"
    >
      {/* Navbar */}
      <FadeIn delay={0} y={-15} duration={0.6} className="w-full px-6 md:px-10 pt-6 md:pt-8 flex justify-between items-center z-20">
        {[
          { label: 'À propos', href: '#a-propos' },
          { label: 'Services', href: '#services' },
          { label: 'Projets', href: '#projets' },
          { label: 'Contact', href: '#contact' },
        ].map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.3rem] hover:opacity-70 transition-opacity duration-200"
          >
            {item.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero Heading with 3D depth on scroll */}
      <motion.div
        style={{
          y: smoothHeadingY,
          scale: headingScale,
          rotateX: smoothHeadingRotateX,
          transformStyle: 'preserve-3d',
        }}
        className="flex-1 flex flex-col justify-center items-center w-full z-20 pointer-events-none mt-6 sm:mt-4 md:-mt-5 will-change-transform"
      >
        <div className="overflow-hidden w-full flex justify-center">
          <FadeIn delay={0.1} y={30} duration={0.8} className="w-full flex justify-center text-center">
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] drop-shadow-2xl">
              PixelStudio
            </h1>
          </FadeIn>
        </div>
      </motion.div>

      {/* Hero Portrait (Absolute Center) with 3D Parallax */}
      <motion.div
        style={{
          y: smoothPortraitY,
          scale: smoothPortraitScale,
          transformStyle: 'preserve-3d',
        }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 will-change-transform"
      >
        <FadeIn delay={0.3} y={20} duration={0.8}>
          <Magnet padding={120} strength={2.5}>
            <img 
              src="https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png" 
              alt="Portrait PixelStudio"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain pointer-events-auto filter drop-shadow-[0_25px_50px_rgba(0,0,0,0.8)]"
              loading="eager"
              decoding="async"
            />
          </Magnet>
        </FadeIn>
      </motion.div>

      {/* Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20 pointer-events-none">
        <FadeIn delay={0.25} y={15} duration={0.7}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug text-[clamp(0.75rem,1.4vw,1.4rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            conception de sites web sur-mesure & performants — à Madagascar
          </p>
        </FadeIn>
        <FadeIn delay={0.35} y={15} duration={0.7} className="pointer-events-auto">
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};
