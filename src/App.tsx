import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AuditSection } from './sections/AuditSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="w-full bg-[#0C0C0C] min-h-screen font-sans overflow-x-clip">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <AuditSection />
      <Footer />
    </div>
  );
}
