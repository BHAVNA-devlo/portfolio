import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function LoadingScreen({ isLoading }) {
  const characters = Array.from("BHAVNA");

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      }
    },
    exit: {
      opacity: 0,
      y: -25,
      transition: { ease: 'easeInOut', duration: 0.6 }
    }
  };

  const letterVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 12 }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-void"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="flex flex-col items-center text-center"
          >
            {/* Staggered animated letters in solid Electric Blue */}
            <div className="flex gap-2 min-h-[60px] items-center">
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="font-display text-5xl font-black uppercase tracking-wider text-mint sm:text-6xl select-none"
                >
                  {char}
                </motion.span>
              ))}
            </div>

            {/* Sublabel revealing in muted gray */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.65, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: 'easeOut' }}
              className="text-[9px] uppercase tracking-[0.4em] text-steel mt-4 font-bold select-none"
            >
              DEVELOPER ARCHIVE
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
