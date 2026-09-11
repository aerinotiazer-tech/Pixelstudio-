import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={ref} className={className} style={{ whiteSpace: 'pre-wrap' }}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
};
