import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HunterSigil } from '../components/HunterSigil';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ChevronDown, Compass, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const sigilContainerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const specRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Choreographed cinematic entrance sequence
      tl.fromTo(
        markRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2 }
      )
        .fromTo(
          sigilContainerRef.current,
          { opacity: 0, scale: 0.92, filter: 'blur(10px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2 },
          '-=0.4'
        )
        .fromTo(
          nameRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.9 },
          '-=0.6'
        )
        .fromTo(
          [titleRef.current, specRef.current],
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.15, duration: 0.7 },
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
      className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden"
    >
      {/* Centered responsive content container */}
      <div className="max-w-[1360px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col items-center justify-center text-center my-auto z-10">
        
        {/* Top: Small personal mark & status badge */}
        <div ref={markRef} className="flex flex-col items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17181C]/90 border border-[#C5A46D]/20 text-[11px] font-mono text-[#9B9488] shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[#C5A46D] font-semibold">{PERSONAL_INFO.shortName}</span>
            <span className="text-[#6B665E]">•</span>
            <span className="text-[#E5E0D8]">ENTERPRISE FRONTEND & ARCHITECTURE</span>
          </div>
        </div>

        {/* Center Visual: The Hunter Sigil */}
        <div ref={sigilContainerRef} className="my-2 sm:my-4">
          <HunterSigil size="lg" />
        </div>

        {/* Below: Name & Job Title */}
        <div className="max-w-3xl mx-auto mt-2 sm:mt-4 space-y-2 sm:space-y-3">
          <h1
            ref={nameRef}
            className="font-cinzel text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E5E0D8] drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
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
            className="font-mono text-xs sm:text-sm tracking-[0.25em] text-[#9B9488] uppercase"
          >
            {PERSONAL_INFO.specialization}
          </div>

          {/* Short Statement */}
          <p
            ref={descRef}
            className="pt-2 text-base sm:text-lg md:text-xl text-[#E5E0D8]/90 font-normal max-w-2xl mx-auto leading-relaxed italic"
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
            onClick={() => scrollToSection('hunter')}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-gradient-to-r from-[#C5A46D] via-[#dfbe88] to-[#C5A46D] hover:from-[#dfbe88] hover:to-[#C5A46D] text-[#0D0D0F] font-cinzel font-bold text-xs sm:text-sm tracking-[0.2em] uppercase shadow-[0_0_30px_rgba(197,164,109,0.35)] hover:shadow-[0_0_40px_rgba(197,164,109,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            <span>BEGIN THE HUNT</span>
          </button>

          <button
            onClick={() => scrollToSection('regions')}
            className="w-full sm:w-auto px-8 py-3.5 rounded bg-[#17181C]/90 hover:bg-[#212228] border border-[#C5A46D]/30 hover:border-[#C5A46D] text-[#E5E0D8] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
          >
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
            <span>VIEW EXPERIENCE</span>
          </button>
        </div>
      </div>

      {/* Bottom: Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        onClick={() => scrollToSection('hunter')}
        className="relative z-10 flex flex-col items-center justify-center gap-2 text-center cursor-pointer group mt-4"
      >
        <span className="font-mono text-[11px] tracking-[0.25em] text-[#9B9488] uppercase group-hover:text-[#C5A46D] transition-colors">
          Scroll to enter the journey
        </span>
        <div className="w-6 h-6 rounded-full border border-[#C5A46D]/30 flex items-center justify-center group-hover:border-[#C5A46D] transition-colors">
          <ChevronDown className="w-3.5 h-3.5 text-[#C5A46D] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
