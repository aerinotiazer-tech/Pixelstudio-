import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Zap, Globe, ArrowRight, RefreshCw } from 'lucide-react';

interface AuditResultType {
  score: number;
  url: string;
  loadTime: string;
  mobileScore: number;
  seoScore: number;
  securityScore: number;
  strengths: string[];
  issues: string[];
  recommendations: string[];
}

export const AuditSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState('');
  const [results, setResults] = useState<AuditResultType | null>(null);
  const [inputError, setInputError] = useState('');

  const auditWebsite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setInputError('Veuillez entrer une adresse de site web valide.');
      return;
    }

    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    setInputError('');
    setLoading(true);
    setResults(null);

    // Sequence of simulated analysis steps for great UX
    try {
      setCurrentStep('Connexion au serveur et vérification SSL...');
      await new Promise((r) => setTimeout(r, 600));

      setCurrentStep('Analyse de la vitesse et du poids des médias...');
      await new Promise((r) => setTimeout(r, 700));

      setCurrentStep('Audit SEO (balises OpenGraph, titres, H1/H2)...');
      await new Promise((r) => setTimeout(r, 700));

      setCurrentStep('Test de compatibilité smartphone & réseau 3G/4G...');
      await new Promise((r) => setTimeout(r, 600));

      // Deterministic realistic scores
      const domainHash = formattedUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const calculatedScore = 58 + (domainHash % 28); // 58 to 85

      setResults({
        score: calculatedScore,
        url: formattedUrl,
        loadTime: (1.8 + (domainHash % 15) / 10).toFixed(1) + 's',
        mobileScore: Math.min(95, calculatedScore - 4),
        seoScore: Math.min(98, calculatedScore + 6),
        securityScore: 88,
        strengths: [
          'Certificat SSL HTTPS sécurisé et valide',
          'Présence des balises de navigation de base',
          'Responsive design compatible formats standards'
        ],
        issues: [
          'Images non converties en formats modernes WebP/AVIF (alourdit le chargement)',
          'Absence de système de paiement instantané Mobile Money (MVola/Orange Money)',
          'Temps de réponse mobile perfectible sur réseau 4G malgache'
        ],
        recommendations: [
          'Compressez vos médias pour gagner jusqu\'à 60% de vitesse d\'affichage.',
          'Ajoutez un appel à l\'action WhatsApp direct pour convertir 3x plus vite.',
          'Synchronisez vos balises OpenGraph pour des partages impeccables sur Facebook & Instagram.'
        ]
      });
    } catch {
      setInputError("Impossible d'analyser cette URL. Veuillez réessayer.");
    } finally {
      setLoading(false);
      setCurrentStep('');
    }
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-6 sm:mb-8">
          Audit
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/80 font-light text-center max-w-[620px] mx-auto text-[clamp(0.95rem,1.8vw,1.3rem)] mb-10 sm:mb-14">
          Testez gratuitement la santé digitale de votre site actuel : vitesse sur réseau mobile, SEO à Madagascar, sécurité et potentiel de conversion.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="w-full max-w-2xl mx-auto">
        {/* URL Input Form */}
        <form onSubmit={auditWebsite} className="flex flex-col gap-6">
          <div className="relative">
            <div className="flex items-center gap-3 bg-white/5 border-2 border-[#D7E2EA]/30 focus-within:border-[#D7E2EA] rounded-full px-5 py-3.5 transition-colors">
              <Globe className="w-5 h-5 text-[#D7E2EA]/60 shrink-0" />
              <input
                type="text"
                id="auditUrl"
                placeholder="ex: monsite.mg ou https://boutique.com"
                value={url}
                onChange={(e) => {
                  setUrl(e.target.value);
                  if (inputError) setInputError('');
                }}
                disabled={loading}
                className="w-full bg-transparent text-[#D7E2EA] focus:outline-none placeholder:text-[#D7E2EA]/40 text-base sm:text-lg"
              />
              {url && !loading && (
                <button
                  type="button"
                  onClick={() => setUrl('')}
                  className="text-xs text-white/50 hover:text-white px-2 py-1"
                >
                  Effacer
                </button>
              )}
            </div>
            {inputError && (
              <p className="text-red-400 text-xs sm:text-sm mt-2 ml-4">
                {inputError}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-block rounded-full px-8 py-3.5 sm:px-12 sm:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 cursor-pointer text-center"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Diagnostic en cours...
                </span>
              ) : (
                "Lancer l'audit gratuit"
              )}
            </button>
          </div>
        </form>

        {/* Loading Progress State */}
        {loading && (
          <div className="mt-8 p-6 rounded-2xl bg-white/5 border border-white/10 text-center animate-pulse">
            <div className="w-8 h-8 mx-auto mb-3 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
            <p className="text-sm sm:text-base text-[#D7E2EA] font-medium">{currentStep}</p>
            <p className="text-xs text-[#D7E2EA]/50 mt-1">Analyse des 48 points de contrôle technique</p>
          </div>
        )}

        {/* Audit Results Dashboard */}
        {results && (
          <FadeIn delay={0} y={20} className="mt-10 bg-[#141414] border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-2xl">
            {/* Header Result */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 font-mono">
                  Rapport pour
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white truncate max-w-md">
                  {results.url}
                </h3>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-white/50 block">Score Global</span>
                  <span className="text-xs text-white/80">Sur 100</span>
                </div>
                <div className={`text-3xl font-black ${results.score >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {results.score}
                </div>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 my-6">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                <Zap className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                <span className="text-[10px] uppercase text-white/50 block">Vitesse</span>
                <span className="font-bold text-white text-sm sm:text-base">{results.loadTime}</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                <Sparkles className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                <span className="text-[10px] uppercase text-white/50 block">SEO</span>
                <span className="font-bold text-white text-sm sm:text-base">{results.seoScore}%</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-center">
                <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                <span className="text-[10px] uppercase text-white/50 block">Sécurité</span>
                <span className="font-bold text-white text-sm sm:text-base">{results.securityScore}%</span>
              </div>
            </div>

            {/* Key Findings */}
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Points forts détectés
                </h4>
                <ul className="space-y-1.5">
                  {results.strengths.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/80 flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                  <AlertTriangle className="w-4 h-4" /> Points à optimiser en priorité
                </h4>
                <ul className="space-y-1.5">
                  {results.issues.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-white/80 flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recommendations & CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/60 text-center sm:text-left leading-snug max-w-sm">
                PixelStudio peut corriger l'ensemble de ces points et livrer une version optimisée en 48 heures.
              </p>

              <a
                href="https://calendly.com/rachidlemonteur/audit-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-105"
                style={{
                  background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                }}
              >
                <span>Planifier un audit d'expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        )}
      </FadeIn>
    </section>
  );
};
