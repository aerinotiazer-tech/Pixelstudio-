import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';

const projectsData = [
  {
    category: 'Site vitrine',
    name: 'Hôtel Nosy Be',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
  },
  {
    category: 'E-commerce',
    name: 'Boutique Tana',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
  },
  {
    category: 'Landing page',
    name: 'Restaurant Tamatave',
    col1Img1: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1Img2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2Img: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
  }
];

const ProjectCard = ({ project, index, total }: { project: any, index: number, total: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  
  // Opacity fade as it moves up under other cards
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.5]);

  return (
    <div ref={containerRef} className="h-[85vh] w-full sticky flex justify-center" style={{ top: `calc(6rem + ${index * 28}px)` }}>
      <motion.div 
        style={{ scale, opacity }}
        className="w-full h-full bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-6 shadow-2xl overflow-hidden"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-black text-[clamp(2.5rem,8vw,100px)] text-[#D7E2EA] leading-none">
              0{index + 1}
            </span>
            <div className="flex flex-col">
              <span className="uppercase text-[#D7E2EA]/60 font-medium tracking-wider text-xs sm:text-sm">{project.category}</span>
              <h3 className="font-medium text-[#D7E2EA] text-xl sm:text-2xl md:text-3xl">{project.name}</h3>
            </div>
          </div>
          <div className="hidden sm:block">
            <LiveProjectButton />
          </div>
        </div>

        {/* Mobile button if needed */}
        <div className="sm:hidden w-full flex justify-end">
          <LiveProjectButton />
        </div>

        {/* Images Grid */}
        <div className="flex-1 flex gap-3 sm:gap-4 md:gap-6 w-full overflow-hidden">
          {/* Left Column (40%) */}
          <div className="w-[40%] flex flex-col gap-3 sm:gap-4 md:gap-6 h-full">
            <img 
              src={project.col1Img1} 
              alt={`${project.name} preview 1`} 
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
              loading="lazy"
            />
            <img 
              src={project.col1Img2} 
              alt={`${project.name} preview 2`} 
              className="w-full object-cover rounded-[20px] sm:rounded-[30px] md:rounded-[40px] flex-1 min-h-[clamp(160px,22vw,340px)]"
              loading="lazy"
            />
          </div>
          
          {/* Right Column (60%) */}
          <div className="w-[60%] h-full">
            <img 
              src={project.col2Img} 
              alt={`${project.name} full preview`} 
              className="w-full h-full object-cover rounded-[24px] sm:rounded-[40px] md:rounded-[50px]"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projets" className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 py-20 px-5 sm:px-8 md:px-10 overflow-clip">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-20">
          Projets
        </h2>
      </FadeIn>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-[10vh] pb-24">
        {projectsData.map((proj, i) => (
          <ProjectCard key={i} index={i} total={projectsData.length} project={proj} />
        ))}
      </div>
    </section>
  );
};
