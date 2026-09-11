import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  label = "Voir le projet",
}) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm transition-all hover:bg-[#D7E2EA] hover:text-[#0C0C0C] active:scale-95 cursor-pointer flex items-center gap-2"
    >
      <span>{label}</span>
      <span className="text-xs">↗</span>
    </button>
  );
};
