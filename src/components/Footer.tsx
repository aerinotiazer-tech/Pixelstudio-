import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070d26] text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main 4-Column Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#c9a84c] to-[#f3e1a0] flex items-center justify-center text-[#0d173d] font-black text-lg">
                P
              </div>
              <span className="text-[#c9a84c] font-black text-xl tracking-tight">
                PixelStudio<span className="text-white text-sm font-semibold opacity-80">_mg</span>
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Studio de création web sur-mesure à Madagascar. Des sites ultra-rapides, livrés en 48 heures, conçus pour faire vendre et encaisser par MVola.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-white/50">
              <MapPin className="w-3.5 h-3.5 text-[#c9a84c]" />
              <span>Antananarivo & intervention sur toute l'île</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#a-propos" className="hover:text-[#c9a84c] transition-colors">À propos du créateur</a></li>
              <li><a href="#services" className="hover:text-[#c9a84c] transition-colors">Services & Forfaits 48h</a></li>
              <li><a href="#projets" className="hover:text-[#c9a84c] transition-colors">Études de cas & Réalisations</a></li>
              <li><a href="#audit" className="hover:text-[#c9a84c] transition-colors">Audit IA instantané gratuit</a></li>
              <li><a href="#simulateur" className="hover:text-[#c9a84c] transition-colors">Calculateur de devis Ariary</a></li>
              <li><a href="#avis" className="hover:text-[#c9a84c] transition-colors">Témoignages clients vérifiés</a></li>
            </ul>
          </div>

          {/* Payment & Security */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              Paiement Sécurisé
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              Acompte de démarrage et solde à livraison via :
            </p>
            <div className="flex flex-col gap-1.5 text-xs text-white/80 font-mono">
              <span className="flex items-center gap-2">📱 MVola (Telma)</span>
              <span className="flex items-center gap-2">🍊 Orange Money</span>
              <span className="flex items-center gap-2">🔴 Airtel Money</span>
              <span className="flex items-center gap-2">🏦 Virement BNI / BMOI</span>
            </div>
          </div>

          {/* Socials & Direct Contact */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#c9a84c]">
              Réseaux Sociaux & Contact
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <a
                href="https://www.facebook.com/share/1CKPSzi8fg/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/pixelstudio_mg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@pixelstudio_mg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                TikTok
              </a>
            </div>
            <div className="pt-2 text-xs text-white/60 space-y-1">
              <div>WhatsApp : +261 34 00 000 00</div>
              <div>Email : contact@pixelstudio.mg</div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © 2026 PixelStudio_mg • Tous droits réservés • Fait avec passion à Madagascar
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-white/70 hover:text-[#c9a84c] transition-colors group"
          >
            <span>Retour en haut</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
