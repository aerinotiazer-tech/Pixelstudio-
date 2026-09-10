import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'Aura Luxury',
    category: 'E-commerce',
    description: 'Une expérience d\'achat immersive pour une marque de parfum premium.',
    tech: 'React, Three.js, Tailwind',
    image: 'https://images.unsplash.com/photo-1595425970377-c9703d7408ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Neo Bank',
    category: 'Fintech App',
    description: 'Interface futuriste et animations fluides pour une néobanque.',
    tech: 'Next.js, Framer Motion',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Studio Architect',
    category: 'Corporate Site',
    description: 'Portfolio minimaliste avec transitions de page sophistiquées.',
    tech: 'React, GSAP',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  }
];

export const Portfolio: React.FC = () => {
  return (
    <PageTransition className="w-full min-h-[100dvh] pb-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-12 sm:pt-20">
        
        {/* Navigation */}
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-tight">Back</span>
        </Link>

        {/* Header */}
        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-4"
          >
            Portfolio<span className="text-white/30">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl tracking-tight"
          >
            Découvrez une sélection de nos créations récentes. Des expériences conçues pour captiver et convertir.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1), ease: [0.23, 1, 0.32, 1] }}
              className="group relative flex flex-col rounded-3xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs font-medium tracking-wide">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-sm text-white/60 mb-6 flex-1 tracking-tight">
                  {project.description}
                </p>
                <div className="text-xs text-white/40 font-mono tracking-tight uppercase">
                  {project.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
