import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { navItems } from '../data/navigation';
import { AboutSection } from './sections/AboutSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { ContactSection } from './sections/ContactSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';

const sections = {
  about: AboutSection,
  education: EducationSection,
  projects: ProjectsSection,
  certifications: CertificationsSection,
  contact: ContactSection,
};

export function PopupPanel({ activePanel, onClose }) {
  const ActiveSection = activePanel ? sections[activePanel] : null;
  const activeItem = navItems.find((item) => item.id === activePanel);
  const ActiveIcon = activeItem?.icon;

  return (
    <AnimatePresence>
      {ActiveSection && (
        <motion.div className="fixed inset-0 z-40 px-4 pb-28 pt-4 md:px-8 md:pb-32 md:pt-8">
          <motion.button
            className="absolute inset-0 bg-void/55 backdrop-blur-md"
            onClick={onClose}
            aria-label="Close panel overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative mx-auto h-full max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-graphite/72 shadow-[0_30px_100px_rgba(0,0,0,.55)] shadow-insetGlass backdrop-blur-2xl"
            initial={{ opacity: 0, y: 70, scale: 0.94, filter: 'blur(22px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 55, scale: 0.96, filter: 'blur(16px)' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(117,244,200,.12),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(200,255,102,.08),transparent_24%)]" />
            <div className="relative flex h-full flex-col">
              <header className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-8">
                <div className="flex items-center gap-3">
                  {ActiveIcon && <ActiveIcon className="text-mint" size={20} />}
                  <span className="font-display text-sm uppercase tracking-[0.28em] text-fog">{activeItem?.label}</span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.035] text-steel transition hover:border-mint/35 hover:text-fog"
                  aria-label="Close panel"
                >
                  <X size={18} />
                </button>
              </header>
              <div className="relative flex-1 overflow-y-auto px-5 py-8 md:px-8 lg:px-12">
                <ActiveSection />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
