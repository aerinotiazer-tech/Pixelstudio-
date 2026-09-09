import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Contact Menu */}
      {isOpen && (
        <div className="mb-3 w-72 bg-[#101c4c] border border-[#c9a84c]/50 rounded-2xl p-4 shadow-2xl text-white animate-in slide-in-from-bottom-5 duration-200 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-bold text-white">PixelStudio Madagascar</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-white/80 leading-snug">
            Besoin d’un site web ou d’un devis rapide ? Nous vous répondons en moins de 15 minutes sur WhatsApp !
          </p>

          <div className="space-y-2 pt-1">
            <a
              href="https://wa.me/261340000000?text=Bonjour%20PixelStudio%2C%20je%20souhaite%20des%20renseignements%20pour%20un%20site%20web"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Discussion WhatsApp directe
              </span>
              <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded">En ligne</span>
            </a>

            <a
              href="tel:+261340000000"
              className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/10"
            >
              <Phone className="w-4 h-4 text-[#c9a84c]" />
              <span>Appeler le +261 34 00 000 00</span>
            </a>

            <a
              href="#simulateur"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 p-2.5 rounded-xl bg-[#c9a84c]/20 hover:bg-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold transition-colors border border-[#c9a84c]/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simuler mon devis en Ariary</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-2 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-950/40 hover:scale-105 transition-all duration-300"
        aria-label="Contacter sur WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#c9a84c] rounded-full border-2 border-[#1a2a6c]"></span>
        <MessageCircle className="w-6 h-6" />
        <span className="hidden sm:inline font-bold text-xs uppercase tracking-wider">
          {isOpen ? 'Fermer' : 'Un projet ? WhatsApp'}
        </span>
      </button>
    </div>
  );
};
