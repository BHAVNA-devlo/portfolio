import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { stagger } from '../../utils/motion';
import { ProjectCard } from '../ProjectCard';
import { SectionShell } from '../SectionShell';

export function ProjectsSection() {
  return (
    <SectionShell eyebrow="Selected work" title="Cinematic interfaces with product logic underneath the shine.">
      <motion.div variants={stagger} className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </motion.div>
    </SectionShell>
  );
}
