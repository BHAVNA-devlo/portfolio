import React, { useEffect, useRef } from 'react';
import { experience } from '../../data/experience';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ExperienceSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger reveal experience items on scroll
      gsap.fromTo(
        '.exp-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.exp-list',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-8">
      {/* Section Eyebrow Header */}
      <div className="mb-12 text-left select-none">
        <span className="font-display text-4xl font-extrabold text-mint block mb-1">02</span>
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-mint text-shadow-blue">
          EXPERIENCE
        </h2>
        <div className="h-px w-full bg-white/5 mt-4" />
      </div>

      {/* Typographic Experience List */}
      <div className="exp-list divide-y divide-white/5 text-left">
        {experience.map((item, index) => (
          <div
            key={index}
            className="exp-item py-8 first:pt-0 last:pb-0 grid gap-6 md:grid-cols-[200px_1fr] items-baseline"
          >
            {/* Period & Role Type */}
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-acid block font-medium">
                {item.period}
              </span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-steel block font-bold">
                {item.type}
              </span>
            </div>

            {/* Position Details */}
            <div className="space-y-3 max-w-3xl">
              <div>
                <h3 className="font-display text-xl font-bold text-fog uppercase tracking-wide sm:text-2xl">
                  {item.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-steel font-bold mt-1 block">
                  {item.company}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-steel">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
