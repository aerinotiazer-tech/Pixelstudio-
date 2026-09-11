import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { AnimatedText } from '../components/AnimatedText';
import { ContactButton } from '../components/ContactButton';

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Smooth springs for 3D tumbling physics on scroll
  const moonRotateZRaw = useTransform(scrollYProgress, [0, 1], [-25, 45]);
  const moonRotateYRaw = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const moonYRaw = useTransform(scrollYProgress, [0, 1], [-60, 120]);
  const moonZRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-40, 60, -20]);

  const legoRotateZRaw = useTransform(scrollYProgress, [0, 1], [30, -50]);
  const legoRotateXRaw = useTransform(scrollYProgress, [0, 1], [-25, 35]);
  const legoYRaw = useTransform(scrollYProgress, [0, 1], [-40, 140]);
  const legoZRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 70, -30]);

  const objLeftYRaw = useTransform(scrollYProgress, [0, 1], [80, -100]);
  const objLeftRotateRaw = useTransform(scrollYProgress, [0, 1], [-20, 35]);
  const objRightYRaw = useTransform(scrollYProgress, [0, 1], [100, -120]);
  const objRightRotateRaw = useTransform(scrollYProgress, [0, 1], [15, -40]);

  // Spring smoothing
  const moonRotateZ = useSpring(moonRotateZRaw, { stiffness: 100, damping: 20 });
  const moonRotateY = useSpring(moonRotateYRaw, { stiffness: 100, damping: 20 });
  const moonY = useSpring(moonYRaw, { stiffness: 100, damping: 20 });
  const moonZ = useSpring(moonZRaw, { stiffness: 100, damping: 20 });

  const legoRotateZ = useSpring(legoRotateZRaw, { stiffness: 100, damping: 20 });
  const legoRotateX = useSpring(legoRotateXRaw, { stiffness: 100, damping: 20 });
  const legoY = useSpring(legoYRaw, { stiffness: 100, damping: 20 });
  const legoZ = useSpring(legoZRaw, { stiffness: 100, damping: 20 });

  const objLeftY = useSpring(objLeftYRaw, { stiffness: 90, damping: 22 });
  const objLeftRotate = useSpring(objLeftRotateRaw, { stiffness: 90, damping: 22 });
  const objRightY = useSpring(objRightYRaw, { stiffness: 90, damping: 22 });
  const objRightRotate = useSpring(objRightRotateRaw, { stiffness: 90, damping: 22 });

  return (
    <section
      ref={sectionRef}
      id="a-propos"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-24 sm:py-32 bg-[#0C0C0C] overflow-hidden perspective-[1200px]"
    >
      {/* 3D Decorative Assets with 3D Scroll Rotation & Depth */}
      <motion.div
        style={{
          y: moonY,
          rotateZ: moonRotateZ,
          rotateY: moonRotateY,
          translateZ: moonZ,
          transformStyle: 'preserve-3d',
        }}
        className="absolute top-[4%] left-[1%] sm:left-[3%] md:left-[5%] z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt="Moon 3D icon"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[220px] object-contain drop-shadow-[0_20px_40px_rgba(182,0,168,0.2)]"
        />
      </motion.div>

      <motion.div
        style={{
          y: legoY,
          rotateZ: legoRotateZ,
          rotateX: legoRotateX,
          translateZ: legoZ,
          transformStyle: 'preserve-3d',
        }}
        className="absolute top-[4%] right-[1%] sm:right-[3%] md:right-[5%] z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt="Lego 3D icon"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[220px] object-contain drop-shadow-[0_20px_40px_rgba(118,33,176,0.25)]"
        />
      </motion.div>

      <motion.div
        style={{
          y: objLeftY,
          rotateZ: objLeftRotate,
          transformStyle: 'preserve-3d',
        }}
        className="absolute bottom-[8%] left-[2%] sm:left-[5%] md:left-[8%] z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt="3D object left"
          referrerPolicy="no-referrer"
          className="w-[100px] sm:w-[140px] md:w-[190px] object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
        />
      </motion.div>

      <motion.div
        style={{
          y: objRightY,
          rotateZ: objRightRotate,
          transformStyle: 'preserve-3d',
        }}
        className="absolute bottom-[8%] right-[2%] sm:right-[5%] md:right-[8%] z-0 pointer-events-none will-change-transform"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt="3D object right"
          referrerPolicy="no-referrer"
          className="w-[130px] sm:w-[170px] md:w-[230px] object-contain drop-shadow-[0_20px_35px_rgba(182,0,168,0.2)]"
        />
      </motion.div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center w-full max-w-4xl mx-auto [transform-style:preserve-3d]">
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            À propos
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <AnimatedText
            text="Je conçois des vitrines et boutiques web sur-mesure à Madagascar, alliant direction artistique soignée et haute performance technique. Chaque réalisation est pensée pour valoriser votre marque, convertir vos visiteurs et intégrer les paiements locaux MVola et Orange Money."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
