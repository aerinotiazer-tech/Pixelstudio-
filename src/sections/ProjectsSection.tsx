import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { LiveProjectButton } from '../components/LiveProjectButton';
import { FadeIn } from '../components/FadeIn';
import { Card3D } from '../components/Card3D';
import { projectsData, ProjectItem } from '../data/projects';
import { Sparkles, Clock, ArrowRight, Eye, Layers } from 'lucide-react';

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

  const targetScale = 1 - (total - 1 - index) * 0.035;
  const scaleRaw = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
  const scale = useSpring(scaleRaw, { stiffness: 140, damping: 24 });
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.65]);

  const handleOpenProject = () => {
    navigate(`/projet/${project.id}`);
  };

  return (
    <div
      ref={containerRef}
      className="h-[88vh] sm:h-[85vh] w-full sticky flex justify-center perspective-[1600px]"
      style={{ top: `calc(5.5rem + ${index * 26}px)` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full h-full"
      >
        <Card3D index={index} total={total} maxTilt={8}>
          <div className="w-full h-full bg-[#0C0C0C]/95 backdrop-blur-md border-2 border-[#D7E2EA]/75 hover:border-white transition-all duration-500 rounded-[32px] sm:rounded-[48px] md:rounded-[56px] p-4 sm:p-6 md:p-8 flex flex-col gap-3 sm:gap-5 shadow-2xl overflow-hidden group [transform-style:preserve-3d]">
            {/* Top Header - Pops with 3D depth */}
            <div className="flex items-center justify-between gap-2 [transform:translateZ(30px)]">
              <div className="flex items-center gap-3 sm:gap-6">
                <span className="font-black text-[clamp(2.2rem,7vw,90px)] text-[#D7E2EA] leading-none select-none tracking-tighter drop-shadow-lg">
                  0{index + 1}
                </span>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-[#D7E2EA]/60 font-medium tracking-wider text-xs">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-mono bg-emerald-950/50 px-2.5 py-0.5 rounded-full border border-emerald-500/40 shadow-sm">
                      <Clock className="w-3 h-3" /> {project.delivery}
                    </span>
                  </div>
                  <h3 className="font-semibold text-[#D7E2EA] text-lg sm:text-2xl md:text-3xl tracking-tight group-hover:text-white transition-colors">
                    {project.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 [transform:translateZ(40px)]">
                <LiveProjectButton onClick={handleOpenProject} label="Voir le projet" />
              </div>
            </div>

            {/* Project tags with subtle 3D pop */}
            <div className="hidden sm:flex items-center gap-2 flex-wrap [transform:translateZ(20px)]">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
              <span className="text-xs text-white/60 font-light italic ml-2">
                {project.results}
              </span>
            </div>

            {/* Images Grid - click triggers navigation to project page */}
            <div
              onClick={handleOpenProject}
              className="flex-1 flex gap-2.5 sm:gap-4 md:gap-6 w-full overflow-hidden cursor-pointer [transform:translateZ(25px)]"
            >
              {/* Left Column (40%) */}
              <div className="w-[40%] flex flex-col gap-2.5 sm:gap-4 md:gap-6 h-full">
                <div className="relative overflow-hidden rounded-[18px] sm:rounded-[26px] md:rounded-[36px] group-hover:brightness-105 transition-all duration-500 h-[45%] shadow-md">
                  <img
                    src={project.col1Img1}
                    alt={`${project.name} preview 1`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                <div className="relative overflow-hidden rounded-[18px] sm:rounded-[26px] md:rounded-[36px] group-hover:brightness-105 transition-all duration-500 flex-1 shadow-md">
                  <img
                    src={project.col1Img2}
                    alt={`${project.name} preview 2`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Right Column (60%) - Hero Feature Image */}
              <div className="w-[60%] h-full relative overflow-hidden rounded-[20px] sm:rounded-[32px] md:rounded-[44px] group-hover:brightness-105 transition-all duration-500 shadow-xl">
                <img
                  src={project.col2Img}
                  alt={`${project.name} full preview`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* 3D Floating Overlay Banner */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8 [transform:translateZ(35px)]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs w-fit mb-2 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Rendu Haute Définition</span>
                  </div>
                  <p className="text-white text-xs sm:text-base md:text-lg font-medium drop-shadow-md line-clamp-2">
                    {project.tagline}
                  </p>
                  <div className="mt-2.5 flex items-center gap-2 text-[11px] sm:text-xs text-[#D7E2EA] group-hover:text-white transition-colors">
                    <span className="font-semibold text-white bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5 text-purple-400" />
                      Voir l'étude de cas & démo live
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-purple-300" />
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
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-20 py-20 sm:py-28 px-4 sm:px-8 md:px-10 overflow-clip"
    >
      <FadeIn delay={0} y={40}>
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/70 mb-4">
            <Layers className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
            <span>Scroll 3D & Inclinaison Interactive</span>
          </div>

          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight">
            Projets
          </h2>
          <p className="text-[#D7E2EA]/70 text-sm sm:text-base md:text-lg mt-4 max-w-xl mx-auto font-light leading-relaxed">
            Faites défiler pour explorer les cartes en perspective 3D. Cliquez sur une réalisation pour tester son site live en direct.
          </p>
        </div>
      </FadeIn>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-[10vh] pb-24">
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
