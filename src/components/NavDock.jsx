import { motion } from 'framer-motion';
import { navItems } from '../data/navigation';
import { MagneticButton } from './MagneticButton';

export function NavDock({ activeSection }) {
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.nav
      className="fixed inset-x-3 bottom-4 z-50 mx-auto max-w-4xl rounded-[1.65rem] border border-white/5 bg-graphite/60 p-2 shadow-[0_18px_60px_rgba(0,0,0,.45)] shadow-insetGlass backdrop-blur-2xl md:bottom-6"
      initial={{ y: 90, opacity: 0, scale: 0.94 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid grid-cols-7 gap-1 md:gap-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = activeSection === item.id;
          return (
            <MagneticButton
              key={item.id}
              type="button"
              onClick={() => handleNavClick(item.id)}
              className={`group relative flex min-h-14 flex-col items-center justify-center gap-1 overflow-hidden rounded-2xl border px-1 text-center transition-all duration-300 md:min-h-16 ${
                active
                  ? 'border-mint/30 bg-mint/10 text-mint shadow-glow'
                  : 'border-transparent bg-transparent text-steel hover:border-white/5 hover:bg-white/[0.015] hover:text-fog'
              }`}
              aria-label={`Scroll to ${item.label}`}
            >
              <span className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-mint/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <Icon className="h-4 w-4 md:h-[19px] md:w-[19px]" strokeWidth={1.75} />
              <span className="hidden text-[0.62rem] font-bold leading-tight uppercase tracking-wider min-[540px]:block">{item.label.split(' ')[0]}</span>
            </MagneticButton>
          );
        })}
      </div>
    </motion.nav>
  );
}
