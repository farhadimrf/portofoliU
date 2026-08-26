import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HunterSigil } from '../components/HunterSigil';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const sigilWrapperRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const heroFogRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        markRef.current,
        { opacity: 0, y: -16 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.15 }
      )
        .fromTo(
          sigilWrapperRef.current,
          { opacity: 0, scale: 0.88, filter: 'blur(8px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 },
          '-=0.3'
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.85 },
          '-=0.7'
        )
        .fromTo(
          [titleRef.current, specRef.current],
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, stagger: 0.14, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.2'
        );

      // Mouse parallax — desktop only
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (!isTouch) {
        const sigilX = sigilWrapperRef.current
          ? gsap.quickTo(sigilWrapperRef.current, 'x', { duration: 0.8, ease: 'power2.out' })
          : null;
        const sigilY = sigilWrapperRef.current
          ? gsap.quickTo(sigilWrapperRef.current, 'y', { duration: 0.8, ease: 'power2.out' })
          : null;
        const glowX = heroGlowRef.current
          ? gsap.quickTo(heroGlowRef.current, 'x', { duration: 1.2, ease: 'power2.out' })
          : null;
        const glowY = heroGlowRef.current
          ? gsap.quickTo(heroGlowRef.current, 'y', { duration: 1.2, ease: 'power2.out' })
          : null;
        const fogX = heroFogRef.current
          ? gsap.quickTo(heroFogRef.current, 'x', { duration: 1.6, ease: 'power2.out' })
          : null;
        const fogY = heroFogRef.current
          ? gsap.quickTo(heroFogRef.current, 'y', { duration: 1.6, ease: 'power2.out' })
          : null;

        const onMouseMove = (e: MouseEvent) => {
          const { innerWidth, innerHeight } = window;
          const xFactor = (e.clientX / innerWidth - 0.5) * 2;
          const yFactor = (e.clientY / innerHeight - 0.5) * 2;
          sigilX?.(xFactor * 18);
          sigilY?.(yFactor * 13);
          glowX?.(xFactor * 10);
          glowY?.(yFactor * 8);
          fogX?.(xFactor * -5);
          fogY?.(yFactor * -4);
        };

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden"
    >
      {/* Atmospheric fog layers */}
      <div
        ref={heroFogRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#C5A46D]/[0.025] to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={heroGlowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(197,164,109,0.07)_0%,rgba(140,47,57,0.03)_45%,transparent_70%)] rounded-full blur-2xl pointer-events-none"
      />

      {/* Centered content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col items-center justify-center text-center my-auto z-10">

        {/* LEVEL 3: Availability badge — small, muted */}
        <div ref={markRef} className="flex flex-col items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17181C]/90 border border-[#C5A46D]/20 text-[10px] font-mono text-[#5C5956] shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[#9A9490] tracking-[0.2em] uppercase">Available for hire</span>
          </div>
        </div>

        {/* Sigil — atmospheric, centered */}
        <div ref={sigilWrapperRef} className="my-2 sm:my-3">
          <HunterSigil size="lg" />
        </div>

        {/* Identity block — clear visual hierarchy */}
        <div className="max-w-2xl mx-auto mt-4 space-y-2.5">

          {/* LEVEL 1 (name): Reduced by ~30% for balanced hierarchy */}
          <h2
            ref={nameRef}
            className="font-cinzel text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.18em] text-[#E5E0D8]/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
          >
            {PERSONAL_INFO.name.toUpperCase()}
          </h2>

          {/* LEVEL 1 (primary identity): SOFTWARE ENGINEER — strong visual weight */}
          <div
            ref={titleRef}
            className="flex items-center justify-center gap-3 sm:gap-5 mt-1"
          >
            <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A46D]/60" />
            <h1 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-[#C5A46D] tracking-widest uppercase drop-shadow-[0_0_20px_rgba(197,164,109,0.25)]">
              {PERSONAL_INFO.title}
            </h1>
            <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A46D]/60" />
          </div>

          {/* LEVEL 3 / 2 bridge: Specialization — clean, scannable */}
          <div
            ref={specRef}
            className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#9A9490] uppercase mt-1 font-medium"
          >
            {PERSONAL_INFO.specialization}
          </div>

          {/* LEVEL 2: Professional Statement — highly readable, comfortable line length */}
          <p
            ref={descRef}
            className="pt-4 text-base sm:text-lg text-[#E5E0D8]/90 font-normal max-w-lg mx-auto leading-relaxed"
          >
            "{PERSONAL_INFO.tagline}"
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-9 w-full max-w-md mx-auto"
        >
          <button
            onClick={() => scrollToSection('great-hunt')}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#C5A46D] via-[#dfbe88] to-[#C5A46D] hover:from-[#dfbe88] hover:to-[#C5A46D] text-[#0D0D0F] font-cinzel font-bold text-xs tracking-[0.2em] uppercase shadow-[0_0_28px_rgba(197,164,109,0.35)] hover:shadow-[0_0_38px_rgba(197,164,109,0.55)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Begin the Hunt</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection('regions')}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#17181C]/90 hover:bg-[#1C1D24] border border-[#C5A46D]/30 hover:border-[#C5A46D]/60 text-[#E5E0D8] font-cinzel font-semibold text-xs tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            <span>View Experience</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        onClick={() => scrollToSection('hunter')}
        className="relative z-10 flex flex-col items-center justify-center gap-2 text-center cursor-pointer group mt-6"
      >
        <span className="font-mono text-[9px] tracking-[0.28em] text-[#5C5956] uppercase group-hover:text-[#9A9490] transition-colors">
          Scroll to explore
        </span>
        <div className="w-5 h-5 rounded-full border border-[#C5A46D]/20 flex items-center justify-center group-hover:border-[#C5A46D]/40 transition-colors">
          <ChevronDown className="w-3 h-3 text-[#C5A46D]/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
