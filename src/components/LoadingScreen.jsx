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
              className="h-28 w-28 rounded-full border border-mint/20"
              animate={{ rotate: 360, scale: [1, 1.08, 1] }}
              transition={{ rotate: { duration: 3, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.4, repeat: Infinity } }}
            />
            <motion.div
              className="absolute h-16 w-16 rounded-full border border-acid/30 shadow-acid"
              animate={{ rotate: -360 }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
            />
            <motion.span
              className="absolute font-display text-sm uppercase tracking-[0.45em] text-mint"
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
