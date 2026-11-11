import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { useEffect } from 'react';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  const raw = useMotionValue(0);
  const smoothed = useSpring(raw, { stiffness: 200, damping: 30 });
  const scaleX = useTransform(smoothed, [0, 100], [0, 1]);

  useEffect(() => {
    raw.set(progress);
  }, [progress, raw]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #a855f7, #818cf8, #3b82f6)',
      }}
    />
  );
}
