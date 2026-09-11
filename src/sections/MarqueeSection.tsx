import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

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
  const { scrollYProgress } = useScroll();
  
  // Create dynamic translations based on scroll
  // We approximate the offset described in the prompt
  const xRow1 = useTransform(scrollYProgress, [0, 1], [-200, 800]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], [200, -800]);

  return (
    <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full flex flex-col gap-3">
      {/* Row 1 */}
      <motion.div 
        className="flex gap-3 whitespace-nowrap min-w-max"
        style={{ x: xRow1, willChange: 'transform' }}
      >
        {row1.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt="Website Preview" 
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 bg-[#1A1A1A]"
            loading="lazy"
          />
        ))}
      </motion.div>

      {/* Row 2 */}
      <motion.div 
        className="flex gap-3 whitespace-nowrap min-w-max"
        style={{ x: xRow2, willChange: 'transform' }}
      >
        {row2.map((src, idx) => (
          <img 
            key={idx} 
            src={src} 
            alt="Website Preview" 
            className="w-[420px] h-[270px] rounded-2xl object-cover shrink-0 bg-[#1A1A1A]"
            loading="lazy"
          />
        ))}
      </motion.div>
    </section>
  );
};
