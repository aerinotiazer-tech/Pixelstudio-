import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import { Card3D } from '../components/Card3D';
import { projectsData, ProjectItem } from '../data/projects';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  total,
}) => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const scale = useSpring(scaleRaw, { stiffness: 120, damping: 24 });
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.7]);

  const handleOpenProject = () => {
    navigate(`/projet/${project.id}`);
  };

  return (
    <div
      ref={containerRef}
      className="h-[84vh] sm:h-[82vh] w-full sticky flex justify-center perspective-[1200px]"
      style={{ top: `calc(5.5rem + ${index * 24}px)` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full h-full"
      >
        <Card3D index={index} total={total} maxTilt={6}>
          <div className="w-full h-full bg-[#111111] border border-white/10 hover:border-white/20 transition-colors duration-300 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col gap-4 sm:gap-6 shadow-2xl overflow-hidden group [transform-style:preserve-3d]">
            {/* Top Header */}
            <div className="flex items-center justify-between gap-3 [transform:translateZ(20px)]">
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono font-bold text-2xl sm:text-3xl text-white/40 select-none">
                  0{index + 1}
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-white/50 font-medium tracking-wider text-xs">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-950/40 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {project.delivery}
                    </span>
                  </div>
                  <h3 className="font-semibold text-white text-lg sm:text-2xl md:text-3xl tracking-tight mt-0.5">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 [transform:translateZ(24px)]">
                <LiveProjectButton onClick={handleOpenProject} label="Explorer le projet" />
              </div>
            </div>

            {/* Project Tags */}
            <div className="hidden sm:flex items-center gap-2 flex-wrap [transform:translateZ(15px)]">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs text-white/50 font-light ml-2">
                — {project.results}
              </span>
            </div>

            {/* Images Grid */}
            <div
              onClick={handleOpenProject}
              className="flex-1 flex gap-3 sm:gap-5 w-full overflow-hidden cursor-pointer [transform:translateZ(18px)]"
            >
              {/* Left Column (40%) */}
              <div className="w-[38%] flex flex-col gap-3 sm:gap-5 h-full">
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl h-[46%] bg-[#161616]">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} mockup 1`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl flex-1 bg-[#161616]">
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} mockup 2`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column (62%) */}
              <div className="w-[62%] h-full relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#161616]">
                <img
                  src={project.col2Img}
                  alt={`${project.name} vue principale`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />

                {/* Editorial Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-7 [transform:translateZ(22px)]">
                  <p className="text-white text-sm sm:text-base md:text-lg font-medium leading-snug line-clamp-2 max-w-xl">
                    {project.tagline}
                  </p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-white/80 font-medium group-hover:text-white transition-colors">
                    <span>Consulter l'étude de cas & démo live</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card3D>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projets"
      className="bg-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[44px] -mt-8 sm:-mt-10 relative z-20 py-20 sm:py-28 px-4 sm:px-8 md:px-10 overflow-clip"
    >
      <FadeIn delay={0} y={30}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Projets
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto font-light leading-relaxed">
            Chaque site est conçu sur-mesure pour convertir vos visiteurs en clients payants et asseoir votre autorité locale.
          </p>
        </div>
      </FadeIn>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-[8vh] pb-20">
        {projectsData.map((proj, i) => (
          <ProjectCard
            key={proj.id}
            index={i}
            total={projectsData.length}
            project={proj}
          />
        ))}
      </div>
    </section>
  );
};
