import React from 'react';

interface ContactButtonProps {
  label?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = "Réserver un audit gratuit",
  className = "",
}) => {
  return (
    <a
      href="https://calendly.com/rachidlemonteur/audit-gratuit"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full px-7 py-3 sm:px-9 sm:py-3.5 text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-wider transition-all duration-200 hover:brightness-110 active:scale-[0.98] border border-white/25 shadow-lg ${className}`}
      style={{
        background: 'linear-gradient(120deg, #1A0524 0%, #9E0091 50%, #7621B0 100%)',
      }}
    >
      {label}
    </a>
  );
};
