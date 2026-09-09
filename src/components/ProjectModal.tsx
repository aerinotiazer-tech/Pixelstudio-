import React, { useState } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Monitor, Smartphone, CheckCircle, MapPin, Sparkles, Star } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenQuote?: () => void;
}

export const ProjectModal = ({ project, onClose, onOpenQuote }: ProjectModalProps) => {
  const [activeTab, setActiveTab] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl bg-[#111e4f] border border-[#c9a84c]/40 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d173d]/90">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-xs text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>{project.clientLocation}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1 border border-white/10">
              <button
                onClick={() => setActiveTab('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'desktop' ? 'bg-[#c9a84c] text-[#0d173d]' : 'text-white/70 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Desktop</span>
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeTab === 'mobile' ? 'bg-[#c9a84c] text-[#0d173d]' : 'text-white/70 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Mobile 4G</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-8">
          
          {/* Main Title & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.name}
            </h3>
            <p className="text-[#c9a84c] font-medium text-base sm:text-lg">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Screen Preview */}
          <div className="w-full flex justify-center bg-[#09102c] rounded-2xl p-4 sm:p-8 border border-white/10 relative overflow-hidden">
            {activeTab === 'desktop' ? (
              <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-white/20 shadow-2xl bg-slate-900">
                <div className="h-7 bg-slate-800 flex items-center px-4 gap-2 border-b border-white/10">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                  <div className="mx-auto text-[11px] text-white/50 font-mono">
                    https://{project.id}.pixelstudio.mg
                  </div>
                </div>
                <div className="aspect-[16/9] w-full overflow-hidden bg-black/40">
                  <img
                    src={project.desktopImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full max-w-[280px] sm:max-w-[320px] rounded-[36px] overflow-hidden border-4 border-slate-700 shadow-2xl bg-black">
                <div className="h-5 bg-black flex justify-center items-center">
                  <div className="w-20 h-3 bg-slate-800 rounded-full"></div>
                </div>
                <div className="aspect-[9/16] w-full overflow-hidden">
                  <img
                    src={project.mobileImage}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Metrics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#c9a84c] tracking-tight">
                  {m.value}
                </span>
                <span className="text-xs sm:text-sm text-white/70 font-medium mt-1">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Detailed description */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#c9a84c]" />
              Défi & Solution sur-mesure
            </h4>
            <p className="text-white/80 leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Technologies used */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white/60">
              Technologies & Spécificités Madagascar
            </h5>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial if available */}
          {project.testimonial && (
            <div className="p-5 rounded-2xl bg-[#0c163a] border border-[#c9a84c]/20 space-y-3">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="text-xs text-white/60 ml-2 font-medium">Avis vérifié</span>
              </div>
              <p className="italic text-sm text-white/90 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={project.testimonial.avatar}
                  alt={project.testimonial.author}
                  className="w-10 h-10 rounded-full object-cover border border-[#c9a84c]"
                />
                <div>
                  <div className="text-sm font-bold text-white">{project.testimonial.author}</div>
                  <div className="text-xs text-white/60">{project.testimonial.role}</div>
                </div>
              </div>
            </div>
          )}

          {/* Action footer */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-white/60">
              Projet livré clé en main en 48 heures avec nom de domaine & hébergement.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  if (onOpenQuote) onOpenQuote();
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d173d] font-bold text-xs uppercase tracking-wider hover:bg-[#dfbd5b] transition-all hover:scale-105"
              >
                Je veux un site similaire
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
