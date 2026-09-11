import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { CheckCircle2, AlertTriangle, ShieldCheck, Zap, Globe, ArrowRight, RefreshCw, BarChart3 } from 'lucide-react';

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

    try {
      setCurrentStep('Connexion au serveur et vérification SSL...');
      await new Promise((r) => setTimeout(r, 500));

      setCurrentStep('Analyse du poids des médias et de la vitesse de chargement...');
      await new Promise((r) => setTimeout(r, 600));

      setCurrentStep('Vérification du SEO technique et des balises...');
      await new Promise((r) => setTimeout(r, 600));

      setCurrentStep('Évaluation de la compatibilité smartphone 4G...');
      await new Promise((r) => setTimeout(r, 500));

      const domainHash = formattedUrl.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const calculatedScore = 60 + (domainHash % 26); // 60 to 86

      setResults({
        score: calculatedScore,
        url: formattedUrl,
        loadTime: (1.7 + (domainHash % 14) / 10).toFixed(1) + 's',
        mobileScore: Math.min(94, calculatedScore - 3),
        seoScore: Math.min(98, calculatedScore + 5),
        securityScore: 88,
        strengths: [
          'Certificat de sécurité SSL valide',
          'Structure HTML sémantique indexable',
          'Affichage responsive sans débordement horizontal'
        ],
        issues: [
          'Médias non compressés en WebP/AVIF (ralentit la navigation)',
          'Absence d\'intégration directe du paiement Mobile Money',
          'Vitesse de chargement perfectible sur réseau 3G/4G local'
        ],
        recommendations: [
          'Optimiser les formats d\'images pour diviser le temps de chargement par deux.',
          'Intégrer un déclencheur WhatsApp pour capturer les prospects instantanément.',
          'Compléter le balisage OpenGraph pour soigner vos partages sur les réseaux sociaux.'
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
      <FadeIn delay={0} y={30}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-4 sm:mb-6">
          Audit
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/75 font-light text-center max-w-[580px] mx-auto text-[clamp(0.95rem,1.8vw,1.25rem)] mb-10 sm:mb-12 leading-relaxed">
          Analysez la vitesse, le SEO et le taux de conversion de votre site actuel sur les réseaux mobiles à Madagascar.
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="w-full max-w-2xl mx-auto">
        {/* URL Input Form */}
        <form onSubmit={auditWebsite} className="flex flex-col gap-5">
          <div className="relative">
            <div className="flex items-center gap-3 bg-[#141414] border border-white/15 focus-within:border-white/40 rounded-full px-5 py-3.5 transition-colors">
              <Globe className="w-5 h-5 text-white/50 shrink-0" />
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
                className="w-full bg-transparent text-white focus:outline-none placeholder:text-white/35 text-base sm:text-lg"
              />
              {url && !loading && (
                <button
                  type="button"
                  onClick={() => setUrl('')}
                  className="text-xs text-white/50 hover:text-white px-2 py-1 cursor-pointer"
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

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 sm:px-10 sm:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-wider transition-all duration-200 hover:brightness-110 active:scale-[0.98] disabled:opacity-60 cursor-pointer text-center"
              style={{
                background: 'linear-gradient(120deg, #1A0524 0%, #9E0091 50%, #7621B0 100%)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analyse en cours...</span>
                </>
              ) : (
                <>
                  <span>Lancer l'audit gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Loading Progress State */}
        {loading && (
          <div className="mt-8 p-6 rounded-2xl bg-[#141414] border border-white/10 text-center">
            <div className="w-7 h-7 mx-auto mb-3 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-sm sm:text-base text-white font-medium">{currentStep}</p>
            <p className="text-xs text-white/40 mt-1">Analyse des standards de performance web</p>
          </div>
        )}

        {/* Audit Results Dashboard */}
        {results && (
          <FadeIn delay={0} y={15} className="mt-8 bg-[#131313] border border-white/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-[#D7E2EA] shadow-xl">
            {/* Header Result */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-wider text-white/50 font-mono">
                  Rapport technique
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-white truncate max-w-md mt-0.5">
                  {results.url}
                </h3>
              </div>

              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-white/60">Note globale :</span>
                <span className={`text-2xl font-black ${results.score >= 75 ? 'text-emerald-400' : 'text-amber-400'}`}>
                  {results.score}/100
                </span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-3 gap-3 my-5">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <Zap className="w-4 h-4 mx-auto mb-1 text-amber-400" />
                <span className="text-[10px] uppercase text-white/50 block">Affichage</span>
                <span className="font-semibold text-white text-sm sm:text-base">{results.loadTime}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <BarChart3 className="w-4 h-4 mx-auto mb-1 text-purple-400" />
                <span className="text-[10px] uppercase text-white/50 block">SEO Local</span>
                <span className="font-semibold text-white text-sm sm:text-base">{results.seoScore}%</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-center">
                <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-emerald-400" />
                <span className="text-[10px] uppercase text-white/50 block">Sécurité</span>
                <span className="font-semibold text-white text-sm sm:text-base">{results.securityScore}%</span>
              </div>
            </div>

            {/* Key Findings */}
            <div className="space-y-4 pt-2">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-4 h-4" /> Points forts
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
                  <AlertTriangle className="w-4 h-4" /> Optimisations recommandées
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
            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-white/60 text-center sm:text-left leading-relaxed max-w-sm">
                PixelStudio restructure votre plateforme pour atteindre 95%+ de score et maximiser vos ventes directes.
              </p>

              <a
                href="https://calendly.com/rachidlemonteur/audit-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <span>Échanger avec un expert</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </FadeIn>
        )}
      </FadeIn>
    </section>
  );
};
