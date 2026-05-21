import { motion } from 'framer-motion';
import { Code2, Layers3, Rocket, Sparkles } from 'lucide-react';
import { profile } from '../../data/profile';
import { fadeUp, stagger } from '../../utils/motion';
import { SectionShell } from '../SectionShell';

const fullName = profile.name.includes(' ') ? profile.name : `${profile.name} Singh`;
const photoSrc = profile.photo || profile.image;

const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'Responsive UI', 'Web Apps'];

const highlights = [
  {
    icon: Code2,
    title: 'Frontend Craft',
    text: 'Clean component systems, sharp layouts, and interfaces that feel effortless to use.',
  },
  {
    icon: Layers3,
    title: 'Visual Direction',
    text: 'Futuristic UI, soft motion, and atmospheric details without losing clarity.',
  },
  {
    icon: Rocket,
    title: 'Builder Mindset',
    text: 'Freelance-ready, constantly learning, and focused on shipping polished web experiences.',
  },
];

const stats = [
  { value: '12+', label: 'Projects Built' },
  { value: '18+', label: 'Technologies Learned' },
  { value: '100%', label: 'Freelance Ready' },
];

export function AboutSection() {
  return (
    <SectionShell eyebrow="Presence layer" title="A personal interface for code, motion, and modern web craft.">
      <motion.div variants={stagger} className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <motion.div
          variants={fadeUp}
          className="relative mx-auto w-full max-w-[26rem] lg:mx-0 lg:max-w-none"
        >
          <motion.div
            className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-carbon shadow-[0_28px_90px_rgba(0,0,0,0.42)]"
            animate={{ y: [-8, 10, -8] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ scale: 1.018, rotate: -0.6 }}
          >
            <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(135deg,rgba(243,201,105,.42),rgba(255,255,255,.08)_36%,rgba(255,107,61,.24))] opacity-70" />
            <div className="absolute inset-[1px] overflow-hidden rounded-[1.95rem] bg-void">
              {photoSrc ? (
                <img
                  src={photoSrc}
                  alt={`${fullName} professional portrait`}
                  className="absolute inset-0 h-full w-full object-cover object-center saturate-[.92] transition duration-700 group-hover:scale-105"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(243,201,105,.24),transparent_26%),radial-gradient(circle_at_22%_72%,rgba(255,107,61,.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(5,5,6,.2)_42%,rgba(5,5,6,.96))]" />
                  <div className="absolute left-1/2 top-10 h-40 w-40 -translate-x-1/2 rounded-full bg-gradient-to-br from-fog via-[#b8a992] to-[#5f5548] shadow-[0_0_64px_rgba(243,201,105,.24)]" />
                  <div className="absolute left-1/2 top-[11rem] h-[13rem] w-[14rem] -translate-x-1/2 rounded-t-[7rem] bg-gradient-to-b from-[#332b23] via-[#191715] to-[#0d0c0b] shadow-[0_-18px_70px_rgba(255,107,61,.14)]" />
                  <div className="absolute left-1/2 top-[5.9rem] h-10 w-28 -translate-x-1/2 rounded-full border border-white/10 bg-void/35 backdrop-blur-md">
                    <span className="absolute left-6 top-3.5 h-2 w-4 rounded-full bg-mint shadow-glow" />
                    <span className="absolute right-6 top-3.5 h-2 w-4 rounded-full bg-acid shadow-acid" />
                  </div>
                </>
              )}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(5,5,6,.52)_72%,rgba(5,5,6,.95))]" />
              <motion.div
                className="absolute left-7 top-8 h-px w-28 bg-gradient-to-r from-transparent via-mint to-transparent"
                animate={{ x: [0, 190, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-28 right-5 h-px w-24 bg-gradient-to-r from-transparent via-acid to-transparent"
                animate={{ x: [0, -170, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 5.1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void via-void/82 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <p className="font-display text-2xl font-semibold text-fog">{fullName}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.32em] text-mint/80">Frontend presence</p>
                </div>
                <Sparkles className="h-5 w-5 text-acid" aria-hidden="true" />
              </div>
            </div>
          </motion.div>
          <div className="absolute -left-8 top-12 h-36 w-36 rounded-full bg-mint/12 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-44 w-44 rounded-full bg-acid/12 blur-3xl" />
        </motion.div>

        <motion.div variants={stagger} className="space-y-5">
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-insetGlass backdrop-blur-xl md:p-8"
          >
            <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-16 rounded-full bg-mint/10 blur-3xl" />
            <div className="absolute bottom-0 left-10 h-24 w-36 translate-y-12 rounded-full bg-acid/10 blur-3xl" />
            <div className="relative">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/[0.06] px-3 py-1 text-xs uppercase tracking-[0.24em] text-mint/85"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-acid shadow-acid" />
                Overview
              </motion.span>
              <motion.p variants={fadeUp} className="mt-5 text-lg leading-8 text-fog/90 md:text-xl md:leading-9">
                I am {profile.name}, a frontend developer drawn to interfaces that feel calm, immersive, and intentional. I enjoy turning ideas into modern web applications where clean code, responsive structure, and cinematic motion work together.
              </motion.p>
              <motion.p variants={fadeUp} className="mt-4 leading-7 text-steel">
                My current journey is a mix of focused learning, hands-on project building, and freelance readiness. I care about futuristic UI, smooth interactions, and experiences that make people feel they are using something thoughtfully made.
              </motion.p>
              <motion.blockquote
                variants={fadeUp}
                className="mt-6 border-l border-acid/50 pl-5 font-display text-xl font-semibold leading-8 text-fog"
              >
                "Design the feeling first. Then make the code disappear."
              </motion.blockquote>
            </div>
          </motion.div>

          
</motion.div>
      </motion.div>
    </SectionShell>
  );
}
