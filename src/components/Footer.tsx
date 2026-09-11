import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0C0C0C] py-16 sm:py-20 md:py-24 border-t border-[#D7E2EA]/20 flex flex-col items-center gap-6">
      <div className="text-[#D7E2EA] font-medium text-center">
        PixelStudio_mg — Créateur de sites web à Madagascar
      </div>
      
      <div className="flex items-center gap-6 text-[#D7E2EA]">
        <a 
          href="https://www.instagram.com/pixelstudio_mg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          Instagram
        </a>
        <a 
          href="https://www.tiktok.com/@pixelstudio_mg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          TikTok
        </a>
        <a 
          href="https://www.facebook.com/share/1CKPSzi8fg/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          Facebook
        </a>
        <a 
          href="https://calendly.com/rachidlemonteur/audit-gratuit" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:opacity-70 transition-opacity"
        >
          Calendly
        </a>
      </div>

      <div className="text-[#D7E2EA] opacity-60 text-sm">
        Paiement : MVola, Orange Money, Airtel Money
      </div>

      <div className="text-[#D7E2EA] opacity-40 font-light text-sm">
        Copyright © 2026 PixelStudio_mg
      </div>
    </footer>
  );
};
