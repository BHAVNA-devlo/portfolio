import { AnimatePresence, motion } from 'framer-motion';

export function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[120] grid place-items-center bg-void"
          exit={{ opacity: 0, filter: 'blur(16px)' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative grid place-items-center">
            <motion.div
              className="h-44 w-44 rounded-full border border-mint/20 md:h-56 md:w-56"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 3, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.4, repeat: Infinity } }}
            />
            <motion.div
              className="absolute h-28 w-28 rounded-full border border-acid/30 shadow-acid md:h-36 md:w-36"
              animate={{ rotate: -360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute h-20 w-20 rounded-full border border-white/10 shadow-glow md:h-24 md:w-24"
              animate={{ rotate: 360, opacity: [0.35, 0.9, 0.35] }}
              transition={{ rotate: { duration: 1.8, repeat: Infinity, ease: 'linear' }, opacity: { duration: 1.2, repeat: Infinity } }}
            />
            <motion.span
              className="absolute font-display text-base uppercase tracking-[0.5em] text-mint md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              Bhavna
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
