import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { motion } from 'motion/react';

const experiences = [
  {
    id: 1,
    title: 'Kinetic Typography',
    description: 'Exploration de la typographie dynamique et réactive au scroll.',
  },
  {
    id: 2,
    title: 'WebGL Particles',
    description: 'Système de particules interactif utilisant shaders et WebGL.',
  },
  {
    id: 3,
    title: 'Magnetic UI',
    description: 'Composants d\'interface qui réagissent magnétiquement au curseur.',
  }
];

export const Experiences: React.FC = () => {
  return (
    <PageTransition className="w-full min-h-[100dvh] pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-12 sm:pt-20">
        
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-tight">Back</span>
        </Link>

        <div className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-4"
          >
            Web Experiences<span className="text-white/30">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl tracking-tight"
          >
            Démonstration de notre savoir-faire technique à travers des interfaces interactives et animations avancées.
          </motion.p>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
            >
              <div className="mb-6 sm:mb-0">
                <h3 className="text-2xl font-bold tracking-tight mb-2">{exp.title}</h3>
                <p className="text-white/60 tracking-tight">{exp.description}</p>
              </div>
              
              <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm tracking-tight hover:scale-105 active:scale-95 transition-transform shrink-0">
                <PlayCircle className="w-4 h-4" />
                TRY IT
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </PageTransition>
  );
};
