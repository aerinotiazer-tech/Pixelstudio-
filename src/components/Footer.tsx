import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#0b1336] text-white py-12 px-5 sm:px-8 md:px-10 border-t border-white/10 relative z-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div className="flex flex-col gap-2">
          <div className="text-[#c9a84c] font-black text-xl tracking-tighter">PixelStudio_mg</div>
          <p className="text-sm text-white/60 font-medium">Créateur de sites web à Madagascar</p>
        </div>

        <div className="flex gap-6">
          <a href="https://www.instagram.com/pixelstudio_mg" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#c9a84c] transition-colors font-medium">Instagram</a>
          <a href="https://www.tiktok.com/@pixelstudio_mg" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#c9a84c] transition-colors font-medium">TikTok</a>
          <a href="https://www.facebook.com/share/1CKPSzi8fg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#c9a84c] transition-colors font-medium">Facebook</a>
        </div>

        <div className="flex flex-col gap-2 md:items-end">
          <p className="text-sm text-white/60 font-medium">Paiement : MVola, Orange Money, Airtel Money</p>
          <p className="text-xs text-white/40">Copyright © 2026 PixelStudio_mg</p>
        </div>

      </div>
    </footer>
  );
};
