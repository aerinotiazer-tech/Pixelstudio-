import React, { useState, useEffect } from 'react';
import { FadeIn } from '../components/FadeIn';
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialMessage?: string;
}

export const ContactSection = ({ initialMessage = '' }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'hotel',
    budget: '650 000 - 1 200 000 Ar',
    message: initialMessage,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => ({
        ...prev,
        message: initialMessage
      }));
    }
  }, [initialMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#c9a84c', '#ffffff', '#22c55e']
      });
    }, 800);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `Bonjour PixelStudio ! Je suis ${formData.name || 'un client'}.
Mon activité : ${formData.businessType}
Numéro : ${formData.phone || 'Non renseigné'}
Mon message : ${formData.message || 'Je souhaite un devis pour un site web livrable en 48h.'}`;
    return `https://wa.me/261340000000?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="bg-[#0b143a] text-white py-24 px-4 sm:px-6 lg:px-8 relative z-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a84c]/20 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discutons de votre projet</span>
          </div>
          <h2 className="hero-heading font-black uppercase text-[clamp(2.3rem,6vw,75px)] leading-none tracking-tight">
            Prêt à lancer votre site ?
          </h2>
          <p className="text-white/70 text-base sm:text-lg font-medium">
            Réponse garantie en moins de 2 heures par WhatsApp ou par email.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Local Madagascar specifics (5 cols) */}
          <FadeIn delay={0.1} y={20} className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-black uppercase tracking-tight text-white">
                Contact Direct & Disponibilité
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Basé à Antananarivo, nous collaborons avec des clients partout à Madagascar (Nosy Be, Tamatave, Majunga, Diego) et à l’international.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between hover:bg-emerald-500/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-emerald-400 uppercase">WhatsApp Officiel</div>
                    <div className="text-sm font-bold text-white">+261 34 00 000 00</div>
                  </div>
                </div>
                <span className="text-xs text-emerald-300 font-semibold group-hover:translate-x-1 transition-transform">
                  Ouvrir →
                </span>
              </a>

              <a
                href="tel:+261340000000"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 text-[#c9a84c] flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#c9a84c] uppercase">Téléphone Appel Direct</div>
                    <div className="text-sm font-bold text-white">+261 34 00 000 00</div>
                  </div>
                </div>
                <span className="text-xs text-white/50 group-hover:translate-x-1 transition-transform">
                  Appeler →
                </span>
              </a>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white/70 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white/60 uppercase">Email Studio</div>
                  <div className="text-sm font-bold text-white">contact@pixelstudio.mg</div>
                </div>
              </div>
            </div>

            {/* Accepted Mobile Money Box */}
            <div className="p-6 rounded-2xl bg-[#121f52] border border-[#c9a84c]/20 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] block">
                Moyens de Paiement Acceptés à Madagascar :
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-amber-300 border border-amber-300/30">
                  📱 MVola (Telma)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-orange-400 border border-orange-400/30">
                  🍊 Orange Money
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-red-400 border border-red-400/30">
                  🔴 Airtel Money
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white/10 text-blue-300 border border-blue-300/30">
                  🏦 Virement BNI / BMOI
                </span>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed pt-1">
                Facture pro forma fournie avec NIF & STAT pour entreprises et indépendants.
              </p>
            </div>

          </FadeIn>

          {/* Right Column: Interactive Form (7 cols) */}
          <FadeIn delay={0.2} y={20} className="lg:col-span-7 bg-[#121f52] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl">
            
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                    Demande bien reçue !
                  </h3>
                  <p className="text-sm text-white/80 max-w-md mx-auto leading-relaxed">
                    Merci <strong>{formData.name}</strong>. Nous étudions votre projet dès maintenant et nous vous recontacterons par WhatsApp ou email sous 2 heures avec votre proposition sur-mesure.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppMessageUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Accélérer en m'écrivant sur WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        businessType: 'hotel',
                        budget: '650 000 - 1 200 000 Ar',
                        message: ''
                      });
                    }}
                    className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                      Votre Nom ou Entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex : Fanja / Hôtel Baie Bleue"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#c9a84c] focus:outline-none text-white text-sm placeholder-white/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                      Numéro Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex : 034 12 345 67"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#c9a84c] focus:outline-none text-white text-sm placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#c9a84c] focus:outline-none text-white text-sm placeholder-white/30"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                      Secteur d'activité
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#091130] border border-white/15 focus:border-[#c9a84c] focus:outline-none text-white text-sm"
                    >
                      <option value="hotel">Hôtel / Maison d'hôtes / Tourisme</option>
                      <option value="ecommerce">Boutique / Commerce / Vente</option>
                      <option value="restaurant">Restaurant / Bar / Café</option>
                      <option value="service">Artisan / Prestataire de services</option>
                      <option value="autre">Autre projet</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
                    Détails de votre projet ou devis souhaité
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Parlez-nous de vos besoins, objectifs et délais..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-[#c9a84c] focus:outline-none text-white text-sm placeholder-white/30 resize-none leading-relaxed"
                  ></textarea>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#c9a84c] text-[#0d173d] font-black uppercase text-xs sm:text-sm tracking-wider hover:bg-[#dfbd5b] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#c9a84c]/20 hover:scale-[1.01] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#0d173d]/30 border-t-[#0d173d] rounded-full animate-spin"></span>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer ma demande (Réponse sous 2h)</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-4 pt-2 text-[11px] text-white/50 text-center">
                  <span>🔒 Vos données restent strictement confidentielles</span>
                  <span>•</span>
                  <span>⚡ Livraison en 48h chrono</span>
                </div>
              </form>
            )}

          </FadeIn>

        </div>

      </div>
    </section>
  );
};
