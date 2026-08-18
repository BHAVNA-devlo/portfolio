import React, { useEffect, useRef } from 'react';
import { skillCategories } from '../../data/skills';
import { getTechIcon } from '../TechIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row by row staggered fade-in + slide-up reveal for the category blocks
      gsap.fromTo(
        '.skill-category-box',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.skills-grid',
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
        <span className="font-display text-4xl font-extrabold text-mint block mb-1">01</span>
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-fog">
          SKILLS & TECHNOLOGIES
        </h2>
        <div className="h-px w-full bg-white/5 mt-4" />
      </div>

      {/* Grid containing grouped skill category cards */}
      <div className="skills-grid grid gap-6 md:grid-cols-2 text-left">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className="skill-category-box rounded-[2rem] border border-white/5 bg-white/[0.01] p-6 sm:p-8"
          >
            {/* Category Heading with Index */}
            <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-mint/60">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="font-display text-base font-semibold uppercase tracking-[0.2em] text-mint">
                {category.title}
              </h3>
            </div>

            {/* Grid of Skill capsules */}
            <div className="grid grid-cols-1 min-[380px]:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {category.skills.map((skill) => {
                const IconComponent = getTechIcon(skill.name);
                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3.5 rounded-xl border border-white/5 bg-void/50 p-2.5 transition-all duration-300 hover:border-mint/20 hover:bg-white/[0.02] hover:translate-x-1"
                  >
                    {/* Icon turns Blue on hover */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.03] text-steel group-hover:bg-mint/10 group-hover:text-mint transition-colors">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    {/* Text transitions from gray to blue on hover */}
                    <span className="text-xs uppercase tracking-wider text-steel group-hover:text-mint transition-colors duration-300 font-bold relative">
                      {skill.name}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-mint group-hover:w-full transition-all duration-300" />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
