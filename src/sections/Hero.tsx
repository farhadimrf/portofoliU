import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HunterSigil } from '../components/HunterSigil';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronDown, Compass, ShieldCheck } from 'lucide-react';

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

      // Entrance animation choreography
      tl.fromTo(
        markRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.9, delay: 0.1 }
      )
        .fromTo(
          sigilWrapperRef.current,
          { opacity: 0, scale: 0.9, filter: 'blur(8px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 },
          '-=0.4'
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.7'
        )
        .fromTo(
          [titleRef.current, specRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.7 },
          '-=0.5'
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.4'
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          '-=0.2'
        );

      // Mouse Parallax Damping with GSAP quickTo
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (!isTouch) {
        // Fog moves 6px, Moon glow moves 12px, Sigil moves 20px
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

          sigilX?.(xFactor * 20);
          sigilY?.(yFactor * 15);

          glowX?.(xFactor * 12);
          glowY?.(yFactor * 9);

          fogX?.(xFactor * -6);
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
      {/* Hero local atmospheric fog / gradient layers */}
      <div
        ref={heroFogRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#C5A46D]/[0.03] to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={heroGlowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[radial-gradient(circle,rgba(197,164,109,0.08)_0%,rgba(140,47,57,0.04)_45%,transparent_70%)] rounded-full blur-2xl pointer-events-none"
      />

      {/* Strict Centered Content Container */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col items-center justify-center text-center my-auto z-10">
        {/* Top Personal Mark & Status Badge */}
        <div ref={markRef} className="flex flex-col items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141519]/90 border border-[#C5A46D]/25 text-[11px] font-mono text-[#9E988F] shadow-[0_0_25px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[#C5A46D] font-semibold tracking-wider">{PERSONAL_INFO.shortName}</span>
            <span className="text-[#5E5B54]">•</span>
            <span className="text-[#E8E3D9] tracking-wider">ENTERPRISE FRONTEND & ARCHITECTURE</span>
          </div>
        </div>

        {/* Center Visual: The Hunter Sigil with mouse parallax */}
        <div ref={sigilWrapperRef} className="my-2 sm:my-3">
          <HunterSigil size="lg" />
        </div>

        {/* Name & Job Title */}
        <div className="max-w-3xl mx-auto mt-2 space-y-2 sm:space-y-3">
          <h1
            ref={nameRef}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8E3D9] drop-shadow-[0_6px_30px_rgba(0,0,0,0.95)]"
          >
            {PERSONAL_INFO.name.toUpperCase()}
          </h1>

          <div
            ref={titleRef}
            className="flex items-center justify-center gap-3 text-lg sm:text-2xl font-cinzel font-semibold text-[#C5A46D] tracking-widest uppercase"
          >
            <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C5A46D]/70" />
            <span>{PERSONAL_INFO.title}</span>
            <div className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C5A46D]/70" />
          </div>

          <div
            ref={specRef}
            className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#9E988F] uppercase"
          >
            {PERSONAL_INFO.specialization}
          </div>

          {/* Statement */}
          <p
            ref={descRef}
            className="pt-2 text-base sm:text-lg md:text-xl text-[#E8E3D9]/90 font-normal max-w-2xl mx-auto leading-relaxed italic"
          >
            "{PERSONAL_INFO.tagline}"
          </p>
        </div>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10 w-full max-w-md mx-auto"
        >
          <button
            onClick={() => scrollToSection('great-hunt')}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#C5A46D] via-[#dfbe88] to-[#C5A46D] hover:from-[#dfbe88] hover:to-[#C5A46D] text-[#0A0A0C] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(197,164,109,0.35)] hover:shadow-[0_0_40px_rgba(197,164,109,0.55)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            <span>THE GREAT HUNT</span>
          </button>

          <button
            onClick={() => scrollToSection('boss-fights')}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#141519]/90 hover:bg-[#1C1D24] border border-[#C5A46D]/30 hover:border-[#C5A46D] text-[#E8E3D9] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-md"
          >
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
            <span>BOSS FIGHTS</span>
          </button>
        </div>
      </div>

      {/* Bottom: Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        onClick={() => scrollToSection('hunter')}
        className="relative z-10 flex flex-col items-center justify-center gap-2 text-center cursor-pointer group mt-6"
      >
        <span className="font-mono text-[11px] tracking-[0.25em] text-[#9E988F] uppercase group-hover:text-[#C5A46D] transition-colors">
          Scroll to explore the architecture
        </span>
        <div className="w-6 h-6 rounded-full border border-[#C5A46D]/30 flex items-center justify-center group-hover:border-[#C5A46D] transition-colors">
          <ChevronDown className="w-3.5 h-3.5 text-[#C5A46D] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
