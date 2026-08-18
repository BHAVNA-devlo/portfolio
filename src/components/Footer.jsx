import React from 'react';
import { contactLinks, profile } from '../data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-void pb-16 pt-12 text-left">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand/Signature */}
          <div>
            <h3 className="font-display text-base font-bold tracking-wider text-fog uppercase">
              {profile.name}
            </h3>
            <p className="mt-1.5 text-xs text-steel max-w-[320px]">
              Computer Science Undergrad focusing on Java backend systems and artificial intelligence.
            </p>
          </div>

          {/* Social Text Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-wider text-steel hover:text-mint transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/5 pt-6 sm:flex-row gap-4">
          <p className="text-[10px] uppercase tracking-wider text-steel">
            &copy; {currentYear} {profile.name}. All rights reserved.
          </p>
          
          <button
            type="button"
            onClick={handleScrollToTop}
            className="text-[10px] uppercase tracking-widest text-steel hover:text-mint transition-all"
            aria-label="Scroll back to top"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
