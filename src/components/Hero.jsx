import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { fadeUp, stagger } from '../utils/motion';
import { HeroAvatar } from './HeroAvatar';

export function Hero() {
  return (
    <main className="relative z-10 flex min-h-screen items-center px-5 pb-36 pt-20 md:px-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 md:grid-cols-[1.08fr_.92fr]">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="relative z-10">
          <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs uppercase tracking-[0.3em] text-mint/80 backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-acid shadow-acid" />
            {profile.role}
          </motion.div>
          <motion.h1 variants={fadeUp} className="max-w-4xl font-display text-5xl font-semibold leading-[0.96] text-fog sm:text-7xl lg:text-8xl">
            {profile.headline}
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-lg leading-8 text-steel md:text-xl">
            {profile.tagline}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-insetGlass backdrop-blur-lg">
                <div className="font-display text-2xl font-semibold text-fog">{metric.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-steel">{metric.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.88, filter: 'blur(18px)' }} animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
          <HeroAvatar />
        </motion.div>
      </div>
    </main>
  );
}
