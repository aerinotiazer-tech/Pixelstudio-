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
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif"
];

const gifsRow2 = [
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"
];

// Double duplication is plenty for smooth continuous scroll
const row1 = [...gifsRow1, ...gifsRow1];
const row2 = [...gifsRow2, ...gifsRow2];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const xRow1Raw = useTransform(scrollYProgress, [0, 1], [-180, 380]);
  const xRow2Raw = useTransform(scrollYProgress, [0, 1], [180, -380]);
  const rotateXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [10, 4, -2]);

  const xRow1 = useSpring(xRow1Raw, { stiffness: 90, damping: 24 });
  const xRow2 = useSpring(xRow2Raw, { stiffness: 90, damping: 24 });
  const rotateX = useSpring(rotateXRaw, { stiffness: 80, damping: 24 });

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-10 overflow-hidden w-full perspective-[1200px]"
    >
      <motion.div
        style={{
          rotateX,
          transformStyle: 'preserve-3d',
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
              className="w-[300px] sm:w-[380px] h-[190px] sm:h-[240px] rounded-2xl overflow-hidden shrink-0 bg-[#161616] border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt="Aperçu réalisation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
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
              className="w-[300px] sm:w-[380px] h-[190px] sm:h-[240px] rounded-2xl overflow-hidden shrink-0 bg-[#161616] border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={src}
                alt="Aperçu réalisation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
