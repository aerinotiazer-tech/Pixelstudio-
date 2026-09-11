import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectLiveDemo } from '../components/ProjectLiveDemo';
import { Footer } from '../components/Footer';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Star,
  Share2,
  Check
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [copied, setCopied] = useState(false);

  const projectIndex = projectsData.findIndex(
    (p) => p.id === id || String(p.numericId) === id
  );

  const project: ProjectItem | undefined =
    projectIndex !== -1 ? projectsData[projectIndex] : projectsData[0];

  const prevProject =
    projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Projet introuvable</h2>
        <Link
          to="/"
          className="px-6 py-2.5 rounded-full bg-white text-black text-xs uppercase tracking-wider font-semibold"
        >
          Retour à l'accueil
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#7621B0] selection:text-white">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#0C0C0C]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/#projets"
            className="group flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:-translate-x-0.5 transition-transform">
              <ArrowLeft className="w-3.5 h-3.5 text-white" />
            </div>
            <span>Retour aux projets</span>
          </Link>

          <Link to="/" className="font-bold text-sm sm:text-base tracking-widest uppercase text-white">
            PixelStudio
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleShare}
              title="Copier le lien du projet"
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/80 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-white" />
                  <span className="text-white font-medium">Lien copié</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3 h-3" />
                  <span className="hidden sm:inline">Partager</span>
                </>
              )}
            </button>

            <a
              href="https://calendly.com/rachidlemonteur/audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              Commander un site
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-16 sm:space-y-20">
        {/* Project Hero Header */}
        <section className="space-y-5 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-white/80 font-mono border border-white/10">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-white/70 font-mono border border-white/10">
              {project.delivery}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-white/60 bg-white/5 px-3 py-1 rounded-full border border-white/10 font-mono">
              <MapPin className="w-3 h-3 text-white/70" /> {project.location}
            </span>
          </div>

          <div className="space-y-2.5">
            <h1 className="hero-heading text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none">
              {project.name}
            </h1>
            <p className="text-base sm:text-xl text-[#D7E2EA]/85 font-light max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Results / Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-[#141414] border border-white/10 flex flex-col justify-center text-left"
              >
                <span className="text-[11px] text-white/50 uppercase tracking-wider font-mono">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {metric.value}
                </span>
                <span className="text-xs text-[#D7E2EA]/70 mt-1 font-light">
                  {metric.detail}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Live Demo Section */}
        <section className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs uppercase tracking-wider text-white/50 font-mono block mb-1">
                Aperçu fonctionnel
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Démonstrateur interactif
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-sm font-light leading-relaxed">
              Basculez entre écran d'ordinateur et smartphone pour tester le parcours utilisateur.
            </p>
          </div>

          {/* Render Interactive Device Demo */}
          <ProjectLiveDemo project={project} />
        </section>

        {/* Case Study Deep-Dive: Challenge & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#131313] border border-white/10 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              Contraintes initiales
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {project.challenges}
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#131313] border border-white/10 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90 font-mono">
              Architecture mise en place
            </h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {project.solutions}
            </p>
          </div>
        </section>

        {/* Features Checklist & Tech Stack */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#131313] border border-white/10 space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-white/50 font-mono block mb-1">
              Livrables
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Architecture & fonctionnalités clés
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-white/85 font-light leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/40 uppercase tracking-wider mr-2 font-mono">
              Technologies :
            </span>
            {project.stack.map((stk, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/75 font-mono"
              >
                {stk}
              </span>
            ))}
          </div>
        </section>

        {/* High-Definition Gallery */}
        <section className="space-y-5">
          <div>
            <span className="text-xs uppercase tracking-wider text-white/50 font-mono block mb-1">
              Direction Artistique
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Captures et maquettes graphiques
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/11] rounded-xl overflow-hidden border border-white/10 bg-[#161616] group"
              >
                <img
                  src={imgSrc}
                  alt={`${project.name} photo ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonial Card */}
        <section className="p-6 sm:p-8 rounded-2xl bg-[#131313] border border-white/10 space-y-4">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs text-white/50 ml-2 font-mono">Retour d'expérience vérifié</span>
          </div>

          <p className="text-base sm:text-lg text-white font-light italic leading-relaxed">
            "{project.testimonial}"
          </p>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-white text-sm sm:text-base">{project.clientName}</h4>
              <p className="text-xs text-white/50">{project.clientRole}</p>
            </div>
            <span className="text-xs text-white/50 font-mono">
              {project.location}
            </span>
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <section className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <Link
            to={`/projet/${prevProject.id}`}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 flex items-center gap-3 transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-white/70 group-hover:-translate-x-0.5 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Projet Précédent</span>
              <span className="text-sm font-medium text-white">{prevProject.name}</span>
            </div>
          </Link>

          <Link
            to={`/projet/${nextProject.id}`}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#131313] hover:bg-[#1a1a1a] border border-white/10 flex items-center justify-end gap-3 transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/40 block">Projet Suivant</span>
              <span className="text-sm font-medium text-white">{nextProject.name}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </section>

        {/* Conversion Banner */}
        <section className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl text-center bg-[#131313] border border-white/15 flex flex-col items-center gap-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white max-w-xl">
            Besoin d'un site à fort impact pour votre activité ?
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-lg font-light leading-relaxed">
            Profitez d'un site web sur-mesure, compatible paiement Mobile Money (MVola, Orange Money) et conçu pour décupler vos ventes directes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <a
              href="https://calendly.com/rachidlemonteur/audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3.5 text-xs sm:text-sm text-white font-medium uppercase tracking-wider transition-all hover:brightness-110 active:scale-[0.98] border border-white/20"
              style={{
                background: 'linear-gradient(120deg, #1A0524 0%, #9E0091 50%, #7621B0 100%)',
              }}
            >
              Réserver un audit gratuit
            </a>

            <Link
              to="/#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-white text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors"
            >
              Faire tester son site
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
