import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { contactLinks } from '../../data/profile';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Large typography title reveal on scroll
      gsap.fromTo(
        '.contact-reveal-line',
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 1.4,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.contact-title-container',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Fade-in form & links columns
      gsap.fromTo(
        '.contact-element',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power2.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.contact-content-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors((prev) => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('sending');

    // Simulate API mail send endpoint
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1800);
  };

  return (
    <section ref={sectionRef} className="py-8 space-y-16">
      {/* Section Eyebrow Header (Index Blue, Title Ivory) */}
      <div className="mb-12 text-left select-none">
        <span className="font-display text-4xl font-extrabold text-mint block mb-1">07</span>
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em] text-fog">
          LET'S CONNECT
        </h2>
        <div className="h-px w-full bg-white/5 mt-4" />
      </div>

      {/* Dramatic Headline in solid Blue & Ivory contrast */}
      <div className="contact-title-container text-left overflow-hidden">
        <h2 className="font-display text-[9vw] font-black leading-[0.9] tracking-tighter uppercase select-none sm:text-[7vw] md:text-[6vw]">
          <div className="overflow-hidden">
            <div className="contact-reveal-line text-mint">LET'S BUILD</div>
          </div>
          <div className="overflow-hidden">
            <div className="contact-reveal-line text-fog">SOMETHING</div>
          </div>
          <div className="overflow-hidden">
            <div className="contact-reveal-line text-mint">AMAZING.</div>
          </div>
        </h2>
      </div>

      {/* Interactive Content Grid */}
      <div className="contact-content-grid grid gap-12 lg:grid-cols-12 items-start text-left pt-6">
        {/* Left/Main Column: Minimal Form */}
        <div className="contact-element lg:col-span-7 space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-steel border-b border-white/5 pb-2">
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Name */}
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-steel font-bold">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`border-b bg-transparent py-3 text-sm text-fog outline-none transition-colors placeholder:text-steel/30 ${
                    errors.name ? 'border-rose-500' : 'border-white/10 focus:border-mint'
                  }`}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-[10px] text-rose-500 mt-1.5 font-medium">{errors.name}</span>}
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-steel font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`border-b bg-transparent py-3 text-sm text-fog outline-none transition-colors placeholder:text-steel/30 ${
                    errors.email ? 'border-rose-500' : 'border-white/10 focus:border-mint'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-[10px] text-rose-500 mt-1.5 font-medium">{errors.email}</span>}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="text-[10px] uppercase tracking-[0.2em] text-steel font-bold">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={`border-b bg-transparent py-3 text-sm text-fog outline-none transition-colors placeholder:text-steel/30 ${
                  errors.subject ? 'border-rose-500' : 'border-white/10 focus:border-mint'
                }`}
                placeholder="Collaboration Inquiry"
              />
              {errors.subject && <span className="text-[10px] text-rose-500 mt-1.5 font-medium">{errors.subject}</span>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-steel font-bold">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
                className={`border-b bg-transparent py-3 text-sm text-fog outline-none resize-none transition-colors placeholder:text-steel/30 ${
                  errors.message ? 'border-rose-500' : 'border-white/10 focus:border-mint'
                }`}
                placeholder="Tell me about the software you want to build..."
              />
              {errors.message && <span className="text-[10px] text-rose-500 mt-1.5 font-medium">{errors.message}</span>}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full sm:w-auto inline-flex min-h-12 items-center justify-center gap-2 border border-mint/30 bg-transparent px-8 py-3 text-xs uppercase tracking-widest text-mint transition-all duration-300 hover:border-mint hover:bg-mint/5 disabled:opacity-50"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin text-mint" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-3.5 w-3.5" />
                  Send Mail
                </>
              )}
            </button>
          </form>

          {/* Toast notifications */}
          <AnimatePresence>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2.5 border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs font-semibold text-emerald-400"
              >
                <CheckCircle2 size={16} />
                <span>Message sent successfully. I'll get back to you shortly.</span>
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex items-center gap-2.5 border border-rose-500/20 bg-rose-500/5 p-4 text-xs font-semibold text-rose-400"
              >
                <AlertCircle size={16} />
                <span>Something went wrong. Please check your fields and try again.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Column: Typographic Contact Links */}
        <div className="contact-element lg:col-span-5 space-y-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-steel border-b border-white/5 pb-2">
            Direct Connections
          </h3>

          <div className="divide-y divide-white/5">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-4 first:pt-0 last:pb-0 text-left"
              >
                <div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-steel block mb-1">
                    {link.label}
                  </span>
                  <span className="font-display text-base font-light text-fog group-hover:text-mint transition-colors duration-300 sm:text-lg">
                    {link.value}
                  </span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center border border-white/5 bg-transparent text-steel group-hover:border-mint/30 group-hover:text-mint group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300">
                  <ArrowUpRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
