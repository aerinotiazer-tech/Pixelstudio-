import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  index: number;
  total: number;
  depth?: number;
  maxTilt?: number;
}

export const Card3D: React.FC<Card3DProps> = ({
  children,
  className = '',
  index,
  total,
  depth = 50,
  maxTilt = 10,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll 3D transforms
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  // 3D rotations driven by scroll
  const scrollRotateXRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [12, 0, -3, -12]
  );
  const scrollTranslateZRaw = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    [-70, 0, -20, -100]
  );
  const scrollRotateYRaw = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 3 : -3]
  );

  // Springs for buttery smooth physics
  const scrollRotateX = useSpring(scrollRotateXRaw, { stiffness: 120, damping: 25 });
  const scrollTranslateZ = useSpring(scrollTranslateZRaw, { stiffness: 120, damping: 25 });
  const scrollRotateY = useSpring(scrollRotateYRaw, { stiffness: 120, damping: 25 });

  // Mouse 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 250,
    damping: 30,
  });
  const mouseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 250,
    damping: 30,
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
      style={{ perspective: 1400 }}
      className="w-full h-full"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d',
          rotateX: isHovered ? mouseRotateX : scrollRotateX,
          rotateY: isHovered ? mouseRotateY : scrollRotateY,
          translateZ: scrollTranslateZ,
          willChange: 'transform',
        }}
        className={`w-full h-full transition-shadow duration-300 ${
          isHovered
            ? 'shadow-[0_30px_70px_rgba(182,0,168,0.25)]'
            : 'shadow-[0_20px_50px_rgba(0,0,0,0.6)]'
        } ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};
