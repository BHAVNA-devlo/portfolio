import { motion } from 'framer-motion';
import { Braces, Cpu, Gauge, Layers3 } from 'lucide-react';
import { skills } from '../../data/skills';
import { fadeUp, stagger } from '../../utils/motion';
import { SectionShell } from '../SectionShell';

const skillNotes = [
  {
    icon: Braces,
    title: 'Frontend Logic',
    text: 'React, JavaScript, and component thinking for clean, scalable interfaces.',
  },
  {
    icon: Layers3,
    title: 'Interface Systems',
    text: 'Responsive layouts, Tailwind styling, and reusable UI patterns.',
  },
  {
    icon: Gauge,
    title: 'Experience Quality',
    text: 'Motion, performance, and polish that make products feel smooth.',
  },
];

export function SkillsSection() {
  return (
    <SectionShell eyebrow="Skill system" title="The tools and craft behind the interface.">
      <motion.div variants={stagger} className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        <motion.div
          variants={fadeUp}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-insetGlass backdrop-blur-xl"
        >
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-mint/10 blur-3xl" />
          <div className="absolute -bottom-14 left-8 h-40 w-40 rounded-full bg-acid/10 blur-3xl" />
          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-mint/20 bg-mint/[0.07] text-mint shadow-glow">
              <Cpu className="h-6 w-6" aria-hidden="true" />
            </div>
            <p className="mt-6 text-lg leading-8 text-fog/90">
              My skill set is centered on building modern frontend experiences: structured React components, expressive styling, smooth animation, and responsive product interfaces.
            </p>
            <p className="mt-4 text-sm leading-7 text-steel">
              I keep learning through real builds, sharpening both the visual layer and the engineering habits behind it.
            </p>
          </div>
        </motion.div>

        <motion.div variants={stagger} className="grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <motion.article
              key={skill.name}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 shadow-insetGlass backdrop-blur-md transition duration-300 hover:border-mint/25 hover:bg-mint/[0.045]"
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-fog">{skill.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.22em] text-steel">{skill.type}</p>
                </div>
                <span className="rounded-full border border-acid/20 bg-acid/[0.07] px-3 py-1 text-xs font-semibold text-acid">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-mint via-[#f0a85b] to-acid"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>

      <motion.div variants={stagger} className="mt-6 grid gap-3 md:grid-cols-3">
        {skillNotes.map(({ icon: Icon, title, text }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-insetGlass backdrop-blur-md"
          >
            <Icon className="mb-4 h-5 w-5 text-mint" aria-hidden="true" />
            <h3 className="font-display text-base font-semibold text-fog">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-steel">{text}</p>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
