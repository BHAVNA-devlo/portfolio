import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, CheckCircle2 } from 'lucide-react';
import { fadeUp } from '../utils/motion';

export function ProjectCard({ project, featured = false }) {
  // Determine accent classes based on color keys
  const isAcid = project.accent === 'acid';
  const accentColor = isAcid ? 'text-acid border-acid/20 bg-acid/10' : 'text-mint border-mint/20 bg-mint/10';
  const glowShadow = isAcid ? 'shadow-acid' : 'shadow-glow';

  // Render a specific CSS mockup based on the project title
  const renderCSSMockup = () => {
    const titleLower = project.title.toLowerCase();
    
    if (titleLower.includes('sentiment')) {
      // Sentimental Analysis: Neural Net Connectors & Sentiment Bubbles
      return (
        <div className="relative h-full w-full overflow-hidden bg-void flex items-center justify-center">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(var(--color-mint)/0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-mint)/0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
          {/* Neural Node Grid */}
          <div className="relative flex gap-6 z-10">
            <div className="flex flex-col gap-4">
              <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-glow" />
              <span className="h-2.5 w-2.5 rounded-full bg-steel/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-glow" />
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <motion.span
                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="h-3 w-3 rounded-full bg-acid shadow-acid"
              />
              <span className="h-3 w-3 rounded-full bg-mint shadow-glow" />
            </div>
            <div className="flex flex-col gap-4">
              <span className="h-2.5 w-2.5 rounded-full bg-steel/40" />
              <span className="h-2.5 w-2.5 rounded-full bg-mint shadow-glow" />
            </div>
          </div>
          {/* Sentiment floating emojis */}
          <motion.div
            animate={{ y: [-15, 10, -15], x: [-5, 5, -5] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute left-6 top-8 text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
          >
            Positive 😊
          </motion.div>
          <motion.div
            animate={{ y: [12, -10, 12], x: [8, -8, 8] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute right-6 top-16 text-xs font-semibold px-2 py-0.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400"
          >
            Negative 😡
          </motion.div>
        </div>
      );
    } else if (titleLower.includes('volunteer')) {
      // Volunteer Registration: Bar Charts & Progress Blocks
      return (
        <div className="relative h-full w-full overflow-hidden bg-void p-5 flex flex-col justify-between">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(var(--color-acid)/0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--color-acid)/0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />
          
          <div className="flex justify-between items-center z-10 border-b border-white/5 pb-2">
            <span className="text-[0.62rem] uppercase tracking-wider text-steel">Active Registrations</span>
            <span className="text-[0.62rem] text-acid font-bold">142 Total</span>
          </div>
          
          {/* Micro Bar Chart */}
          <div className="flex items-end gap-3.5 h-20 z-10 px-2 justify-center">
            <motion.div animate={{ height: '30%' }} className="w-4.5 rounded-t-md bg-white/10" />
            <motion.div animate={{ height: '75%' }} className="w-4.5 rounded-t-md bg-acid/60 shadow-acid" />
            <motion.div animate={{ height: '50%' }} className="w-4.5 rounded-t-md bg-mint/55 shadow-glow" />
            <motion.div animate={{ height: '90%' }} className="w-4.5 rounded-t-md bg-acid" />
          </div>
        </div>
      );
    } else {
      // Task Tracker Dashboard: Columns & Kanban Tasks
      return (
        <div className="relative h-full w-full overflow-hidden bg-void p-4 flex gap-3.5 justify-center">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgb(var(--color-fog))_1px,transparent_1.6px)] bg-[size:12px_12px]" />
          
          {/* Kanban Columns */}
          <div className="w-24 rounded-lg border border-white/5 bg-white/[0.015] p-2 flex flex-col gap-1.5 z-10">
            <span className="text-[0.58rem] uppercase font-bold text-mint tracking-wider border-b border-white/5 pb-0.5">To Do</span>
            <div className="rounded border border-white/5 bg-white/[0.035] p-1.5 text-[0.52rem] text-steel">Write unit tests</div>
            <div className="rounded border border-white/5 bg-white/[0.035] p-1.5 text-[0.52rem] text-steel">Design schemas</div>
          </div>
          
          <div className="w-24 rounded-lg border border-white/5 bg-white/[0.015] p-2 flex flex-col gap-1.5 z-10">
            <span className="text-[0.58rem] uppercase font-bold text-acid tracking-wider border-b border-white/5 pb-0.5">Doing</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="rounded border border-mint/20 bg-mint/[0.08] p-1.5 text-[0.52rem] text-fog"
            >
              Build API routes
            </motion.div>
          </div>
        </div>
      );
    }
  };

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.02] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] shadow-insetGlass backdrop-blur-md transition-all duration-300 hover:border-mint/20 ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-[1.05fr_.95fr] md:gap-6' : ''
      }`}
    >
      {/* Absolute top glowing line */}
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-mint/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      
      {/* Project Mockup Panel */}
      <div className="relative min-h-56 overflow-hidden rounded-2xl border border-white/5 bg-carbon flex flex-col justify-center">
        {renderCSSMockup()}
      </div>

      {/* Project Text Information */}
      <div className="relative flex flex-col justify-between pt-5 md:pt-0">
        <div>
          <span className="text-[0.62rem] uppercase tracking-[0.24em] text-mint/80 font-bold">{project.category}</span>
          <h3 className="mt-2 font-display text-2xl font-bold text-fog group-hover:text-mint transition-colors duration-300">
            {project.title}
          </h3>
          <p className="mt-3.5 text-sm leading-6 text-fog/75">{project.description}</p>
          
          {/* Key Features Bullet points */}
          <div className="mt-4 space-y-2">
            {project.features && project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-steel">
                <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${accentColor.split(' ')[0]}`} />
                <span className="leading-5">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Tech Stack badging */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/5 bg-white/[0.025] px-2.5 py-0.5 text-[0.65rem] font-medium text-steel">
                {item}
              </span>
            ))}
          </div>

          {/* Action Call buttons */}
          <div className="mt-5.5 flex gap-3">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-mint/20 bg-mint/10 px-4 py-2 text-xs font-semibold text-fog hover:bg-mint/[0.18] transition-colors"
            >
              <ExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-4 py-2 text-xs font-semibold text-steel hover:border-mint/20 hover:text-fog transition-all"
            >
              <Code2 size={14} /> Code Base
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
