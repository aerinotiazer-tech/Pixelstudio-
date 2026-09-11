import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectLiveDemo } from '../components/ProjectLiveDemo';
import { Footer } from '../components/Footer';
import { FadeIn } from '../components/FadeIn';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  MapPin,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Zap,
  Smartphone,
  Star,
  Quote,
  Share2,
  Check
} from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  // Find project by id or numeric id
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-white flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Projet introuvable</h2>
        <Link
          to="/"
          className="px-6 py-3 rounded-full bg-white text-black text-sm font-semibold"
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
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="w-full bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-sans selection:bg-[#B600A8] selection:text-white">
      {/* Top Floating Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-[#0C0C0C]/85 backdrop-blur-lg border-b border-white/10 px-4 sm:px-8 py-3.5 sm:py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/#projets"
            className="group flex items-center gap-2 text-xs sm:text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:-translate-x-1 transition-transform">
              <ArrowLeft className="w-4 h-4 text-white" />
            </div>
            <span>Retour aux projets</span>
          </Link>

          <Link to="/" className="font-bold text-base sm:text-lg tracking-wider uppercase text-white">
            PixelStudio
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handleShare}
              title="Copier le lien du projet"
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white/90 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline text-emerald-400 font-medium">Lien copié !</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Partager</span>
                </>
              )}
            </button>

            <a
              href="https://calendly.com/rachidlemonteur/audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
              }}
            >
              Commander un site
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-14 space-y-16 sm:space-y-24">
        {/* Project Hero Header */}
        <section className="space-y-6 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA] font-semibold border border-white/10">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              <Clock className="w-3.5 h-3.5" /> {project.delivery}
            </span>
            <span className="flex items-center gap-1 text-xs text-white/60 bg-white/5 px-3 py-1 rounded-full">
              <MapPin className="w-3 h-3 text-amber-400" /> {project.location}
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="hero-heading text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-none">
              {project.name}
            </h1>
            <p className="text-lg sm:text-2xl text-[#D7E2EA] font-light max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Results / Key Metrics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 rounded-2xl bg-white/[0.04] border border-white/10 flex flex-col justify-center text-left"
              >
                <span className="text-xs text-white/60 uppercase tracking-wider font-mono">
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
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B600A8] font-bold mb-1">
                <Sparkles className="w-3.5 h-3.5" /> Démonstration Réelle & Interactive
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Testez le site comme un client en direct
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/60 max-w-sm font-light">
              Basculez entre la vue ordinateur et smartphone pour découvrir l'ergonomie et tester les boutons d'action.
            </p>
          </div>

          {/* Render Interactive Device Demo */}
          <ProjectLiveDemo project={project} />
        </section>

        {/* Case Study Deep-Dive: Challenge & Solution */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-wider">
              <Zap className="w-4 h-4" /> Le Défi Initial du Client
            </div>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {project.challenges}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#141414] border border-white/10 space-y-4">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> La Solution PixelStudio
            </div>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed font-light">
              {project.solutions}
            </p>
          </div>
        </section>

        {/* Features Checklist & Tech Stack */}
        <section className="p-6 sm:p-10 rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#161616] to-[#101010] border border-white/10 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50 font-mono block mb-1">
              Architecture & Fonctionnalités
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ce qui a été livré en 48 heures chrono
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-white/90 font-light">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs text-white/50 uppercase tracking-wider mr-2 font-mono">
              Technologies :
            </span>
            {project.stack.map((stk, idx) => (
              <span
                key={idx}
                className="text-xs px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D7E2EA] font-mono"
              >
                {stk}
              </span>
            ))}
          </div>
        </section>

        {/* High-Definition Gallery */}
        <section className="space-y-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/50 font-mono block mb-1">
              Galerie Visuelle
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Captures et visuels haute définition
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {project.gallery.map((imgSrc, idx) => (
              <div
                key={idx}
                className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group shadow-lg"
              >
                <img
                  src={imgSrc}
                  alt={`${project.name} photo ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-xs text-white font-medium">Rendu Studio PixelStudio</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonial Card */}
        <section className="p-6 sm:p-10 rounded-3xl sm:rounded-[36px] bg-[#151515] border border-amber-500/20 relative overflow-hidden">
          <div className="absolute top-4 right-6 text-amber-500/15 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs text-white/70 ml-2 font-mono">Avis vérifié client</span>
            </div>

            <p className="text-base sm:text-xl text-white font-light italic leading-relaxed">
              {project.testimonial}
            </p>

            <div className="pt-2">
              <h4 className="font-bold text-white text-base sm:text-lg">{project.clientName}</h4>
              <p className="text-xs sm:text-sm text-white/60">{project.clientRole}</p>
            </div>
          </div>
        </section>

        {/* Next / Previous Project Navigation */}
        <section className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to={`/projet/${prevProject.id}`}
            className="w-full sm:w-auto p-4 sm:px-6 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center gap-3 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block">Projet Précédent</span>
              <span className="text-sm font-semibold text-white">{prevProject.name}</span>
            </div>
          </Link>

          <Link
            to={`/projet/${nextProject.id}`}
            className="w-full sm:w-auto p-4 sm:px-6 sm:py-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-end gap-3 transition-colors group text-right"
          >
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/50 block">Projet Suivant</span>
              <span className="text-sm font-semibold text-white">{nextProject.name}</span>
            </div>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* Conversion Banner: Get a similar project */}
        <section
          className="p-8 sm:p-14 rounded-3xl sm:rounded-[44px] text-center relative overflow-hidden flex flex-col items-center gap-6"
          style={{
            background: 'linear-gradient(135deg, #1C0524 0%, #0C0C0C 50%, #150A21 100%)',
            border: '1px solid rgba(182, 0, 168, 0.4)',
            boxShadow: '0 20px 50px rgba(182, 0, 168, 0.15)',
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Offre de lancement PixelStudio
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white max-w-2xl">
            Vous voulez le même impact pour votre entreprise ?
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl font-light leading-relaxed">
            Obtenez un site web haute performance livré en 48 heures, 100% optimisé pour le paiement mobile money (MVola, Orange Money) et conçu pour générer des ventes.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <a
              href="https://calendly.com/rachidlemonteur/audit-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 text-center"
              style={{
                background:
                  'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              Réserver un audit gratuit
            </a>

            <Link
              to="/#contact"
              className="px-8 py-3.5 rounded-full border-2 border-white/20 hover:border-white text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-colors"
            >
              Tester l'audit IA gratuit
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
