/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AuditSection } from './sections/AuditSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <main className="w-full bg-[#1a2a6c] min-h-screen text-white overflow-x-clip font-sans">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <AuditSection />
      <ContactSection />
      <Footer />
    </main>
  );
}


