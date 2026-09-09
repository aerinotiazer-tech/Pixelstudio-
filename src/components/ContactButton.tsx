import React from 'react';

export const ContactButton = ({ children, onClick, className = '' }: { children?: React.ReactNode, onClick?: () => void, className?: string }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full font-semibold uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
      style={{
        backgroundColor: '#c9a84c',
        color: '#1a2a6c',
        boxShadow: '0px 4px 14px rgba(201, 168, 76, 0.4)',
      }}
    >
      {children || "Contactez-moi"}
    </button>
  );
};
