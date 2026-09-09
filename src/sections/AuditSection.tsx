import React, { useState } from 'react';
import { FadeIn } from '../components/FadeIn';

export const AuditSection = () => {
  const [url, setUrl] = useState('');
  const [isAuditing, setIsAuditing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setIsAuditing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAuditing(false);
      setShowResults(true);
    }, 1500);
  };

  return (
    <section id="audit" className="bg-white text-[#1a2a6c] py-20 px-5 sm:px-8 md:px-10 relative z-20">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <FadeIn delay={0} y={30} className="w-full text-center">
          <h2 className="font-black uppercase text-[clamp(2rem,6vw,80px)] mb-6 leading-none tracking-tight">
            🔍 Audit instantané
          </h2>
          <p className="text-gray-600 font-medium text-lg md:text-xl mb-12">
            Entrez l'URL de votre site web et recevez un rapport complet sur ses performances.
          </p>
        </FadeIn>

        <FadeIn delay={0.2} y={30} className="w-full">
          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl mx-auto">
            <input
              type="url"
              placeholder="https://votre-site.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-full border-2 border-gray-200 focus:border-[#c9a84c] focus:outline-none text-lg"
            />
            <button
              type="submit"
              disabled={isAuditing}
              className="px-8 py-4 bg-[#1a2a6c] text-white rounded-full font-bold uppercase tracking-wider hover:bg-[#c9a84c] transition-colors disabled:opacity-70"
            >
              {isAuditing ? 'Analyse en cours...' : 'Lancer l\'audit'}
            </button>
          </form>
        </FadeIn>

        {showResults && (
          <FadeIn delay={0} y={20} className="w-full mt-16 p-8 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="font-bold text-2xl mb-8 text-center uppercase">Résultats pour : <span className="text-[#c9a84c]">{url}</span></h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-red-500">42/100</span>
                <span className="font-semibold text-gray-500 uppercase text-sm">Performance</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-orange-500">65/100</span>
                <span className="font-semibold text-gray-500 uppercase text-sm">SEO</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-green-500">88/100</span>
                <span className="font-semibold text-gray-500 uppercase text-sm">Sécurité</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-black text-yellow-500">70/100</span>
                <span className="font-semibold text-gray-500 uppercase text-sm">Accessibilité</span>
              </div>
            </div>
            <div className="mt-10 p-6 bg-red-50 rounded-2xl border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">Recommandation principale :</h4>
              <p className="text-red-700 font-medium">Votre site est trop lent et perd des clients potentiels. Il n'est pas optimisé pour le référencement local à Madagascar.</p>
            </div>
            <div className="mt-6 flex justify-center">
              <a href="#contact" className="text-[#c9a84c] font-bold underline hover:text-[#1a2a6c]">
                Discutons de la refonte de votre site →
              </a>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
};
