import { motion } from 'framer-motion';
import { education } from '../../data/education';
import { fadeUp } from '../../utils/motion';
import { SectionShell } from '../SectionShell';

export function EducationSection() {
  return (
    <SectionShell eyebrow="Learning path" title="A timeline built around engineering fundamentals and interface craft.">
      <div className="relative ml-2 space-y-5 md:ml-8">
        <motion.div
          className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-mint via-acid to-transparent"
          initial={{ scaleY: 0, originY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        />
        {education.map((item, index) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.08 }}
            className="relative grid gap-4 pl-12 md:grid-cols-[10rem_1fr]"
          >
            <span className="absolute left-[0.72rem] top-2 h-3 w-3 rounded-full border border-mint bg-void shadow-glow" />
            <div className="text-sm uppercase tracking-[0.24em] text-mint/75">{item.period}</div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-insetGlass">
              <h3 className="font-display text-2xl font-semibold text-fog">{item.title}</h3>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-steel">{item.institution}</p>
              <p className="mt-4 leading-7 text-fog/74">{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
