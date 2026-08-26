import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const heroFogRef = useRef<HTMLDivElement>(null);
  const heroGlowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Make sure the container is visible on mount
      gsap.set('#hunter-sigil', { opacity: 1 });

      // Animate the sigil paths drawing and filling
      tl.fromTo(
        '#hunter-sigil .sigil-path',
        { opacity: 0, scale: 0.92, transformOrigin: 'center top' },
        { opacity: 1, scale: 1, duration: 1.8, stagger: 0.2 }
      )
        .fromTo(
          '#hunter-sigil .sigil-dot',
          { scale: 0, opacity: 0, transformOrigin: 'center center' },
          { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(2)' },
          '-=0.4'
        )
        .fromTo(
          '.hero-text-anim',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, stagger: 0.12 },
          '-=0.6'
        );

      // Subtle breathing ambient pulse (visible on mobile where mouse hover doesn't exist)
      gsap.to('#hunter-sigil', {
        y: -6,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Smooth vertical glide for scroll chevron icon
      gsap.to('.scroll-chevron', {
        y: 3,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Mouse parallax for subtle background depth (desktop only, doesn't interfere with touch scroll)
      const isTouch = window.matchMedia('(pointer: coarse)').matches;
      if (!isTouch && heroRef.current) {
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
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-x-hidden select-none"
    >
      {/* Atmospheric fog and glow layers (touch safe) */}
      <div
        ref={heroFogRef}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#C5A46D]/[0.025] to-transparent rounded-full blur-3xl pointer-events-none"
      />
      <div
        ref={heroGlowRef}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[radial-gradient(circle,rgba(197,164,109,0.07)_0%,rgba(140,47,57,0.03)_45%,transparent_70%)] rounded-full blur-2xl pointer-events-none"
      />

      {/* Centered content container */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col items-center justify-center text-center my-auto z-10">

        {/* Availability badge */}
        <div className="hero-text-anim flex flex-col items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#17181C]/90 border border-[#C5A46D]/30 text-xs font-mono text-[#B8B2A7] shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-[0.18em] uppercase font-semibold">Available for hire</span>
          </div>
        </div>

        {/* Exact Geometric Hunter's Mark Sigil */}
        <div className="relative flex items-center justify-center mb-6 sm:mb-8 select-none">
          {/* Background ethereal pulse halo */}
          <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-[#C5A46D]/10 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#8C2F39]/15 blur-2xl pointer-events-none" />

          <svg
            id="hunter-sigil"
            viewBox="0 0 200 420"
            className="w-24 h-52 sm:w-32 sm:h-68 md:w-36 md:h-80 drop-shadow-[0_0_25px_rgba(197,164,109,0.3)] transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(230,34,34,0.55)] cursor-pointer"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Hunter's Mark Sigil"
          >
            {/* Center Vertical Blade */}
            <path
              className="sigil-path"
              d="M 92 18 L 108 26 L 103 210 L 103 358 L 97 366 L 97 210 Z"
              fill="#E5E0D8"
              stroke="#C5A46D"
              strokeWidth="1.5"
            />

            {/* Upper Angular Diamond Horns */}
            <path
              className="sigil-path"
              d="M 100 196 L 176 292 L 138 360 L 148 346 L 166 292 L 100 216 L 34 292 L 52 346 L 62 360 L 24 292 Z"
              fill="#E5E0D8"
              stroke="#C5A46D"
              strokeWidth="1.5"
            />

            {/* Bottom Floating Ember Dot */}
            <circle
              className="sigil-dot"
              cx="100"
              cy="392"
              r="9"
              fill="#E5E0D8"
              stroke="#C5A46D"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* Identity block */}
        <div className="max-w-3xl mx-auto mt-2 space-y-2">
          {/* Primary Headline (Name) */}
          <h1 className="hero-text-anim font-cinzel text-3xl sm:text-5xl md:text-5xl font-bold tracking-[0.12em] text-[#EAE6DF] drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)] leading-tight">
            MOHAMMADREZA FARHADI
          </h1>

          {/* Secondary Role & Title */}
          <div className="hero-text-anim flex items-center justify-center gap-3 sm:gap-4 my-3">
            <span className="w-8 sm:w-12 h-[1px] bg-[#C5A46D]/30" />
            <h2 className="font-mono text-sm sm:text-md md:text-xl tracking-[0.22em] text-[#C5A46D] uppercase font-semibold">
              Software Engineer // FRONTEND
            </h2>
            <span className="w-8 sm:w-12 h-[1px] bg-[#C5A46D]/30" />
          </div>

          {/* Domain Pill / Specialization Tags */}
          <div className="hero-text-anim text-[11px] sm:text-sm font-mono text-[#847F78] tracking-[0.2em] uppercase mb-4">
            ARCHITECTURE · SYSTEMS
          </div>

          {/* Impact Quote */}
          <p className="hero-text-anim text-sm sm:text-xl text-[#B8B2A7] font-sans font-normal max-w-xl mx-auto leading-relaxed mt-20">
            "I build, modernize, and evolve complex web systems."
          </p>
        </div>

        {/* CTAs */}
        <div className="hero-text-anim flex flex-col sm:flex-row items-center justify-center gap-3.5 mt-8 w-full max-w-md mx-auto">
          <button
            onClick={() => scrollToSection('great-hunt')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#C5A46D] via-[#dfbe88] to-[#C5A46D] hover:from-[#dfbe88] hover:to-[#C5A46D] text-[#0D0D0F] font-cinzel font-bold text-xs sm:text-sm tracking-[0.18em] uppercase shadow-[0_0_25px_rgba(197,164,109,0.3)] hover:shadow-[0_0_35px_rgba(197,164,109,0.5)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer whitespace-nowrap"
          >
            <span>Begin the Hunt</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
          </button>

          <button
            onClick={() => scrollToSection('regions')}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#17181C]/90 hover:bg-[#1C1D24] border border-[#C5A46D]/30 hover:border-[#C5A46D]/60 text-[#EAE6DF] font-cinzel font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md whitespace-nowrap"
          >
            <span>View Experience</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => scrollToSection('hunter')}
        className="hero-text-anim relative z-10 flex flex-col items-center justify-center gap-2.5 text-center cursor-pointer group mt-6"
      >
        <span className="font-mono text-[10px] tracking-[0.28em] text-[#847F78] uppercase group-hover:text-[#B8B2A7] transition-colors">
          Scroll to explore
        </span>
        <div className="w-9 h-9 rounded-full border border-[#C5A46D]/30 flex items-center justify-center group-hover:border-[#C5A46D]/60 transition-colors shadow-[0_0_10px_rgba(197,164,109,0.1)]">
          <ChevronDown className="scroll-chevron w-4 h-4 text-[#C5A46D]" />
        </div>
      </div>
    </section>
  );
};
