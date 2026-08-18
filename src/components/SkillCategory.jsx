import React from 'react';
import { motion } from 'framer-motion';
import { SkillCard } from './SkillCard';
import { fadeUp, stagger } from '../utils/motion';

export function SkillCategory({ category }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-3xl border border-white/5 bg-white/[0.015] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] shadow-insetGlass backdrop-blur-md md:p-6"
    >
      {/* Category Heading */}
      <h3 className="mb-5 font-display text-base font-semibold uppercase tracking-[0.22em] text-mint/80 border-b border-white/5 pb-2">
        {category.title}
      </h3>

      {/* Grid of Skill Cards */}
      <motion.div
        variants={stagger}
        className="grid grid-cols-1 gap-3.5 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        {category.skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}
