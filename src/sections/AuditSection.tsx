import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

export const AuditSection: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);

  const auditWebsite = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return alert('Entrez une URL');
    setLoading(true);
    setResults(null);

    try {
      // Simulate API call for audit
      await new Promise((resolve) => setTimeout(resolve, 2500));
      
      const score = Math.floor(Math.random() * 30) + 60; // Random score 60-90
      
      setResults({
        score,
        seo: "La structure H1/H2 est présente, mais manque quelques balises alt sur les images.",
        performance: "Temps de chargement correct (< 2.5s). Pensez à minifier vos CSS.",
        security: "Certificat SSL valide. Entêtes de sécurité à renforcer.",
        recommendations: "Optimisez vos images en WebP et ajoutez un fichier sitemap.xml."
      });
    } catch (error) {
      alert("Erreur lors de l'audit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-30">
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none tracking-tight mb-8 sm:mb-12 md:mb-16">
          Audit
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA] font-light text-center max-w-[600px] mx-auto text-[clamp(0.9rem,1.8vw,1.3rem)] mb-10 sm:mb-12 md:mb-16">
          🔍 Obtenez un audit gratuit de votre site web en 30 secondes. Entrez l'URL ci-dessous et recevez un rapport complet (SEO, performance, sécurité, accessibilité).
        </p>
      </FadeIn>

      <FadeIn delay={0.2} y={20} className="w-full max-w-xl mx-auto">
        <form onSubmit={auditWebsite} className="flex flex-col gap-8">
          <input 
            type="url" 
            id="auditUrl" 
            placeholder="https://votre-site.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full bg-transparent border-b-2 border-[#D7E2EA] text-[#D7E2EA] py-3 focus:outline-none focus:border-[#BBCCD7] transition-colors placeholder:text-[#D7E2EA]/40 text-lg"
            required
          />
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-block rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:hover:scale-100 cursor-pointer"
              style={{
                background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                outline: '2px solid white',
                outlineOffset: '-3px',
              }}
            >
              {loading ? '⏳ Audit en cours...' : 'Lancer l\'audit'}
            </button>
          </div>
        </form>

        {results && (
          <FadeIn delay={0} y={20} className="mt-12 bg-[#D7E2EA]/5 border border-[#D7E2EA]/20 rounded-3xl p-6 sm:p-8 text-[#D7E2EA] font-light leading-relaxed">
            <h3 className="text-xl sm:text-2xl font-medium mb-4 text-[#BBCCD7]">📊 Résultats de l'audit</h3>
            <div className="space-y-4">
              <p><strong className="font-medium">Score global :</strong> <span className={`font-bold ${results.score > 75 ? 'text-green-400' : 'text-yellow-400'}`}>{results.score}/100</span></p>
              <p><strong className="font-medium">SEO :</strong> {results.seo}</p>
              <p><strong className="font-medium">Performance :</strong> {results.performance}</p>
              <p><strong className="font-medium">Sécurité :</strong> {results.security}</p>
              <p><strong className="font-medium">Recommandations :</strong> {results.recommendations}</p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[#D7E2EA]/20 flex justify-center">
               <a 
                href="https://calendly.com/rachidlemonteur/audit-gratuit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white uppercase tracking-widest font-medium text-sm border-b border-white hover:opacity-70 transition-opacity"
               >
                 Réserver une consultation complète
               </a>
            </div>
          </FadeIn>
        )}
      </FadeIn>
    </section>
  );
};
