import React, { useState, useMemo } from 'react';
import { Calculator, Check, ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuoteCalculatorProps {
  onApplyToForm?: (summary: string) => void;
}

export const QuoteCalculator = ({ onApplyToForm }: QuoteCalculatorProps) => {
  const [siteType, setSiteType] = useState<'vitrine-one' | 'vitrine-multi' | 'ecommerce'>('vitrine-one');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['mvola', 'seo']);
  const [isExpress24h, setIsExpress24h] = useState(false);
  const [currency, setCurrency] = useState<'MGA' | 'EUR'>('MGA');
  const [copied, setCopied] = useState(false);

  // Price table in MGA
  const BASE_PRICES: Record<string, { mga: number; eur: number; name: string; desc: string }> = {
    'vitrine-one': {
      mga: 650000,
      eur: 130,
      name: 'Site Vitrine One-Page',
      desc: 'Idéal commerces locaux, restaurants, artisans et indépendants.'
    },
    'vitrine-multi': {
      mga: 950000,
      eur: 190,
      name: 'Site Multi-Pages Entreprise',
      desc: 'Hôtels, cliniques, agences de voyage et PME (jusqu’à 6 pages).'
    },
    'ecommerce': {
      mga: 1350000,
      eur: 270,
      name: 'Boutique E-commerce & Catalogue',
      desc: 'Catalogue produits, panier, fiches descriptives et gestion de stock.'
    }
  };

  const ADDONS = [
    {
      id: 'mvola',
      title: 'Paiement Mobile Money (MVola & Orange Money)',
      mga: 150000,
      eur: 30,
      desc: 'Boutons de validation instantanés et instructions automatiques.'
    },
    {
      id: 'seo',
      title: 'Pack Référencement Google Maps Madagascar',
      mga: 120000,
      eur: 25,
      desc: 'Optimisation pour apparaître en tête des recherches à Tana / provinces.'
    },
    {
      id: 'content',
      title: 'Rédaction pro des textes & retouches photos',
      mga: 100000,
      eur: 20,
      desc: 'Nous rédigeons vos arguments de vente percutants.'
    },
    {
      id: 'domain-mg',
      title: 'Extension officielle .mg (Madagascar)',
      mga: 180000,
      eur: 35,
      desc: 'Nom de domaine local hautement recommandé (.com déjà inclus gratuit).'
    },
    {
      id: 'booking',
      title: 'Module de Réservation / Devis en ligne',
      mga: 140000,
      eur: 28,
      desc: 'Formulaire dynamique pour hôtels, tables ou rendez-vous.'
    }
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const base = BASE_PRICES[siteType];
    const addonsTotalMga = selectedAddons.reduce((acc, addonId) => {
      const found = ADDONS.find((a) => a.id === addonId);
      return acc + (found ? found.mga : 0);
    }, 0);

    const expressMga = isExpress24h ? 150000 : 0;
    const totalMga = base.mga + addonsTotalMga + expressMga;
    const totalEur = Math.round(totalMga / 5000); // Approximate exchange rate

    return {
      totalMga,
      totalEur,
      baseName: base.name,
      deliveryTime: isExpress24h ? '24 heures (Express)' : '48 heures chrono'
    };
  }, [siteType, selectedAddons, isExpress24h]);

  const formatPrice = (mga: number, eur: number) => {
    if (currency === 'EUR') {
      return `${eur} €`;
    }
    return `${mga.toLocaleString('fr-FR')} Ar`;
  };

  const handleCelebrate = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#c9a84c', '#ffffff', '#1a2a6c']
    });
  };

  const generateWhatsAppLink = () => {
    const text = `Bonjour PixelStudio ! J'ai utilisé votre simulateur :
📌 Projet : ${calculation.baseName}
💰 Budget estimé : ${calculation.totalMga.toLocaleString('fr-FR')} Ar (${calculation.totalEur} €)
⏱️ Délai souhaité : ${calculation.deliveryTime}
🔧 Options : ${selectedAddons.join(', ')}
Pouvez-vous me confirmer la disponibilité ?`;
    return `https://wa.me/261340000000?text=${encodeURIComponent(text)}`;
  };

  const handleApplyToContact = () => {
    handleCelebrate();
    const summary = `${calculation.baseName} (${calculation.totalMga.toLocaleString('fr-FR')} Ar / ${calculation.totalEur} €) - Options : ${selectedAddons.join(', ')} - Délai : ${calculation.deliveryTime}`;
    if (onApplyToForm) {
      onApplyToForm(summary);
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="simulateur" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0f1b4c] relative z-20 text-white border-t border-b border-white/10">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulateur de Devis Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            Calculez votre projet en <span className="hero-heading">Ariary (MGA)</span>
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium">
            Pas de mauvaise surprise ni de devis à rallonge. Choisissez vos options et découvrez le tarif clair de votre futur site web.
          </p>

          {/* Currency toggle */}
          <div className="flex justify-center pt-2">
            <div className="inline-flex items-center p-1 bg-white/10 rounded-full border border-white/10">
              <button
                onClick={() => setCurrency('MGA')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'MGA' ? 'bg-[#c9a84c] text-[#0d173d]' : 'text-white/70 hover:text-white'
                }`}
              >
                Ariary malgache (Ar)
              </button>
              <button
                onClick={() => setCurrency('EUR')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'EUR' ? 'bg-[#c9a84c] text-[#0d173d]' : 'text-white/70 hover:text-white'
                }`}
              >
                Euros (€)
              </button>
            </div>
          </div>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Options Column (2 cols) */}
          <div className="lg:col-span-2 space-y-8 bg-[#15235f] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-xl">
            
            {/* Step 1: Base Type */}
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-wider text-[#c9a84c] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#c9a84c] text-[#0d173d] flex items-center justify-center text-[10px]">1</span>
                Sélectionnez le type de site web
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(['vitrine-one', 'vitrine-multi', 'ecommerce'] as const).map((typeKey) => {
                  const item = BASE_PRICES[typeKey];
                  const isSelected = siteType === typeKey;
                  return (
                    <div
                      key={typeKey}
                      onClick={() => setSiteType(typeKey)}
                      className={`cursor-pointer p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                        isSelected 
                          ? 'border-[#c9a84c] bg-[#c9a84c]/15 shadow-lg shadow-[#c9a84c]/10 ring-1 ring-[#c9a84c]' 
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-white">{item.name}</span>
                          {isSelected && <Check className="w-4 h-4 text-[#c9a84c]" />}
                        </div>
                        <p className="text-xs text-white/60 line-clamp-2 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-2 border-t border-white/10 font-bold text-sm text-[#c9a84c]">
                        {formatPrice(item.mga, item.eur)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Add-ons */}
            <div className="space-y-4">
              <label className="text-xs font-black uppercase tracking-wider text-[#c9a84c] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#c9a84c] text-[#0d173d] flex items-center justify-center text-[10px]">2</span>
                Options & Fonctionnalités à Madagascar
              </label>

              <div className="space-y-2.5">
                {ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`cursor-pointer p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                        isChecked 
                          ? 'border-[#c9a84c]/60 bg-[#c9a84c]/10' 
                          : 'border-white/10 bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 mt-0.5 rounded-md flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#c9a84c] text-[#0d173d]' : 'border border-white/30 bg-transparent'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">{addon.title}</div>
                          <div className="text-xs text-white/60">{addon.desc}</div>
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm font-bold text-[#c9a84c] whitespace-nowrap">
                        +{formatPrice(addon.mga, addon.eur)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Urgence 24h toggle */}
            <div className="pt-2">
              <div 
                onClick={() => setIsExpress24h(!isExpress24h)}
                className={`cursor-pointer p-4 rounded-2xl border flex items-center justify-between gap-4 transition-all ${
                  isExpress24h 
                    ? 'border-amber-400 bg-amber-500/10' 
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isExpress24h ? 'bg-amber-400 text-slate-900' : 'bg-white/10 text-white'}`}>
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Option Urgence Flash 24H</div>
                    <div className="text-xs text-white/60">Livraison prioritaire garantie en 24h au lieu de 48h</div>
                  </div>
                </div>
                <div className="text-xs sm:text-sm font-bold text-amber-300 whitespace-nowrap">
                  +{formatPrice(150000, 30)}
                </div>
              </div>
            </div>

          </div>

          {/* Summary Box (1 col) */}
          <div className="sticky top-24 bg-gradient-to-b from-[#18296d] to-[#101b47] p-6 sm:p-8 rounded-3xl border-2 border-[#c9a84c] shadow-2xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">Votre Devis Estimatif</span>
              <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" />
                Tarif Garanti
              </span>
            </div>

            {/* Big price display */}
            <div className="space-y-1">
              <div className="text-xs text-white/70 font-medium">Investissement total :</div>
              <div className="text-3xl sm:text-4xl font-black text-[#c9a84c] tracking-tight">
                {formatPrice(calculation.totalMga, calculation.totalEur)}
              </div>
              <div className="text-xs text-white/50">
                {currency === 'MGA' ? `Soit environ ${calculation.totalEur} €` : `Soit environ ${calculation.totalMga.toLocaleString('fr-FR')} Ar`}
              </div>
            </div>

            {/* Key benefits list */}
            <div className="space-y-2 pt-2 border-t border-white/10 text-xs text-white/80">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                <span>Livraison : <strong>{calculation.deliveryTime}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                <span>Paiement : <strong>MVola, Orange Money ou Espèces</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                <span>Hébergement & Nom de domaine inclus 1 an</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#c9a84c] shrink-0" />
                <span>Accompagnement & tutoriel vidéo 15 min</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={handleApplyToContact}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#c9a84c] text-[#0d173d] font-black uppercase text-xs tracking-wider hover:bg-[#dfbd5b] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c9a84c]/20 hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Valider et bloquer mon créneau</span>
              </button>

              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCelebrate}
                className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase text-xs tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Transmettre sur WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-white/50 text-center leading-relaxed">
              Acompte de 50% au lancement par MVola/Orange Money, solde à la mise en ligne finale.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
