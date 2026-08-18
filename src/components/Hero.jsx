import React, { useEffect, useRef } from 'react';
import { profile } from '../data/profile';
import gsap from 'gsap';

export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.6 } });

      tl.fromTo(
        '.hero-title-line',
        { y: '100%', opacity: 0 },
        { y: '0%', opacity: 1, stagger: 0.2, delay: 0.4 }
      );

      tl.fromTo(
        '.hero-role',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 },
        '-=1.0'
      );

      tl.fromTo(
        '.hero-tagline',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        '-=1.2'
      );

      tl.fromTo(
        '.scroll-indicator',
        { opacity: 0, y: -10 },
        { opacity: 0.6, y: 0, duration: 1 },
        '-=0.8'
      );

      gsap.to('.scroll-arrow', {
        y: 6,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        duration: 1.2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col justify-between px-6 pb-12 pt-36 md:px-12 md:pb-16 md:pt-44 select-none"
    >
      {/* Editorial Decorative Top Label */}
      <div className="flex justify-between items-center border-b border-white/5 pb-2 text-[10px] uppercase tracking-[0.25em] text-steel">
        <span>Portfolio Redesign / {new Date().getFullYear()}</span>
        <span>Scroll to Explore</span>
      </div>

      {/* Main Typography Block */}
      <div className="my-auto flex flex-col justify-center text-left max-w-5xl">
        {/* Name Row 1: BHAVNA (Warm Ivory) */}
        <div className="overflow-hidden">
          <h1 className="hero-title-line font-display text-[14vw] font-black leading-[0.8] tracking-tighter text-fog uppercase sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw]">
            {profile.name.split(' ')[0]}
          </h1>
        </div>
        
        {/* Name Row 2: SINGH (Cobalt/Sophisticated Blue) */}
        <div className="overflow-hidden mb-6 sm:mb-8">
          <h1 className="hero-title-line font-display text-[14vw] font-light leading-[0.8] tracking-tighter text-mint uppercase sm:text-[11vw] md:text-[9vw] lg:text-[8.5vw]">
            {profile.name.split(' ')[1] || 'SINGH'}
          </h1>
        </div>

        {/* Roles */}
        <div className="flex flex-col gap-1.5 md:flex-row md:gap-8 mb-8 sm:mb-12">
          <div className="hero-role text-xs uppercase tracking-[0.25em] font-bold text-steel sm:text-sm">
            BACKEND DEVELOPER
          </div>
          <div className="hero-role text-xs uppercase tracking-[0.25em] font-bold text-steel sm:text-sm">
            <span className="text-mint">AI / ML</span> ENTHUSIAST
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl">
          <p className="hero-tagline font-display text-2xl font-bold leading-[1.1] text-fog tracking-tight uppercase opacity-0 sm:text-3xl lg:text-4xl">
            BUILDING <span className="text-mint font-black">DIGITAL EXPERIENCES</span> WITH CODE.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator flex flex-col items-center text-center opacity-0">
        <span className="text-[9px] uppercase tracking-[0.3em] text-steel">
          Scroll to explore
        </span>
        <span className="scroll-arrow mt-2 text-sm text-mint">↓</span>
      </div>
    </section>
  );
}
