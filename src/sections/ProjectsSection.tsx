import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { FadeIn } from '../components/FadeIn';
import { ArrowUpRight, Eye, Sparkles, MapPin, Check } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection = ({ onSelectProject }: ProjectsSectionProps) => {
  const [activeSector, setActiveSector] = useState<string>('all');

  const sectors = [
    { id: 'all', label: 'Tous les projets' },
    { id: 'hotel', label: 'Hôtels & Lodges' },
    { id: 'ecommerce', label: 'E-commerce & Boutiques' },
    { id: 'restaurant', label: 'Restaurants & Bars' },
    { id: 'service', label: 'Services & Tourisme' },
  ];

  const filteredProjects = activeSector === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.sector === activeSector);

  return (
    <section id="projets" className="bg-[#0b143a] text-white py-24 px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portfolio & Études de Cas</span>
          </div>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.5rem,7vw,85px)] leading-none tracking-tight">
            Nos Réalisations
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium">
            Découvrez comment nous avons aidé des entreprises malgaches à décupler leur visibilité et leurs ventes.
          </p>

          {/* Sector filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {sectors.map((sector) => (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSector === sector.id
                    ? 'bg-[#c9a84c] text-[#0d173d] shadow-lg shadow-[#c9a84c]/20 scale-105'
                    : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/15'
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {filteredProjects.map((project, index) => (
            <FadeIn
              key={project.id}
              delay={index * 0.1}
              className="bg-[#121e4f] border border-white/10 rounded-3xl overflow-hidden hover:border-[#c9a84c]/60 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              {/* Media Preview Thumbnail */}
              <div 
                className="relative aspect-[16/10] overflow-hidden bg-black/50 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.desktopImage}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                
                {/* Floating location pill */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
                  <MapPin className="w-3 h-3 text-[#c9a84c]" />
                  <span>{project.clientLocation}</span>
                </div>

                {/* Floating category pill */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#c9a84c] text-[#0d173d] text-xs font-black uppercase tracking-wider">
                  {project.category}
                </div>

                {/* Hover overlay with button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-5 py-2.5 rounded-full bg-white text-[#0d173d] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>Découvrir l'étude de cas</span>
                  </span>
                </div>
              </div>

              {/* Info section */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-[#c9a84c]">{project.num}</span>
                    <span className="text-xs text-white/50 font-medium">Livré en 48h</span>
                  </div>

                  <h3 className="text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#c9a84c] transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-sm text-white/70 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                {/* Metrics highlights */}
                <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-white/5 border border-white/5 text-center">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-base sm:text-lg font-black text-[#c9a84c]">{m.value}</span>
                      <span className="text-[10px] sm:text-xs text-white/60 truncate">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips & button */}
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <div className="flex flex-wrap gap-1.5 max-w-[65%]">
                    {project.technologies.slice(0, 2).map((tech, i) => (
                      <span key={i} className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/10 text-white/80">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#c9a84c] group-hover:text-white transition-colors"
                  >
                    <span>Voir détails</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom Proof Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#142259] to-[#0f1b49] border border-[#c9a84c]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-black uppercase text-white">Vous avez un projet en tête ?</h4>
            <p className="text-xs sm:text-sm text-white/70">
              Recevez votre première maquette interactive sous 24h ouvrées.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d173d] font-bold text-xs uppercase tracking-wider hover:bg-[#dfbd5b] transition-all whitespace-nowrap shadow-lg shadow-[#c9a84c]/20"
          >
            Lancer mon projet maintenant
          </a>
        </div>

      </div>
    </section>
  );
};
