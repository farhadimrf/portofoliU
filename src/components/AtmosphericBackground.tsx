import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const fogRef1 = useRef<HTMLDivElement>(null);
  const fogRef2 = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax mouse effect for desktop with quickTo
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const moonX = moonRef.current ? gsap.quickTo(moonRef.current, 'x', { duration: 1.5, ease: 'power1.out' }) : null;
    const moonY = moonRef.current ? gsap.quickTo(moonRef.current, 'y', { duration: 1.5, ease: 'power1.out' }) : null;

    const fog1X = fogRef1.current ? gsap.quickTo(fogRef1.current, 'x', { duration: 2.0, ease: 'power1.out' }) : null;
    const fog1Y = fogRef1.current ? gsap.quickTo(fogRef1.current, 'y', { duration: 2.0, ease: 'power1.out' }) : null;

    const fog2X = fogRef2.current ? gsap.quickTo(fogRef2.current, 'x', { duration: 2.2, ease: 'power1.out' }) : null;
    const fog2Y = fogRef2.current ? gsap.quickTo(fogRef2.current, 'y', { duration: 2.2, ease: 'power1.out' }) : null;

    const skyX = skylineRef.current ? gsap.quickTo(skylineRef.current, 'x', { duration: 1.8, ease: 'power1.out' }) : null;
    const skyY = skylineRef.current ? gsap.quickTo(skylineRef.current, 'y', { duration: 1.8, ease: 'power1.out' }) : null;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      moonX?.(xPercent * 8);
      moonY?.(yPercent * 6);

      fog1X?.(xPercent * -10);
      fog1Y?.(yPercent * -6);

      fog2X?.(xPercent * 12);
      fog2Y?.(yPercent * 8);

      skyX?.(xPercent * 6);
      skyY?.(yPercent * 4);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Ambient floating particles canvas (dust / embers)
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(width < 768 ? 20 : 50, 55);
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      maxOpacity: number;
      pulseSpeed: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(197, 164, 109, ', // Muted gold
      'rgba(140, 47, 57, ',   // Crimson ember
      'rgba(232, 227, 217, ', // Warm ivory dust
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.6 + 0.4,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: -Math.random() * 0.3 - 0.08,
        opacity: Math.random() * 0.35 + 0.1,
        maxOpacity: Math.random() * 0.45 + 0.15,
        pulseSpeed: Math.random() * 0.008 + 0.004,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.pulseSpeed;

        if (p.opacity > p.maxOpacity || p.opacity < 0.04) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(p.opacity, 1))})`;
        ctx.shadowBlur = p.size > 1.2 ? 5 : 0;
        ctx.shadowColor = p.color.includes('197') ? 'rgba(197, 164, 109, 0.5)' : 'rgba(140, 47, 57, 0.35)';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Layer 1: Dark obsidian base */}
      <div className="absolute inset-0 bg-[#0A0A0C]" />

      {/* Layer 2: Pale Moon & Distant Ethereal Light */}
      <div
        ref={moonRef}
        className="absolute top-[6%] right-[8%] sm:right-[14%] w-56 h-56 sm:w-80 sm:h-80 rounded-full opacity-35 blur-[48px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(210, 220, 235, 0.2) 0%, rgba(197, 164, 109, 0.08) 45%, transparent 70%)',
        }}
      />
      <div className="absolute top-[8%] right-[10%] sm:right-[16%] w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#E8E3D9]/10 via-[#C5A46D]/5 to-transparent blur-md border border-[#E8E3D9]/10 opacity-25" />

      {/* Layer 3: Gothic Architectural Skyline */}
      <div
        ref={skylineRef}
        className="absolute bottom-0 left-0 right-0 h-72 sm:h-96 opacity-12 overflow-hidden flex items-end pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom text-[#15161D]"
        >
          <path
            d="M0 320V240L40 230L60 170L70 140L75 110L80 140L90 170L110 230L150 240L170 210L180 150L185 80L190 150L200 210L240 250L300 245L320 200L330 130L340 70L345 30L350 70L360 130L370 200L410 250L500 240L530 190L540 120L545 60L550 120L560 190L600 245L700 240L720 180L730 110L735 40L740 110L750 180L780 250L880 240L900 170L910 100L915 50L920 100L930 170L960 245L1060 235L1080 160L1090 90L1095 20L1100 90L1110 160L1140 240L1240 245L1260 180L1270 120L1275 60L1280 120L1290 180L1320 245L1400 240L1440 250V320H0Z"
            fill="currentColor"
          />
          <path
            d="M345 30L343 0L347 0L345 30ZM735 40L733 10L737 10L735 40ZM1095 20L1093 0L1097 0L1095 20Z"
            stroke="#C5A46D"
            strokeWidth="1.5"
            opacity="0.25"
          />
        </svg>
      </div>

      {/* Layer 4: Dynamic Gothic Fog Layers */}
      <div
        ref={fogRef1}
        className="absolute -bottom-16 left-[-20%] w-[140%] h-96 opacity-20 animate-fog-1 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(30, 32, 42, 0.4) 0%, rgba(18, 19, 25, 0.2) 50%, transparent 80%)',
          filter: 'blur(32px)',
        }}
      />
      <div
        ref={fogRef2}
        className="absolute top-1/3 right-[-20%] w-[130%] h-80 opacity-15 animate-fog-2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(140, 47, 57, 0.1) 0%, rgba(26, 28, 36, 0.18) 40%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Layer 5: Ambient floating particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Vignette border framing */}
      <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.9)] pointer-events-none" />
    </div>
  );
};
