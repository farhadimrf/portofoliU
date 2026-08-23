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
  const containerRef = useRef<HTMLDivElement>(null);
  const sigilSvgRef = useRef<SVGSVGElement>(null);
  const pathSpineRef = useRef<SVGPathElement>(null);
  const pathArchRef = useRef<SVGPathElement>(null);
  const pathLeftBranchRef = useRef<SVGPathElement>(null);
  const pathRightBranchRef = useRef<SVGPathElement>(null);
  const runeGlowRef = useRef<SVGCircleElement>(null);
  const crosslinesRef = useRef<SVGGElement>(null);

  const sizeMap = {
    sm: 'w-24 h-36',
    md: 'w-36 h-54',
    lg: 'w-52 h-78 sm:w-64 sm:h-96',
    xl: 'w-72 h-[420px] sm:w-84 sm:h-[490px]',
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const paths = [
        pathSpineRef.current,
        pathArchRef.current,
        pathLeftBranchRef.current,
        pathRightBranchRef.current,
      ];

      // Measure path lengths and set initial dash properties for drawing effect
      paths.forEach((p) => {
        if (p) {
          const length = p.getTotalLength?.() || 450;
          gsap.set(p, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });
        }
      });

      // Master line-drawing animation timeline over 2.5s with power3.out
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(pathSpineRef.current, {
        strokeDashoffset: 0,
        duration: 2.5,
        delay: 0.1,
      })
        .to(
          pathArchRef.current,
          {
            strokeDashoffset: 0,
            duration: 2.2,
          },
          '-=2.0'
        )
        .to(
          [pathLeftBranchRef.current, pathRightBranchRef.current],
          {
            strokeDashoffset: 0,
            duration: 1.8,
            stagger: 0.15,
          },
          '-=1.6'
        )
        .fromTo(
          crosslinesRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1.2 },
          '-=1.0'
        )
        .fromTo(
          runeGlowRef.current,
          { opacity: 0, scale: 0.6 },
          { opacity: 0.9, scale: 1, duration: 1.5, ease: 'sine.out' },
          '-=1.2'
        );

      // Continuous subtle breathing pulse
      gsap.to(runeGlowRef.current, {
        scale: 1.15,
        opacity: 0.7,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`sigil-container relative flex items-center justify-center select-none animate-sigil-float ${
        interactive ? 'cursor-pointer' : ''
      } ${className}`}
    >
      {/* Background ethereal pulse halo */}
      <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-[#C5A46D]/10 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#8C2F39]/15 blur-2xl pointer-events-none" />

      <svg
        ref={sigilSvgRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
        className={`${sizeMap[size]} relative z-10 transition-all duration-700 [filter:drop-shadow(0_0_15px_rgba(197,164,109,0.35))] hover:[filter:drop-shadow(0_0_25px_rgba(197,164,109,0.7))]`}
        aria-label="Hunter-inspired Architecture Sigil"
      >
        <defs>
          {/* Muted Gold Gradient */}
          <linearGradient id="sigilGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8E3D9" />
            <stop offset="45%" stopColor="#C5A46D" />
            <stop offset="100%" stopColor="#8A6B38" />
          </linearGradient>

          {/* Crimson Accent Gradient */}
          <linearGradient id="sigilBloodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5A46D" />
            <stop offset="45%" stopColor="#A63844" />
            <stop offset="100%" stopColor="#5E1D24" />
          </linearGradient>

          {/* Center Rune Glow */}
          <radialGradient id="sigilRuneGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C5A46D" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#8C2F39" stopOpacity="0.45" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Center Rune Core Pulse Node */}
        <circle
          ref={runeGlowRef}
          cx="100"
          cy="160"
          r="16"
          fill="url(#sigilRuneGlow)"
          className="opacity-80"
        />

        {/* 1. Main Vertical Spine: Software Engineering Pillar */}
        <path
          ref={pathSpineRef}
          d="M 100 16 L 100 284"
          stroke="url(#sigilGoldGrad)"
          strokeWidth="5.5"
          strokeLinecap="round"
          fill="none"
          className="sigil-stroke sigil-stroke-gold"
        />

        {/* Spine Terminal Crown and Base Ticks */}
        <line x1="93" y1="16" x2="107" y2="16" stroke="#C5A46D" strokeWidth="3" strokeLinecap="round" />
        <line x1="91" y1="284" x2="109" y2="284" stroke="#C5A46D" strokeWidth="3" strokeLinecap="round" />

        {/* 2. The Great Arch: Architectural Framework */}
        <path
          ref={pathArchRef}
          d="M 36 66 C 36 134, 66 164, 100 164 C 134 164, 164 134, 164 66"
          stroke="url(#sigilGoldGrad)"
          strokeWidth="4.5"
          strokeLinecap="round"
          fill="none"
          className="sigil-stroke sigil-stroke-gold"
        />

        {/* Arch Finial Nodes */}
        <circle cx="36" cy="66" r="3.5" fill="#C5A46D" />
        <circle cx="164" cy="66" r="3.5" fill="#C5A46D" />

        {/* 3. Left Channel: Systems & Modernization (Crimson Ember Gradient) */}
        <path
          ref={pathLeftBranchRef}
          d="M 46 106 Q 100 128, 100 214"
          stroke="url(#sigilBloodGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="sigil-stroke sigil-stroke-blood"
        />

        {/* 4. Right Channel: Architecture & Performance (Crimson Ember Gradient) */}
        <path
          ref={pathRightBranchRef}
          d="M 154 106 Q 100 128, 100 214"
          stroke="url(#sigilBloodGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          className="sigil-stroke sigil-stroke-blood"
        />

        {/* Geometric cross-tie accents */}
        <g ref={crosslinesRef}>
          <line x1="86" y1="214" x2="114" y2="214" stroke="#C5A46D" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          <line x1="92" y1="225" x2="108" y2="225" stroke="#8C2F39" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <circle cx="100" cy="214" r="2" fill="#E8E3D9" />
        </g>
      </svg>
    </div>
  );
};
