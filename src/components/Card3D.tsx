import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  total: number;
  maxTilt?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  index,
  total,
  maxTilt = 6,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || ('ontouchstart' in window));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Subtle 3D scroll progression
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const scrollRotateXRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [8, 0, -2, -8]
  );
  const scrollTranslateZRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-40, 0, -10, -60]
  );

  const scrollRotateX = useSpring(scrollRotateXRaw, { stiffness: 100, damping: 26 });
  const scrollTranslateZ = useSpring(scrollTranslateZRaw, { stiffness: 100, damping: 26 });

  // Mouse tilt (desktop only)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 28,
  });
  const mouseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 28,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsHovered(false);
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  return (
    <div
      ref={cardRef}
      style={{ perspective: 1200 }}
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          rotateX: isHovered && !isMobile ? mouseRotateX : scrollRotateX,
          rotateY: isHovered && !isMobile ? mouseRotateY : 0,
          translateZ: scrollTranslateZ,
          willChange: isHovered ? 'transform' : 'auto',
        }}
        className={`w-full h-full ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
