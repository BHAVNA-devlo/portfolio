import React, { useEffect, useRef } from 'react';
import { education } from '../../data/education';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function EducationSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal each block stagger style on scroll
      gsap.fromTo(
        '.edu-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.edu-list',
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
      {/* Section Eyebrow Header (Index Blue, Title Ivory) */}
      <div className="mb-12 text-left select-none">
        <span className="font-display text-4xl font-extrabold text-mint block mb-1">04</span>
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-fog">
          EDUCATION
        </h2>
        <div className="h-px w-full bg-white/5 mt-4" />
      </div>

      {/* Typographic Education List */}
      <div className="edu-list divide-y divide-white/5 text-left">
        {education.map((item, index) => (
          <div
            key={index}
            className="edu-item py-8 first:pt-0 last:pb-0 grid gap-6 md:grid-cols-[200px_1fr] items-baseline"
          >
            {/* Period & Score */}
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.2em] text-mint block font-medium">
                {item.period}
              </span>
              <span className="text-[11px] uppercase tracking-[0.1em] text-steel block">
                {item.score}
              </span>
            </div>

            {/* Institution & Details */}
            <div className="space-y-4 max-w-3xl">
              <div>
                <h3 className="font-display text-xl font-bold text-fog uppercase tracking-wide sm:text-2xl">
                  {item.title}
                </h3>
                <span className="text-xs uppercase tracking-[0.2em] text-steel font-bold mt-1 block">
                  {item.institution}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-steel">
                {item.detail}
              </p>

              {/* Coursework Pills */}
              {item.coursework && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="border border-white/5 bg-white/[0.01] px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-steel"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
