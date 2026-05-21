import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { certifications } from '../../data/certifications';
import { fadeUp, stagger } from '../../utils/motion';
import { SectionShell } from '../SectionShell';

export function CertificationsSection() {
  return (
    <SectionShell eyebrow="Achievements" title="These are some of the achievements that I am proud of.">
      <motion.div variants={stagger} className="flex snap-x gap-4 overflow-x-auto pb-5">
        {certifications.map((certificate) => (
          <motion.a
            key={certificate.name}
            href={certificate.credentialUrl}
            variants={fadeUp}
            whileHover={{ y: -8, rotate: -0.4 }}
            className="group relative min-w-[18rem] snap-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-insetGlass transition hover:border-mint/30"
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-acid to-transparent opacity-70" />
            <div className="mb-12 flex items-center justify-between">
              <span className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-mint">
                {certificate.year}
              </span>
              <ExternalLink className="text-steel transition group-hover:text-fog" size={17} />
            </div>
            <h3 className="font-display text-2xl font-semibold leading-tight text-fog">{certificate.name}</h3>
            <p className="mt-4 text-sm uppercase tracking-[0.22em] text-steel">{certificate.issuer}</p>
          </motion.a>
        ))}
      </motion.div>
    </SectionShell>
  );
}
