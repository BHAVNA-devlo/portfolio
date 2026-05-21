import { motion } from 'framer-motion';

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  delay: (index % 9) * 0.35,
  size: 2 + (index % 3),
}));

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void">
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(117,244,200,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(117,244,200,.055)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-mint/35 to-transparent"
        animate={{ opacity: [0.15, 0.65, 0.15], y: [-120, 90, -120] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-mint/60 shadow-glow"
          style={{ left: particle.left, top: particle.top, width: particle.size, height: particle.size }}
          animate={{ y: [-18, 18, -18], opacity: [0.08, 0.7, 0.08] }}
          transition={{ duration: 5 + (particle.id % 5), delay: particle.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,7,.25)_52%,rgba(5,8,7,.92)_100%)]" />
    </div>
  );
}
