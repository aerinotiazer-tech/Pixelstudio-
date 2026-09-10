import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowLeft, Beaker } from 'lucide-react';
import { motion } from 'motion/react';

export const Lab: React.FC = () => {
  return (
    <PageTransition className="w-full min-h-[100dvh] pb-24">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 pt-12 sm:pt-20">
        
        <Link to="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium tracking-tight">Back</span>
        </Link>

        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6"
          >
            <Beaker className="w-8 h-8 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-4"
          >
            PixelStudio Lab<span className="text-white/30">.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl tracking-tight"
          >
            Notre zone expérimentale. Ici nous testons des concepts UI, de l'art génératif, et des fonctionnalités innovantes avant de les proposer à nos clients.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="aspect-video w-full rounded-3xl border border-dashed border-white/20 bg-white/[0.02] flex items-center justify-center p-8 text-center"
        >
          <div>
            <div className="text-white/40 mb-2 font-mono text-sm uppercase tracking-widest">Status</div>
            <div className="text-xl font-medium tracking-tight text-white/80">Experiment loading...</div>
          </div>
        </motion.div>

      </div>
    </PageTransition>
  );
};
