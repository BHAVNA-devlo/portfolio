import React, { useEffect, useRef } from 'react';
import { profile } from '../../data/profile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal on scroll
      gsap.fromTo(
        '.about-reveal-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-header-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Paragraphs staggered fade-in
      gsap.fromTo(
        '.about-reveal-p',
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.about-paragraphs-trigger',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Floating badges subtle hover/float animation
      gsap.fromTo(
        '.about-float-badge',
        { y: 0 },
        {
          y: -6,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 3,
          stagger: {
            each: 0.4,
            from: 'random',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8">
      {/* Section Eyebrow Header (Number Blue, Title Ivory) */}
      <div className="mb-12 text-left select-none">
        <span className="font-display text-4xl font-extrabold text-mint block mb-1">06</span>
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-fog">
          ABOUT ME
        </h2>
        <div className="h-px w-full bg-white/5 mt-4" />
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center text-left">
        {/* Left Column: Bold Headline & Detailed Copy */}
        <div className="space-y-8">
          <div className="about-header-trigger overflow-hidden">
            <h3 className="about-reveal-header font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-fog uppercase sm:text-4xl md:text-5xl">
              I don't just write code. <span className="text-mint">I build robust architectures and intelligent systems.</span>
            </h3>
          </div>

          <div className="about-paragraphs-trigger space-y-6 text-sm leading-relaxed text-steel max-w-xl">
            <p className="about-reveal-p">
              I am a <span className="text-mint font-semibold">Computer Science</span> student at <span className="text-mint font-semibold">KIET Group of Institutions</span> who believes that the best way to learn is by doing. Rather than just studying theory, I spend my time actively developing my skills by building real, functional projects.
            </p>
            
            <p className="about-reveal-p">
              I enjoy taking an idea from concept to reality—designing clean interfaces, developing robust functionality, and adding thoughtful interactions to make the final product feel polished and professional. It's the micro-interactions, like a smooth <span className="text-mint font-semibold">GSAP</span> reveal or a responsive UI shift, that transform a basic site into an experience.
            </p>

            <p className="about-reveal-p">
              My technical journey is driven by curiosity and problem-solving. I am continuously exploring modern backend patterns in <span className="text-mint font-semibold">Java</span> and <span className="text-mint font-semibold">Spring Boot</span>, <span className="text-mint font-semibold">Machine Learning</span> foundations, and <span className="text-mint font-semibold">React</span> full-stack integrations to develop intelligent systems.
            </p>
          </div>
        </div>

        {/* Right Column: Architectural Graphic Card & Floating Badges */}
        <div className="relative flex justify-center items-center py-8">
          <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
            {/* Floating Badges (Outlined Blue/Gray) */}
            <div className="about-float-badge absolute top-[10%] -left-8 z-20 border border-mint/20 bg-void/90 px-3 py-1.5 text-[9px] uppercase tracking-widest text-mint font-bold shadow-md rounded-md select-none">
              CSE STUDENT
            </div>

            <div className="about-float-badge absolute -top-4 right-4 sm:-right-4 z-20 border border-white/10 bg-void/90 px-3 py-1.5 text-[9px] uppercase tracking-widest text-steel font-semibold shadow-md rounded-md select-none">
              2027 GRADUATE
            </div>

            <div className="about-float-badge absolute top-[40%] -right-8 z-20 border border-mint/20 bg-void/90 px-3 py-1.5 text-[9px] uppercase tracking-widest text-mint font-bold shadow-md rounded-md select-none">
              BACKEND DEV
            </div>

            <div className="about-float-badge absolute bottom-[25%] -left-10 z-20 border border-mint/20 bg-void/90 px-3 py-1.5 text-[9px] uppercase tracking-widest text-mint font-semibold shadow-md rounded-md select-none">
              JAVA & SPRING
            </div>

            <div className="about-float-badge absolute bottom-[8%] -right-4 z-20 border border-white/10 bg-void/90 px-3 py-1.5 text-[9px] uppercase tracking-widest text-steel font-semibold shadow-md rounded-md select-none">
              AI & ML
            </div>

            {/* Styled Portrait Container stand-in (Abstract System Graphic) */}
            <div className="relative aspect-[3/4] w-full bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-center items-center p-6 shadow-2xl">
              {/* Radial gradient backing */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.04),transparent_70%)]" />
              
              {/* System Architecture Node Graphic */}
              <svg viewBox="0 0 100 100" fill="none" className="w-36 h-36 text-mint/20 stroke-current stroke-[0.75]">
                {/* Rotating Rings */}
                <circle cx="50" cy="50" r="32" className="animate-[spin_60s_linear_infinite]" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="18" className="animate-[spin_30s_linear_infinite_reverse]" strokeDasharray="2 2" />
                
                {/* Grid Overlay */}
                <line x1="50" y1="5" x2="50" y2="95" opacity="0.25" strokeDasharray="1 1" />
                <line x1="5" y1="50" x2="95" y2="50" opacity="0.25" strokeDasharray="1 1" />
                <line x1="18.2" y1="18.2" x2="81.8" y2="81.8" opacity="0.15" />
                
                {/* Central System Hub Node */}
                <circle cx="50" cy="50" r="5" fill="currentColor" className="text-mint" />
                
                {/* Peripheral Nodes */}
                <circle cx="50" cy="18" r="3" fill="currentColor" className="text-acid" />
                <circle cx="50" cy="82" r="3" fill="currentColor" className="text-acid" />
                <circle cx="18" cy="50" r="3" fill="currentColor" className="text-mint/60" />
                <circle cx="82" cy="50" r="3" fill="currentColor" className="text-mint/60" />
                
                {/* Pulsing connections */}
                <circle cx="50" cy="18" r="6" stroke="currentColor" className="text-acid/30 animate-ping" />
                <circle cx="82" cy="50" r="6" stroke="currentColor" className="text-mint/30 animate-ping" />
              </svg>
              
              {/* Micro Console overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-void/80 border border-white/5 rounded-lg p-3 font-mono text-[9px] text-steel">
                <div className="text-mint flex justify-between">
                  <span>sys.profile</span>
                  <span>bhavna_singh</span>
                </div>
                <div className="mt-1 font-sans text-[10px] text-fog/85">
                  KIET CSE (AI/ML)
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
