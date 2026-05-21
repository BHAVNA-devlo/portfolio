import { motion } from 'framer-motion';

export function HeroAvatar() {
  return (
    <motion.div
      className="relative mx-auto h-72 w-72 md:h-[25rem] md:w-[25rem]"
      animate={{ y: [-10, 14, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      whileHover={{ scale: 1.035, rotate: 1.2 }}
    >
      <div className="absolute inset-0 rounded-[38%_62%_46%_54%/48%_38%_62%_52%] bg-mint/15 blur-3xl" />
      <motion.div
        className="absolute inset-5 rounded-full border border-mint/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute inset-10 rounded-full border border-acid/20"
        animate={{ rotate: -360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <div className="absolute inset-12 overflow-hidden rounded-[42%_58%_48%_52%/54%_42%_58%_46%] border border-white/10 bg-carbon shadow-glow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_28%,rgba(117,244,200,.28),transparent_24%),linear-gradient(145deg,rgba(255,255,255,.08),transparent_42%)]" />
        <div className="absolute left-1/2 top-16 h-24 w-24 -translate-x-1/2 rounded-full bg-gradient-to-br from-fog to-steel shadow-[0_0_28px_rgba(117,244,200,.22)]" />
        <div className="absolute left-1/2 top-[8.3rem] h-36 w-44 -translate-x-1/2 rounded-t-[4rem] bg-gradient-to-b from-mint/70 via-steel/80 to-graphite" />
        <div className="absolute left-1/2 top-[5.2rem] h-9 w-24 -translate-x-1/2 rounded-full border border-void/20 bg-graphite/45 backdrop-blur-md">
          <span className="absolute left-5 top-3 h-2 w-4 rounded-full bg-mint shadow-glow" />
          <span className="absolute right-5 top-3 h-2 w-4 rounded-full bg-acid shadow-acid" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-void via-void/65 to-transparent" />
        <motion.div
          className="absolute left-8 top-8 h-1 w-20 rounded-full bg-mint/60"
          animate={{ x: [0, 84, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-24 right-5 h-1 w-16 rounded-full bg-acid/70"
          animate={{ x: [0, -92, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="absolute -right-1 top-20 rounded-2xl border border-white/10 bg-glass px-4 py-3 text-xs text-fog shadow-insetGlass backdrop-blur-xl">
        <span className="block text-mint">UI signal</span>
        <span className="text-steel">motion-ready</span>
      </div>
      <div className="absolute bottom-12 left-0 rounded-2xl border border-white/10 bg-glass px-4 py-3 text-xs text-fog shadow-insetGlass backdrop-blur-xl">
        <span className="block text-acid">React core</span>
        <span className="text-steel">clean systems</span>
      </div>
    </motion.div>
  );
}
