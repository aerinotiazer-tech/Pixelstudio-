import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { LiveProjectButton } from '../components/LiveProjectButton';

const PROJECTS = [
  {
    num: "01",
    category: "Site Vitrine",
    name: "Hôtel Nosy Be",
    images: {
      col1_1: "https://images.unsplash.com/photo-1582719478250-c89d14b402b8?auto=format&fit=crop&w=800&q=80",
      col1_2: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      col2: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    num: "02",
    category: "E-commerce",
    name: "Boutique Tana",
    images: {
      col1_1: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",
      col1_2: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      col2: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80"
    }
  },
  {
    num: "03",
    category: "Landing Page",
    name: "Restaurant Tamatave",
    images: {
      col1_1: "https://images.unsplash.com/photo-1414235077428-338988691282?auto=format&fit=crop&w=800&q=80",
      col1_2: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
      col2: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
    }
  }
];

const ProjectCard = ({ project, index, totalCards, progress }: { project: any, index: number, totalCards: number, progress: MotionValue<number> }) => {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(progress, [index * (1 / totalCards), 1], [1, targetScale]);

  return (
    <div 
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32 w-full"
      style={{ top: `calc(6rem + ${index * 28}px)` }}
    >
      <motion.div 
        className="w-full h-full max-w-7xl border-2 border-[#c9a84c] bg-[#1a2a6c] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-4 sm:p-6 md:p-8 flex flex-col gap-6 sm:gap-8 overflow-hidden relative origin-top shadow-2xl"
        style={{ scale }}
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span className="font-black text-[clamp(3rem,10vw,140px)] leading-none text-[#ffffff]">
              {project.num}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm md:text-base text-[#c9a84c] font-bold uppercase tracking-wider">
                {project.category}
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="self-start sm:self-center">
            <LiveProjectButton />
          </div>
        </div>

        {/* Bottom Row - Images */}
        <div className="flex-1 flex gap-4 min-h-0">
          <div className="w-[40%] flex flex-col gap-4">
            <div className="w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden" style={{ height: 'clamp(130px, 16vw, 230px)' }}>
              <img src={project.images.col1_1} alt="Project Detail 1" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="w-full flex-1 rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden" style={{ minHeight: 'clamp(160px, 22vw, 340px)' }}>
              <img src={project.images.col1_2} alt="Project Detail 2" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="w-[60%] rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden h-full">
            <img src={project.images.col2} alt="Project Main" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} id="projets" className="bg-[#1a2a6c] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-30 pt-20 px-5 sm:px-8 md:px-10 pb-40">
      <h2 className="hero-heading font-black uppercase text-center text-[clamp(2.5rem,8vw,100px)] mb-16 sm:mb-20 md:mb-28 leading-none tracking-tight">
        Mes réalisations
      </h2>

      <div className="relative">
        {PROJECTS.map((project, index) => (
          <ProjectCard 
            key={project.num}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};
