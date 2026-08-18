import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getTechIcon } from './TechIcons';

export function SkillCard({ skill }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = getTechIcon(skill.name);

  // Soft micro-floating animation for the technology icon
  const iconVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.035 }}
      whileTap={{ scale: 0.98 }}
      className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-white/[0.025] px-4 py-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.15)] shadow-insetGlass backdrop-blur-md transition-all duration-300 hover:border-mint/20 hover:bg-mint/[0.03] dark:hover:border-mint/20 dark:hover:bg-mint/[0.035]"
      aria-label={`${skill.name} skill card`}
    >
      {/* Background glow matching the theme */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--color-mint)/0.08),transparent_50%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Floating Technology Icon */}
      <motion.div
        variants={iconVariants}
        initial="initial"
        animate="animate"
        className="mb-3.5 text-steel transition-colors duration-300 group-hover:text-mint"
      >
        <IconComponent className="h-9 w-9" />
      </motion.div>

      {/* Technology Name */}
      <h4 className="font-display text-sm font-semibold tracking-wide text-fog transition-colors duration-300 group-hover:text-fog">
        {skill.name}
      </h4>

      {/* Experience Level Badge on Hover */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 5 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-2.5 rounded-full border border-mint/20 bg-mint/[0.08] px-2 py-0.5 text-[0.62rem] uppercase tracking-[0.16em] text-mint font-medium"
      >
        {skill.level}
      </motion.div>
    </motion.div>
  );
}
