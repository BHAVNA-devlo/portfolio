import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../utils/motion';

export function SectionShell({ eyebrow, title, children }) {
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="mx-auto w-full max-w-5xl"
    >
      <motion.p variants={fadeUp} className="mb-3 text-xs uppercase tracking-[0.42em] text-mint/75">
        {eyebrow}
      </motion.p>
      <motion.h2 variants={fadeUp} className="mb-8 max-w-3xl font-display text-3xl font-semibold text-fog md:text-5xl">
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}
