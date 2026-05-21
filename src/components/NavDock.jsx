import { motion } from 'framer-motion';
import { navItems } from '../data/navigation';
import { MagneticButton } from './MagneticButton';

export function NavDock({ activePanel, onSelect }) {
  return (
    <motion.nav
      className="fixed inset-x-3 bottom-4 z-50 mx-auto max-w-3xl rounded-[1.65rem] border border-white/10 bg-graphite/60 p-2 shadow-[0_18px_70px_rgba(0,0,0,.45)] shadow-insetGlass backdrop-blur-2xl md:bottom-6"
      initial={{ y: 90, opacity: 0, scale: 0.94 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-5 gap-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activePanel === item.id;
          return (
            <MagneticButton
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className={`group relative flex min-h-16 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl border px-2 text-center transition-colors ${
                active
                  ? 'border-mint/35 bg-mint/10 text-fog shadow-glow'
                  : 'border-white/5 bg-white/[0.025] text-steel hover:border-mint/20 hover:text-fog'
              }`}
              aria-label={item.label}
            >
              <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-mint/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon size={19} strokeWidth={1.7} />
              <span className="hidden text-[0.68rem] font-medium leading-tight sm:block">{item.label}</span>
              <span className="text-[0.62rem] font-medium leading-tight sm:hidden">{item.label.split(' ')[0]}</span>
            </MagneticButton>
          );
        })}
      </div>
    </motion.nav>
  );
}
