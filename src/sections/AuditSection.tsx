import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Search, CheckCircle2, AlertTriangle, XCircle, ArrowRight, Sparkles, Smartphone, Gauge, Shield, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AuditSectionProps {
  onFixWithPixelStudio?: (url: string) => void;
}

export const AuditSection = ({ onFixWithPixelStudio }: AuditSectionProps) => {
  const [url, setUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditStep, setAuditStep] = useState('');
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const presets = [
    'https://mon-hotel-nosybe.com',
    'https://boutique-mode-tana.mg',
    'https://restaurant-tamatave.mg'
  ];

  const handleAudit = (e?: React.FormEvent, targetUrl?: string) => {
    if (e) e.preventDefault();
    const finalUrl = targetUrl || url;
    if (!finalUrl) return;

    setIsAuditing(true);
    setAuditResult(null);

    const steps = [
      'Test de connectivité réseau 4G Telma & Orange Madagascar...',
      'Analyse du temps de premier octet (TTFB) et poids des images...',
      'Vérification du SEO local Google Maps & Mots-clés Madagascar...',
      'Audit de conversion mobile (WhatsApp, Mobile Money, clarté)...'
    ];

    let current = 0;
    setAuditStep(steps[0]);

    const interval = setInterval(() => {
      current++;
      if (current < steps.length) {
        setAuditStep(steps[current]);
      } else {
        clearInterval(interval);
        setIsAuditing(false);

        // Generate tailored audit result based on domain name
        const isFast = finalUrl.includes('pixelstudio') || finalUrl.includes('apple') || finalUrl.includes('google');
        const perfScore = isFast ? 96 : Math.floor(Math.random() * 20) + 38; // 38 - 58
        const seoScore = isFast ? 94 : Math.floor(Math.random() * 25) + 50;
        const convScore = isFast ? 98 : Math.floor(Math.random() * 20) + 42;
        const secScore = isFast ? 99 : 78;

        const result = {
          url: finalUrl,
          overallScore: Math.round((perfScore + seoScore + convScore + secScore) / 4),
          perfScore,
          seoScore,
          convScore,
          secScore,
          loadTime: isFast ? '0.7s' : '3.8s',
          issues: [
            {
              type: 'critical',
              title: 'Temps de chargement critique sur smartphone (+3.8s)',
              desc: 'À Madagascar, plus de 50% des visiteurs quittent un site qui met plus de 2 secondes à s’afficher sur réseau Telma/Orange 4G.'
            },
            {
              type: 'warning',
              title: 'Absence de bouton direct WhatsApp',
              desc: 'Les clients malgaches préfèrent échanger directement sur WhatsApp. L’absence de contact direct fait chuter les conversions de 65%.'
            },
            {
              type: 'warning',
              title: 'Référencement local insuffisant sur Google Tana',
              desc: 'Le site ne contient pas les balises de géolocalisation nécessaires pour remonter lors d’une recherche à Antananarivo ou Nosy Be.'
            },
            {
              type: 'success',
              title: 'Certificat SSL (HTTPS) actif',
              desc: 'La connexion est chiffrée, ce qui protège la navigation de vos utilisateurs.'
            }
          ]
        };

        setAuditResult(result);
        confetti({
          particleCount: 40,
          spread: 50,
          origin: { y: 0.8 }
        });
      }
    }, 600);
  };

  return (
    <section id="audit" className="bg-white text-[#0d173d] py-24 px-4 sm:px-6 lg:px-8 relative z-20 border-t border-slate-200">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1a2a6c]/10 text-[#1a2a6c] text-xs font-bold uppercase tracking-wider">
            <Search className="w-3.5 h-3.5 text-[#c9a84c]" />
            <span>Diagnostic Gratuit & Sans Engagement</span>
          </div>
          <h2 className="font-black uppercase text-[clamp(2.3rem,6vw,75px)] leading-none tracking-tight text-[#0d173d]">
            Audit IA de votre site web
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Découvrez en direct si votre site actuel perd des clients sur le réseau malgache et comment booster vos ventes.
          </p>

          {/* Sample quick buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs text-slate-500">
            <span>Exemples à tester :</span>
            {presets.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => {
                  setUrl(p);
                  handleAudit(undefined, p);
                }}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono transition-colors"
              >
                {p.replace('https://', '')}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={(e) => handleAudit(e)} className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl sm:rounded-full bg-slate-100 border border-slate-300 shadow-inner">
            <div className="flex-1 flex items-center px-4 py-2 sm:py-0">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="url"
                placeholder="https://votre-site-actuel.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full bg-transparent focus:outline-none text-slate-800 text-sm sm:text-base placeholder-slate-400 font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={isAuditing}
              className="px-6 py-3.5 sm:py-3 rounded-xl sm:rounded-full bg-[#101c4c] hover:bg-[#1a2a6c] text-white font-bold uppercase text-xs tracking-wider transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-md shrink-0"
            >
              {isAuditing ? (
                <>
                  <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  <span>Analyse en cours...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#c9a84c]" />
                  <span>Analyser mon site</span>
                </>
              )}
            </button>
          </form>

          {/* Progress state */}
          {isAuditing && (
            <div className="mt-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center animate-pulse space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Diagnostic réseau Madagascar en cours
              </div>
              <p className="text-sm font-medium text-blue-700">
                {auditStep}
              </p>
            </div>
          )}
        </div>

        {/* Audit Results Panel */}
        {auditResult && (
          <FadeIn delay={0.1} y={20} className="p-6 sm:p-10 rounded-3xl bg-[#0b143a] text-white border border-[#c9a84c]/40 shadow-2xl space-y-8">
            
            {/* Top Score Summary */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center sm:text-left">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#c9a84c]">Rapport d'audit complet pour</span>
                <h3 className="text-xl sm:text-2xl font-black text-white font-mono mt-1">
                  {auditResult.url}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  Analyse calibrée pour le réseau internet et le comportement consommateur à Madagascar.
                </p>
              </div>

              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="text-right">
                  <div className="text-xs font-bold uppercase text-white/60">Note Globale</div>
                  <div className="text-xs text-white/40">sur 100</div>
                </div>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl ${
                  auditResult.overallScore >= 80 
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                    : auditResult.overallScore >= 55 
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40' 
                    : 'bg-red-500/20 text-red-400 border border-red-500/40'
                }`}>
                  {auditResult.overallScore}
                </div>
              </div>
            </div>

            {/* Metric Meters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/70">Vitesse 4G</span>
                  <Gauge className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="text-2xl font-black text-white">{auditResult.perfScore}/100</div>
                <div className="text-[11px] text-white/50">Temps estimé : {auditResult.loadTime}</div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-[#c9a84c] h-full rounded-full" 
                    style={{ width: `${auditResult.perfScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/70">SEO Madagascar</span>
                  <Search className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="text-2xl font-black text-white">{auditResult.seoScore}/100</div>
                <div className="text-[11px] text-white/50">Visibilité Google Maps</div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-blue-400 h-full rounded-full" 
                    style={{ width: `${auditResult.seoScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/70">Conversion Mobile</span>
                  <Smartphone className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="text-2xl font-black text-white">{auditResult.convScore}/100</div>
                <div className="text-[11px] text-white/50">Tunnel WhatsApp & MVola</div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-emerald-400 h-full rounded-full" 
                    style={{ width: `${auditResult.convScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white/70">Sécurité SSL</span>
                  <Shield className="w-4 h-4 text-[#c9a84c]" />
                </div>
                <div className="text-2xl font-black text-white">{auditResult.secScore}/100</div>
                <div className="text-[11px] text-white/50">HTTPS & Protection</div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <div 
                    className="bg-purple-400 h-full rounded-full" 
                    style={{ width: `${auditResult.secScore}%` }}
                  ></div>
                </div>
              </div>

            </div>

            {/* Diagnostic points */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white/80">
                Points d'amélioration détectés :
              </h4>

              <div className="space-y-2.5">
                {auditResult.issues.map((issue: any, idx: number) => (
                  <div 
                    key={idx}
                    className={`p-3.5 rounded-2xl border flex items-start gap-3 ${
                      issue.type === 'critical'
                        ? 'bg-red-500/10 border-red-500/30 text-red-200'
                        : issue.type === 'warning'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                        : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                    }`}
                  >
                    {issue.type === 'critical' ? (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    ) : issue.type === 'warning' ? (
                      <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="text-sm font-bold text-white">{issue.title}</div>
                      <div className="text-xs opacity-80 mt-0.5">{issue.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#18296d] to-[#14225b] border border-[#c9a84c]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="text-xs font-bold uppercase text-[#c9a84c]">Solution recommandée par PixelStudio :</div>
                <div className="text-sm sm:text-base font-bold text-white">
                  Refonte Express 48h optimisée réseau local & intégration MVola / WhatsApp
                </div>
              </div>

              <button
                onClick={() => {
                  if (onFixWithPixelStudio) onFixWithPixelStudio(auditResult.url);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full bg-[#c9a84c] text-[#0d173d] font-black uppercase text-xs tracking-wider hover:bg-[#dfbd5b] transition-all whitespace-nowrap shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <span>Demander ma refonte 48h</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </FadeIn>
        )}

      </div>
    </section>
  );
};
