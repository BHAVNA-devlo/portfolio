import React, { useEffect, useRef } from 'react';
import { achievements } from '../../data/achievements';
import { Award, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function AchievementsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger fade-in for certifications cards
      gsap.fromTo(
        '.cert-grid-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.cert-grid-wrapper',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Custom descriptions to match the professional editorial card details
  const getCertDescription = (name) => {
    const nameLower = name.toLowerCase();
    if (nameLower.includes('aws') || nameLower.includes('amazon')) {
      return 'Artificial Intelligence fundamentals on AWS, including machine learning pipelines, model optimization, generative AI features, security compliance, and architectural best practices.';
    } else if (nameLower.includes('palo alto') || nameLower.includes('security')) {
      return 'Foundations of cybersecurity, threat intelligence, LLM security guidelines, network protection, and modern data security practices using enterprise-grade security concepts.';
    } else {
      return 'Core AI concepts, machine learning infrastructure workflows, deep learning principles, and deploying pre-built AI models in enterprise cloud environments.';
    }
  };

  return (
    <section ref={sectionRef} className="py-8">
      {/* Header Block: Centered layout matching the reference picture */}
      <div className="mb-14 text-center select-none space-y-3">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-mint font-semibold">
          ACHIEVEMENTS
        </span>
        <h2 className="font-display text-4xl sm:text-5xl font-black text-fog uppercase tracking-tight">
          Certifications
        </h2>
      </div>

      {/* Grid of Certifications Cards */}
      <div className="cert-grid-wrapper">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-left">
          {achievements.certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-grid-card group relative flex flex-col justify-between rounded-[2rem] border border-white/5 bg-graphite/45 p-6 sm:p-7 transition-all duration-300 hover:border-mint/20 hover:bg-graphite/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.04)]"
            >
              <div>
                {/* Circular Badge Icon at Top Left */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 text-mint border border-mint/10 mb-6 group-hover:bg-mint group-hover:text-void group-hover:border-mint transition-all duration-300">
                  <Award size={20} />
                </div>

                {/* Certificate Title (Ivory -> Blue on hover) */}
                <h3 className="font-display text-lg font-bold text-fog uppercase tracking-wide leading-snug group-hover:text-mint transition-colors duration-300">
                  {cert.name}
                </h3>

                {/* Issuer & Year in Blue */}
                <p className="text-[11px] font-semibold tracking-wider text-mint uppercase mt-2">
                  {cert.issuer} &bull; {cert.year}
                </p>

                {/* Styled Editorial Description */}
                <p className="text-xs leading-relaxed text-steel mt-4 mb-6">
                  {getCertDescription(cert.name)}
                </p>
              </div>

              {/* View Credential Action Link */}
              <div className="pt-2 border-t border-white/5">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-fog group-hover:text-mint transition-colors duration-200"
                >
                  View Credential
                  <ExternalLink size={12} className="text-mint group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
