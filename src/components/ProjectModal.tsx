import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, Clock, Smartphone, Sparkles, ArrowRight } from 'lucide-react';

export interface ProjectDetail {
  id: number;
  name: string;
  category: string;
  tagline: string;
  delivery: string;
  results: string;
  stack: string[];
  features: string[];
  description: string;
  heroImage: string;
  gallery: string[];
}

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#121212] border border-[#D7E2EA]/20 rounded-3xl sm:rounded-[36px] overflow-hidden flex flex-col shadow-2xl z-10"
          >
            {/* Header with Close */}
            <div className="flex items-center justify-between p-5 sm:p-7 border-b border-[#D7E2EA]/10 bg-[#171717]">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA] font-medium">
                    {project.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                    <Clock className="w-3.5 h-3.5" /> {project.delivery}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.name}</h3>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-8 space-y-6">
              {/* Hero Showcase Image */}
              <div className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-lg">
                <img
                  src={project.heroImage}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 sm:p-7">
                  <p className="text-white text-base sm:text-xl font-medium drop-shadow-md">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Highlights & Impact Metric */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-[#1A1A1A] border border-white/10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-1">
                    <Sparkles className="w-4 h-4 text-amber-400" /> Impact Commercial Mesuré
                  </div>
                  <p className="text-white font-semibold text-base sm:text-lg leading-snug">
                    {project.results}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#1A1A1A] border border-white/10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-semibold mb-1">
                    <Smartphone className="w-4 h-4 text-blue-400" /> Compatibilité & Paiement
                  </div>
                  <p className="text-[#D7E2EA] text-sm leading-snug">
                    Optimisé 100% Mobile (MVola, Orange Money, Airtel Money intégré).
                  </p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/60 mb-2">À propos du projet</h4>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/60 mb-3">Fonctionnalités Clés</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#D7E2EA]/60 mb-3">Galerie Réalisée</h4>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {project.gallery.map((imgSrc, idx) => (
                    <div key={idx} className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10">
                      <img
                        src={imgSrc}
                        alt={`${project.name} gallery ${idx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-xs text-[#D7E2EA]/60 mr-2 font-mono">Stack :</span>
                {project.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#D7E2EA] font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-4 sm:p-6 border-t border-white/10 bg-[#161616] flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-white/60 text-center sm:text-left">
                Besoin d'un résultat similaire pour votre entreprise ?
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium hover:bg-white/10 transition-colors"
                >
                  Fermer
                </button>
                <a
                  href="https://calendly.com/rachidlemonteur/audit-gratuit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105"
                  style={{
                    background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  <span>Commander ce style</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
