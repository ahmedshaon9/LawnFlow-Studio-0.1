import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const ROTATING_WORDS = ['Get Found', 'Get Calls', 'Get Growing'];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  // Counter 000 -> 100 over 2700ms using requestAnimationFrame
  useEffect(() => {
    const duration = 2700;
    const startTime = performance.now();
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out slightly for smooth acceleration/deceleration
      const easedProgress = Math.floor(progress * 100);
      setCount(easedProgress);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        // On complete: 400ms delay then onComplete
        const timer = setTimeout(() => {
          setIsFinishing(true);
          const finalTimer = setTimeout(() => {
            onComplete();
          }, 400);
          return () => clearTimeout(finalTimer);
        }, 400);
        return () => clearTimeout(timer);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  // Word rotator cycling every 900ms
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      id="loading-screen"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinishing ? 0 : 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 sm:p-10 md:p-14 select-none pointer-events-none"
    >
      {/* Top Left Label with Logo */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex items-center gap-3"
      >
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
        <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
          Lawnflow Studio
        </span>
      </motion.div>

      {/* Center Rotating Words */}
      <div className="flex items-center justify-center h-48 md:h-64 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={ROTATING_WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 0.9 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary text-center px-4"
          >
            {ROTATING_WORDS[wordIndex]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Bottom Row: Counter & Progress bar */}
      <div className="w-full flex flex-col items-end gap-6">
        <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums tracking-tight">
          {String(count).padStart(3, '0')}
        </div>

        {/* Bottom progress bar */}
        <div className="w-full h-[3px] bg-stroke/50 overflow-hidden rounded-full">
          <div
            className="h-full accent-gradient transition-transform duration-75 origin-left"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: '0 0 14px rgba(16, 185, 129, 0.55)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
