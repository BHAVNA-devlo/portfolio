import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

export function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      // Small offset for fixed navbar
      const yOffset = -80; 
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/5 bg-void/85 backdrop-blur-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-10">
        {/* Brand Name */}
        <a
          href="#"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-display text-xl font-extrabold tracking-wider hover:opacity-85 transition-opacity"
        >
          <span className="text-fog">BHAVNA</span> <span className="text-mint">SINGH</span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id || (item.id === 'certifications' && activeSection === 'certifications');
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group relative text-xs uppercase tracking-[0.2em] transition-colors duration-300 hover:text-mint py-1 ${
                  isActive ? 'text-mint font-bold' : 'text-steel'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-mint transition-all duration-300 ${
                  isActive ? 'w-full shadow-[0_0_8px_rgba(198,255,0,0.5)]' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            );
          })}
        </nav>

        {/* Resume Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="/bhaviUpdateResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-mint/30 bg-transparent px-5 py-2 text-xs uppercase tracking-widest text-mint transition-all duration-300 hover:border-mint hover:bg-mint/5"
          >
            Resume
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block text-fog focus:outline-none md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-void px-8 transition-all duration-500 md:hidden ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`font-display text-3xl font-light tracking-wide text-fog hover:text-mint transition-colors ${
                activeSection === item.id ? 'text-mint' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8">
            <a
              href="/bhaviUpdateResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-block border border-mint/30 bg-transparent px-8 py-3 text-sm uppercase tracking-widest text-mint hover:bg-mint/5"
            >
              Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
