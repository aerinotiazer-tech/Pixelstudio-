/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AuditSection } from './sections/AuditSection';
import { QuoteCalculator } from './components/QuoteCalculator';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { FaqSection } from './sections/FaqSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactInitialMessage, setContactInitialMessage] = useState<string>('');

  const scrollToQuote = () => {
    const el = document.getElementById('simulateur');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyQuoteToForm = (summary: string) => {
    setContactInitialMessage(`Bonjour PixelStudio, voici mon devis simulé :\n${summary}\nPouvez-vous me confirmer le délai et la démarche ?`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setContactInitialMessage(`Bonjour PixelStudio, je suis très intéressé par votre offre "${serviceName}". Pouvez-vous me recontacter pour lancer le projet sous 48h ?`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFixAudit = (url: string) => {
    setContactInitialMessage(`Bonjour PixelStudio, j'ai testé mon site ${url} sur votre outil d'audit. Je souhaite une refonte express 48h pour accélérer sa vitesse mobile et intégrer WhatsApp/MVola.`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#0b143a] min-h-screen text-white overflow-x-clip font-sans relative selection:bg-[#c9a84c] selection:text-[#0d173d]">
      
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuote={scrollToQuote} />

      <main>
        {/* Hero with interactive Magnetic Showcase and Direct CTAs */}
        <HeroSection onOpenQuote={scrollToQuote} />

        {/* Dynamic Infinite Clients & Tech Marquee */}
        <MarqueeSection />

        {/* Authentic About Section tailored to Madagascar */}
        <AboutSection />

        {/* Services & 48h Step-by-step Methodology */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Interactive Portfolio with Sector Filters */}
        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        {/* Real-time Website Audit Tool for Madagascar Speed & SEO */}
        <AuditSection onFixWithPixelStudio={handleFixAudit} />

        {/* Interactive Quote Calculator in MGA Ariary & EUR */}
        <QuoteCalculator onApplyToForm={handleApplyQuoteToForm} />

        {/* Verified Client Testimonials */}
        <TestimonialsSection />

        {/* FAQ Section answering all business questions */}
        <FaqSection />

        {/* Contact Form with real feedback, WhatsApp click-to-chat and Mobile Money options */}
        <ContactSection initialMessage={contactInitialMessage} />
      </main>

      {/* Complete Footer */}
      <Footer />

      {/* Case Study Modal with Desktop/Mobile Mockup toggles */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenQuote={scrollToQuote}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp />
      
    </div>
  );
}
