import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface HunterSigilProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
}

export const HunterSigil: React.FC<HunterSigilProps> = ({
  className = '',
  size = 'lg',
  interactive = true,
}) => {
  const sigilRef = useRef<SVGSVGElement>(null);
  const pathMainRef = useRef<SVGPathElement>(null);
  const pathArchRef = useRef<SVGPathElement>(null);
  const pathLeftRef = useRef<SVGPathElement>(null);
  const pathRightRef = useRef<SVGPathElement>(null);
  const runeGlowRef = useRef<SVGCircleElement>(null);

  const sizeMap = {
    sm: 'w-24 h-36',
    md: 'w-36 h-54',
    lg: 'w-52 h-78 sm:w-64 sm:h-96',
    xl: 'w-72 h-[420px] sm:w-80 sm:h-[480px]',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for stroke drawing animation
      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });

      // Reset dashoffsets
      const paths = [pathMainRef.current, pathArchRef.current, pathLeftRef.current, pathRightRef.current];
      paths.forEach((p) => {
        if (p) {
          const length = p.getTotalLength?.() || 400;
          gsap.set(p, { strokeDasharray: length, strokeDashoffset: length });
        }
      });

      // Choreographed drawing
      tl.to(pathMainRef.current, { strokeDashoffset: 0, duration: 1.8, delay: 0.3 })
        .to(pathArchRef.current, { strokeDashoffset: 0, duration: 1.4 }, '-=1.0')
        .to([pathLeftRef.current, pathRightRef.current], { strokeDashoffset: 0, duration: 1.2, stagger: 0.15 }, '-=0.8')
        .to(runeGlowRef.current, { opacity: 0.85, scale: 1.1, duration: 1.2, yoyo: true, repeat: -1, ease: 'sine.inOut' }, '-=0.4');
    }, sigilRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className={`sigil-container relative flex items-center justify-center select-none transition-transform duration-700 ${
        interactive ? 'hover:scale-105 cursor-pointer' : ''
      } ${className}`}
    >
      {/* Background ethereal pulse halo */}
      <div className="absolute w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-[#C5A46D]/10 blur-2xl animate-pulse-glow pointer-events-none" />
      <div className="absolute w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-[#8C2F39]/15 blur-xl pointer-events-none" />

      <svg
        ref={sigilRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
        className={`${sizeMap[size]} relative z-10 transition-all duration-500 drop-shadow-[0_0_15px_rgba(197,164,109,0.25)]`}
        aria-label="Hunter-inspired Architecture Sigil"
      >
        <defs>
          {/* Muted Gold Gradient */}
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5E0D8" />
            <stop offset="45%" stopColor="#C5A46D" />
            <stop offset="100%" stopColor="#8C6F3D" />
          </linearGradient>

          {/* Blood Accent Gradient */}
          <linearGradient id="bloodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A46D" />
            <stop offset="40%" stopColor="#A83944" />
            <stop offset="100%" stopColor="#5E1D24" />
          </linearGradient>

          {/* Center Rune Glow */}
          <radialGradient id="runeCenterGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A46D" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8C2F39" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center Rune Core Pulse Node */}
        <circle
          ref={runeGlowRef}
          cx="100"
          cy="160"
          r="14"
          fill="url(#runeCenterGlow)"
          className="opacity-60"
        />

        {/* 1. Main Vertical Spine: Software Engineering Pillar */}
        <path
          ref={pathMainRef}
          d="M 100 18 L 100 282"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-300"
        />

        {/* Upper and lower terminal ticks */}
        <line x1="94" y1="18" x2="106" y2="18" stroke="#C5A46D" strokeWidth="3" strokeLinecap="round" />
        <line x1="92" y1="282" x2="108" y2="282" stroke="#C5A46D" strokeWidth="3" strokeLinecap="round" />

        {/* 2. The Great Arch: Architectural Framework */}
        <path
          ref={pathArchRef}
          d="M 38 68 C 38 132, 68 162, 100 162 C 132 162, 162 132, 162 68"
          stroke="url(#goldGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-300"
        />

        {/* Subtle rune accent marks on the arch */}
        <circle cx="38" cy="68" r="3" fill="#C5A46D" />
        <circle cx="162" cy="68" r="3" fill="#C5A46D" />

        {/* 3. Left Channel: Systems & Modernization (Subtle Blood Accent) */}
        <path
          ref={pathLeftRef}
          d="M 48 108 Q 100 128, 100 212"
          stroke="url(#bloodGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-300"
        />

        {/* 4. Right Channel: Architecture & Performance (Subtle Blood Accent) */}
        <path
          ref={pathRightRef}
          d="M 152 108 Q 100 128, 100 212"
          stroke="url(#bloodGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-300"
        />

        {/* Geometric cross-tie accents */}
        <line x1="88" y1="212" x2="112" y2="212" stroke="#C5A46D" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <line x1="93" y1="222" x2="107" y2="222" stroke="#8C2F39" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      </svg>
    </div>
  );
};
