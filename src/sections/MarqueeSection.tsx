import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

const gifsRow1 = [
  "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif",
  "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif",
  "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif",
  "https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif",
  "https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif",
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif"
];

const gifsRow2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif"
];

// Tripling arrays for seamless scroll
const row1 = [...gifsRow1, ...gifsRow1, ...gifsRow1];
const row2 = [...gifsRow2, ...gifsRow2, ...gifsRow2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic 3D perspective translations
  const xRow1Raw = useTransform(scrollYProgress, [0, 1], [-250, 750]);
  const xRow2Raw = useTransform(scrollYProgress, [0, 1], [250, -750]);
  const rotateXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [15, 8, -4]);
  const rotateZRaw = useTransform(scrollYProgress, [0, 1], [-2, 1.5]);

  const xRow1 = useSpring(xRow1Raw, { stiffness: 120, damping: 26 });
  const xRow2 = useSpring(xRow2Raw, { stiffness: 120, damping: 26 });
  const rotateX = useSpring(rotateXRaw, { stiffness: 100, damping: 24 });
  const rotateZ = useSpring(rotateZRaw, { stiffness: 100, damping: 24 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-12 overflow-hidden w-full perspective-[1400px]"
    >
      <motion.div
        style={{
          rotateX,
          rotateZ,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className="w-full flex flex-col gap-4"
      >
        {/* Row 1 */}
        <motion.div
          className="flex gap-4 whitespace-nowrap min-w-max"
          style={{ x: xRow1, willChange: 'transform' }}
        >
          {row1.map((src, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[440px] h-[230px] sm:h-[280px] rounded-3xl overflow-hidden shrink-0 bg-[#181818] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt="Website Preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div
          className="flex gap-4 whitespace-nowrap min-w-max"
          style={{ x: xRow2, willChange: 'transform' }}
        >
          {row2.map((src, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[440px] h-[230px] sm:h-[280px] rounded-3xl overflow-hidden shrink-0 bg-[#181818] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.7)] transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt="Website Preview"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
