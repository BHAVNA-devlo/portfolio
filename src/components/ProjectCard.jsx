import { motion } from 'framer-motion';
import { Code2, ExternalLink } from 'lucide-react';
import { fadeUp } from '../utils/motion';

export function ProjectCard({ project, featured = false }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-insetGlass ${
        featured ? 'md:col-span-2 md:grid md:grid-cols-[1.08fr_.92fr] md:gap-6' : ''
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(117,244,200,.14),transparent_34%)] opacity-0 transition group-hover:opacity-100" />
      <div className="relative min-h-56 overflow-hidden rounded-2xl border border-white/10 bg-carbon">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(243,201,105,.13),transparent_36%),linear-gradient(45deg,transparent,rgba(255,107,61,.09))]" />
        <div className="absolute inset-x-6 top-8 h-20 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur" />
        <div className="absolute bottom-8 left-6 right-20 h-24 rounded-2xl border border-mint/20 bg-mint/[0.05]" />
        <motion.div
          className="absolute right-8 top-12 h-24 w-24 rounded-full border border-acid/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <div className="relative pt-5">
        <p className="text-xs uppercase tracking-[0.28em] text-mint/75">{project.category}</p>
        <h3 className="mt-3 font-display text-3xl font-semibold text-fog">{project.title}</h3>
        <p className="mt-4 leading-7 text-fog/72">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1 text-xs text-steel">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-3">
          <a href={project.demoUrl} className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-4 py-2 text-sm text-fog transition hover:bg-mint/[0.16]">
            <ExternalLink size={16} /> Live Demo
          </a>
          <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-steel transition hover:border-mint/25 hover:text-fog">
            <Code2 size={16} /> GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
