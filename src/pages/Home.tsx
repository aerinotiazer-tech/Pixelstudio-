import React, { useState } from 'react';
import { PageTransition } from '../components/PageTransition';
import { LinkCard } from '../components/LinkCard';
import { CalendlyBooking } from '../components/CalendlyBooking';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Code2, FlaskConical, Instagram, Sparkles, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [showPreCalendlyText, setShowPreCalendlyText] = useState(false);

  const handleStartProjectClick = () => {
    // Micro-experience before opening Calendly
    setShowPreCalendlyText(true);
    setTimeout(() => {
      setShowPreCalendlyText(false);
      setIsCalendlyOpen(true);
    }, 1800);
  };

  return (
    <PageTransition className="flex-1 flex flex-col items-center justify-center p-6 sm:p-8 w-full max-w-lg mx-auto relative min-h-[100dvh]">
      
      {/* Header / Logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="flex flex-col items-center mb-10 mt-8"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/20 backdrop-blur-xl flex items-center justify-center mb-6 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tighter">P<span className="text-white/50">_</span></span>
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
          PIXELSTUDIO_MG
        </h1>
        <p className="text-white/60 text-center text-sm sm:text-base max-w-[280px] sm:max-w-xs font-medium tracking-tight">
          Digital experiences beyond ordinary websites.
        </p>
      </motion.div>

      {/* Main Links */}
      <div className="w-full flex flex-col gap-3 sm:gap-4 mb-12">
        <LinkCard 
          to="/portfolio" 
          icon={<Briefcase className="w-6 h-6" />} 
          title="Portfolio" 
          description="Découvrir nos créations" 
          delay={0.1} 
        />
        <LinkCard 
          to="/experiences" 
          icon={<Code2 className="w-6 h-6" />} 
          title="Web Experiences" 
          description="Projets & expériences digitales" 
          delay={0.2} 
        />
        <LinkCard 
          to="/lab" 
          icon={<FlaskConical className="w-6 h-6" />} 
          title="PixelStudio Lab" 
          description="Expérimentations uniques" 
          delay={0.3} 
        />
        <LinkCard 
          to="https://instagram.com/pixelstudio_mg" 
          external
          icon={<Instagram className="w-6 h-6" />} 
          title="Instagram" 
          description="Notre univers" 
          delay={0.4} 
        />
      </div>

      {/* Primary CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full pb-8"
      >
        <button
          onClick={handleStartProjectClick}
          className="group relative w-full flex items-center justify-center gap-3 bg-white text-black p-4 sm:p-5 rounded-2xl font-bold text-base sm:text-lg tracking-tight overflow-hidden touch-manipulation hover:scale-[1.02] active:scale-[0.98] transition-transform duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          <Sparkles className="w-5 h-5 relative z-10" />
          <span className="relative z-10">START A PROJECT</span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      {/* Pre-Calendly Micro-Experience Overlay */}
      <AnimatePresence>
        {showPreCalendlyText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center p-6"
          >
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="text-2xl font-semibold text-white/60 mb-2"
            >
              Got an idea?
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-4xl font-black text-white"
            >
              Let's talk about it.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <CalendlyBooking isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </PageTransition>
  );
};
