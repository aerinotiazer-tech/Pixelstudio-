import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface LinkCardProps {
  to: string;
  external?: boolean;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  onClick?: () => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ to, external, icon, title, description, delay = 0, onClick }) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative flex items-center p-4 sm:p-5 rounded-2xl w-full",
        "bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden",
        "hover:bg-white/10 hover:border-white/20 transition-colors duration-300",
        "cursor-pointer touch-manipulation"
      )}
      onClick={onClick}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] transition-opacity duration-500 pointer-events-none" />
      
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 text-white mr-4">
        {icon}
      </div>
      
      <div className="flex flex-col text-left">
        <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-white/60 tracking-tight">{description}</p>
      </div>
      
      <div className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </div>
    </motion.div>
  );

  if (external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-2xl">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="block w-full outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-2xl">
      {content}
    </Link>
  );
};
