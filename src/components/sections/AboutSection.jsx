import { motion } from 'framer-motion';
import { profile } from '../../data/profile';
import { skills } from '../../data/skills';
import { fadeUp, stagger } from '../../utils/motion';
import { SectionShell } from '../SectionShell';

export function AboutSection() {
  return (
    <SectionShell eyebrow="Signal profile" title="A frontend engineer shaping calm, precise digital systems.">
      <motion.div variants={stagger} className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
        <motion.div variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 shadow-insetGlass">
          <p className="text-lg leading-8 text-fog/88">{profile.intro}</p>
          <p className="mt-6 rounded-2xl border border-mint/15 bg-mint/[0.04] p-4 text-sm leading-6 text-mint/85">
            {profile.availability}
          </p>
        </motion.div>
        <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <motion.article key={skill.name} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-insetGlass transition hover:border-mint/25 hover:bg-mint/[0.045]">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-fog">{skill.name}</h3>
                  <p className="text-xs uppercase tracking-[0.22em] text-steel">{skill.type}</p>
                </div>
                <span className="text-sm text-mint">{skill.level}%</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-mint to-acid"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
