import { useEffect, useState } from 'react';
import { AmbientBackground } from './components/AmbientBackground';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { EducationSection } from './components/sections/EducationSection';
import { AchievementsSection } from './components/sections/AchievementsSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
import { Sun, Moon, ArrowUp } from 'lucide-react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  // Loading screen screen duration
  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  // Initialize Lenis smooth scroll and sync with GSAP ScrollTrigger
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  // Theme Toggler effect
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle page scrolling constraints (lock during load)
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isLoading]);

  // Scroll details tracking (progress bar, top floating indicator)
  useEffect(() => {
    const handleScroll = () => {
      // Progress bar percentage
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(window.scrollY / totalScroll);
      }

      // Show back to top button
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      // Hero scroll spy fallback
      if (window.scrollY < 180) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll Spy Observer to track active sections
  useEffect(() => {
    const sections = ['skills', 'projects', 'education', 'certifications', 'about', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px', // Trigger when section fits middle screen viewport
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <CustomCursor />
      <AmbientBackground />
      <LoadingScreen isLoading={isLoading} />
      
      {/* Dynamic Scroll Progress Bar */}
      <div 
        className="fixed left-0 top-0 z-50 h-1 bg-gradient-to-r from-mint to-acid transition-all duration-75 origin-left w-full"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      {/* Floating Theme Toggle Switch */}
      <button
        onClick={toggleTheme}
        className="fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-graphite/60 text-steel shadow-glow backdrop-blur-xl transition-all duration-300 hover:border-mint/20 hover:text-mint"
        aria-label="Toggle Light/Dark Theme Mode"
      >
        {theme === 'dark' ? <Sun className="h-4.5 w-4.5 text-mint" /> : <Moon className="h-4.5 w-4.5 text-mint" />}
      </button>

      {/* Main Sequential Scroll Containers */}
      <div className="relative z-10 w-full overflow-y-auto">
        <Hero />

        {/* Section Wrapper grids */}
        <div id="skills" className="relative py-16 md:py-24 border-b border-white/5 scroll-mt-12 md:scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <SkillsSection />
          </div>
        </div>

        <div id="projects" className="relative py-16 md:py-24 border-b border-white/5 scroll-mt-12 md:scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <ProjectsSection />
          </div>
        </div>

        <div id="education" className="relative py-16 md:py-24 border-b border-white/5 scroll-mt-12 md:scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <EducationSection />
          </div>
        </div>

        <div id="certifications" className="relative py-16 md:py-24 border-b border-white/5 scroll-mt-12 md:scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <AchievementsSection />
          </div>
        </div>

        <div id="about" className="relative py-16 md:py-24 border-b border-white/5 scroll-mt-12 md:scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <AboutSection />
          </div>
        </div>

        <div id="contact" className="relative py-16 md:py-24 scroll-mt-12 md:scroll-mt-16">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <ContactSection />
          </div>
        </div>

        <Footer />
      </div>

      {/* Floating Scroll back to top button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-24 right-4 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-graphite/60 text-steel shadow-glow backdrop-blur-xl transition hover:border-mint/20 hover:text-mint md:bottom-28 md:right-6"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="h-4.5 w-4.5" />
        </button>
      )}

      {/* Active Fixed Top Navigation Navbar */}
      <Navbar activeSection={activeSection} />
    </>
  );
}
