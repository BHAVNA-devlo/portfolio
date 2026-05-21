import { motion } from 'framer-motion';

const particles = Array.from({ length: 68 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 9) * 0.35,
  size: 1.5 + (index % 4) * 0.75,
  color: index % 4 === 0 ? 'bg-white/80' : index % 3 === 0 ? 'bg-acid/70' : 'bg-mint/70',
}));

const runners = Array.from({ length: 11 }, (_, index) => ({
  id: index,
  top: `${8 + index * 8}%`,
  delay: index * 0.72,
  duration: 7 + (index % 4),
  width: 120 + (index % 3) * 48,
}));

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-void">
      <div className="absolute inset-0 bg-radialNoise" />
      <motion.div
        className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-mint/10 blur-3xl"
        animate={{ x: [0, 80, 20], y: [0, 30, 90], scale: [1, 1.14, 0.96] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-acid/10 blur-3xl"
        animate={{ x: [0, -70, -20], y: [0, -80, -10], scale: [1, 0.92, 1.12] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(243,201,105,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(230,225,215,.045)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,.18)_1px,transparent_1.6px)] bg-[size:34px_34px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_82%)]" />
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-mint/35 to-transparent"
        animate={{ opacity: [0.15, 0.65, 0.15], y: [-120, 90, -120] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      {runners.map((runner) => (
        <motion.span
          key={runner.id}
          className="absolute h-px -rotate-12 rounded-full bg-gradient-to-r from-transparent via-white/70 to-transparent shadow-[0_0_18px_rgba(255,255,255,.35)]"
          style={{ top: runner.top, width: runner.width }}
          initial={{ x: '-25vw', opacity: 0 }}
          animate={{ x: ['-25vw', '125vw'], opacity: [0, 0.85, 0.15, 0] }}
          transition={{ duration: runner.duration, delay: runner.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className={`absolute rounded-full ${particle.color} shadow-[0_0_14px_rgba(255,255,255,.28)]`}
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{
            x: [-8, 8, -8],
            y: [-22, 22, -22],
            opacity: [0.12, 0.9, 0.18],
            scale: [0.75, 1.35, 0.85],
          }}
          transition={{ duration: 4.8 + (particle.id % 6), delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.035]"
        animate={{ rotate: 360, scale: [1, 1.06, 1] }}
        transition={{ rotate: { duration: 34, repeat: Infinity, ease: 'linear' }, scale: { duration: 9, repeat: Infinity, ease: 'easeInOut' } }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,7,.14)_54%,rgba(5,8,7,.72)_100%)]" />
    </div>
  );
}
