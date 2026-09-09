import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle, Phone, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export const Navbar = ({ onOpenQuote }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'À propos', href: '#a-propos' },
    { label: 'Services', href: '#services' },
    { label: 'Réalisations', href: '#projets' },
    { label: 'Audit IA', href: '#audit' },
    { label: 'Simulateur', href: '#simulateur' },
    { label: 'Avis', href: '#avis' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-[#0d173d]/90 backdrop-blur-md border-b border-white/10 shadow-xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#c9a84c] to-[#f3e1a0] flex items-center justify-center text-[#0d173d] font-black text-xl shadow-lg shadow-[#c9a84c]/20 group-hover:scale-105 transition-transform">
            P
          </div>
          <div className="flex flex-col">
            <span className="text-[#c9a84c] font-black text-xl tracking-tight leading-none group-hover:text-white transition-colors">
              PixelStudio<span className="text-white text-sm font-semibold opacity-80">_mg</span>
            </span>
            <span className="text-[10px] text-white/60 tracking-wider uppercase font-medium mt-0.5">
              Madagascar • Web 48h
            </span>
          </div>
        </a>

        {/* Live availability pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Disponible pour 2 projets cette semaine</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-[#c9a84c] text-sm font-semibold tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/261340000000?text=Bonjour%20PixelStudio%2C%20je%20souhaite%20un%20devis%20pour%20un%20site%20web"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-all border border-white/10"
            title="WhatsApp direct"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-[#c9a84c] hover:bg-[#dfbd5b] text-[#0d173d] font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#c9a84c]/20 hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Devis Express</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d173d] border-b border-white/10 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Livraison garantie en 48h à Madagascar</span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-base font-medium hover:text-[#c9a84c] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuote) onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#c9a84c] text-[#0d173d] font-bold uppercase text-xs tracking-wider"
            >
              <Sparkles className="w-4 h-4" />
              <span>Simuler mon devis (Ariary)</span>
            </button>

            <a
              href="https://wa.me/261340000000?text=Bonjour%20PixelStudio%2C%20je%20souhaite%20un%20devis"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-emerald-600/90 text-white font-bold text-xs uppercase tracking-wider"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuter sur WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
