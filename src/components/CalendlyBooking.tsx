import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import { motion, AnimatePresence } from 'motion/react';

interface CalendlyBookingProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyBooking: React.FC<CalendlyBookingProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          >
            {/* The PopupModal handles its own close button and overlay, 
                but we use our own backdrop for smoother transition before calendly loads */}
            <PopupModal
              url="https://calendly.com/aerinotiazer/30min" // Placeholder, user will configure
              onModalClose={onClose}
              open={isOpen}
              rootElement={document.getElementById('root')!}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
