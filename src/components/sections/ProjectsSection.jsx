import React, { useEffect, useRef } from 'react';
import { projects } from '../../data/projects';
import { ExternalLink, Code2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ProjectRow({ project, index }) {
  const rowRef = useRef(null);
  const titleRef = useRef(null);
  const mockupRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle horizontal slide for title based on scroll position
      gsap.fromTo(
        titleRef.current,
        { x: index % 2 === 0 ? -30 : 30 },
        {
          x: index % 2 === 0 ? 30 : -30,
          ease: 'none',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.2,
          },
        }
      );

      // Subtle parallax scale/move for the mockup container
      gsap.fromTo(
        mockupRef.current,
        { y: 20, scale: 0.98 },
        {
          y: -20,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        }
      );

      // Fade in row elements
      gsap.fromTo(
        rowRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: rowRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, rowRef);

    return () => ctx.revert();
  }, [index]);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={rowRef}
      className="group grid gap-10 py-16 first:pt-0 last:pb-0 border-b border-white/5 last:border-b-0 lg:grid-cols-12 lg:gap-16 items-center"
    >
      {/* Visual / Image Column */}
      <div
        ref={mockupRef}
        className={`relative min-h-[300px] sm:min-h-[350px] overflow-hidden border border-white/5 bg-carbon rounded-lg lg:col-span-7 transition-all duration-300 group-hover:border-mint/25 ${
          isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'
        }`}
      >
        <div className="absolute left-4 top-4 z-20 flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
          <span className="h-2 w-2 rounded-full bg-white/10" />
        </div>
        <div className="h-full w-full min-h-[300px] sm:min-h-[350px] transition-transform duration-500 group-hover:scale-[1.03] overflow-hidden flex items-center justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top select-none"
          />
        </div>
      </div>

      {/* Text Details Column */}
      <div
        className={`flex flex-col text-left lg:col-span-5 ${
          isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'
        }`}
      >
        {/* Project Number (Blue) */}
        <span className="font-display text-base font-bold text-mint mb-2">
          {(index + 1).toString().padStart(2, '0')}
        </span>

        {/* Project Name (Ivory -> Blue on hover) */}
        <div className="overflow-hidden mb-4">
          <h3
            ref={titleRef}
            className="font-display text-4xl font-extrabold uppercase tracking-tight select-none sm:text-5xl lg:text-6xl text-fog group-hover:text-mint group-hover:translate-x-2 transition-all duration-300"
          >
            {project.title.split(' ')[0]}
          </h3>
        </div>

        {/* Subtitle / Category */}
        <span className="text-[10px] uppercase tracking-[0.25em] text-steel font-bold mb-4">
          {project.category}
        </span>

        {/* Description */}
        <p className="text-sm leading-relaxed text-steel mb-6">
          {project.description}
        </p>

        {/* Features Checklist */}
        <ul className="mb-6 space-y-2 text-xs text-steel">
          {project.features &&
            project.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-mint mt-1.5 shrink-0" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
        </ul>

        {/* Technologies used (Gray tags) */}
        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-white/5 bg-white/[0.01] px-3 py-1 text-[10px] uppercase tracking-wider text-steel hover:text-mint hover:border-mint/30 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex gap-6">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-fog hover:text-mint transition-colors group"
          >
            {/* Arrow shifts right */}
            <ExternalLink size={12} className="text-mint group-hover:translate-x-0.5 transition-transform" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-steel hover:text-mint transition-colors group"
          >
            <Code2 size={12} />
            Code Base
          </a>
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="py-8">
      {/* Section Eyebrow Header (Title Ivory) */}
      <div className="mb-16 text-left select-none">
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-fog">
          SELECTED WORK
        </h2>
        <div className="h-px w-full bg-white/5 mt-4" />
      </div>

      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <ProjectRow key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
