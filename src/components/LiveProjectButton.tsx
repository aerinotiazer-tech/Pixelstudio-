import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  label = "Explorer le projet",
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border border-white/20 hover:border-white text-white/90 hover:text-black hover:bg-white font-medium uppercase tracking-wider px-5 sm:px-7 py-2.5 text-xs sm:text-sm transition-all duration-200 active:scale-95 cursor-pointer flex items-center gap-1.5 backdrop-blur-sm ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 shrink-0" />
    </button>
  );
};
