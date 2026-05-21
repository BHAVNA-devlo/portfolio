import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { fadeUp, stagger } from '../utils/motion';
import { HeroAvatar } from './HeroAvatar';

export function Hero() {
  return (
    <main className="relative z-10 flex h-screen overflow-hidden px-5 pb-28 pt-8 md:px-10 md:pb-32 md:pt-10">
      <div className="mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center gap-4 text-center sm:gap-5 md:gap-6">
        <motion.div
          className="order-1"
          initial={{ opacity: 0, scale: 0.88, filter: 'blur(18px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroAvatar />
        </motion.div>

        <motion.div variants={stagger} initial="hidden" animate="visible" className="order-2 relative z-10 flex flex-col items-center">
          <motion.div variants={fadeUp} className="mb-4 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.3em] text-mint/80 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-acid shadow-acid" />
            {profile.role}
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-4xl font-display text-4xl font-semibold leading-[0.96] text-fog sm:text-6xl lg:text-7xl">
            {profile.headline}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-steel md:text-lg">
            {profile.tagline}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-4 grid max-w-xl grid-cols-3 gap-3">
           
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
