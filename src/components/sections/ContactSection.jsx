import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import { contactLinks } from '../../data/profile';
import { fadeUp, stagger } from '../../utils/motion';
import { SectionShell } from '../SectionShell';

const fields = [
  { id: 'name', label: 'Name', type: 'text' },
  { id: 'email', label: 'Email', type: 'email' },
  { id: 'message', label: 'Message', type: 'textarea' },
];

export function ContactSection() {
  return (
    <SectionShell eyebrow="Open channel" title="A quiet, direct place to start the next build.">
      <motion.div variants={stagger} className="grid gap-5 lg:grid-cols-[1fr_.82fr]">
        <motion.form variants={fadeUp} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-insetGlass">
          <div className="grid gap-4">
            {fields.map((field) => (
              <label key={field.id} className="group block">
                <span className="mb-2 block text-xs uppercase tracking-[0.26em] text-steel group-focus-within:text-mint">
                  {field.label}
                </span>
                {field.type === 'textarea' ? (
                  <textarea
                    rows="5"
                    className="w-full resize-none rounded-2xl border border-white/10 bg-void/40 px-4 py-3 text-fog outline-none transition placeholder:text-steel/50 focus:border-mint/40 focus:shadow-glow"
                    placeholder="Tell me about the experience you want to create..."
                  />
                ) : (
                  <input
                    type={field.type}
                    className="w-full rounded-2xl border border-white/10 bg-void/40 px-4 py-3 text-fog outline-none transition placeholder:text-steel/50 focus:border-mint/40 focus:shadow-glow"
                    placeholder={field.label}
                  />
                )}
              </label>
            ))}
          </div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-mint/25 bg-mint/[0.12] px-5 py-4 font-display text-sm uppercase tracking-[0.24em] text-fog shadow-glow transition hover:bg-mint/[0.18]"
          >
            <Send size={17} /> Send Signal
          </motion.button>
        </motion.form>
        <motion.div variants={stagger} className="grid gap-3">
          {contactLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              variants={fadeUp}
              className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-5 shadow-insetGlass transition hover:border-mint/25 hover:bg-mint/[0.045]"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-mint/75">{link.label}</p>
                <p className="mt-2 font-display text-xl text-fog">{link.value}</p>
              </div>
              <ArrowUpRight className="text-steel transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-fog" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
