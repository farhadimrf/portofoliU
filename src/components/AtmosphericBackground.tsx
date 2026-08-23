import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AtmosphericBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const moonRef = useRef<HTMLDivElement>(null);
  const fogRef1 = useRef<HTMLDivElement>(null);
  const fogRef2 = useRef<HTMLDivElement>(null);
  const skylineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax mouse effect for desktop
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 2;
      const yPercent = (e.clientY / innerHeight - 0.5) * 2;

      // Subtle parallax depths
      if (moonRef.current) {
        gsap.to(moonRef.current, {
          x: xPercent * 4,
          y: yPercent * 3,
          duration: 1.5,
          ease: 'power1.out',
        });
      }

      if (fogRef1.current && fogRef2.current) {
        gsap.to(fogRef1.current, {
          x: xPercent * -8,
          y: yPercent * -6,
          duration: 2,
          ease: 'power1.out',
        });
        gsap.to(fogRef2.current, {
          x: xPercent * 10,
          y: yPercent * 8,
          duration: 2.2,
          ease: 'power1.out',
        });
      }

      if (skylineRef.current) {
        gsap.to(skylineRef.current, {
          x: xPercent * 6,
          y: yPercent * 4,
          duration: 1.8,
          ease: 'power1.out',
        });
      }
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

    // Create subtle particles
    const particleCount = Math.min(width < 768 ? 25 : 55, 60);
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
      'rgba(140, 47, 57, ',   // Blood accent
      'rgba(229, 224, 216, ', // Ivory dust
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.5,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.35 - 0.1, // Drifting gently upwards
        opacity: Math.random() * 0.4 + 0.1,
        maxOpacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.01 + 0.005,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.pulseSpeed;

        if (p.opacity > p.maxOpacity || p.opacity < 0.05) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        // Wrap around bounds
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0, Math.min(p.opacity, 1))})`;
        ctx.shadowBlur = p.size > 1.2 ? 6 : 0;
        ctx.shadowColor = p.color.includes('197') ? 'rgba(197, 164, 109, 0.6)' : 'rgba(140, 47, 57, 0.4)';
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
      <div className="absolute inset-0 bg-[#0D0D0F]" />

      {/* Layer 2: Pale Moon & Distant Ethereal Light */}
      <div
        ref={moonRef}
        className="absolute top-[8%] right-[10%] sm:right-[16%] w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-40 blur-[40px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200, 215, 230, 0.22) 0%, rgba(197, 164, 109, 0.08) 50%, transparent 70%)',
        }}
      />
      {/* Moon core circle */}
      <div className="absolute top-[10%] right-[12%] sm:right-[18%] w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#E5E0D8]/10 via-[#C5A46D]/5 to-transparent blur-md border border-[#E5E0D8]/10 opacity-30" />

      {/* Layer 3: Subtle Gothic Architectural Silhouette */}
      <div
        ref={skylineRef}
        className="absolute bottom-0 left-0 right-0 h-72 sm:h-96 opacity-15 overflow-hidden flex items-end pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-bottom text-[#1A1B22]"
        >
          {/* Gothic Cathedral & Spires silhouette */}
          <path
            d="M0 320V240L40 230L60 170L70 140L75 110L80 140L90 170L110 230L150 240L170 210L180 150L185 80L190 150L200 210L240 250L300 245L320 200L330 130L340 70L345 30L350 70L360 130L370 200L410 250L500 240L530 190L540 120L545 60L550 120L560 190L600 245L700 240L720 180L730 110L735 40L740 110L750 180L780 250L880 240L900 170L910 100L915 50L920 100L930 170L960 245L1060 235L1080 160L1090 90L1095 20L1100 90L1110 160L1140 240L1240 245L1260 180L1270 120L1275 60L1280 120L1290 180L1320 245L1400 240L1440 250V320H0Z"
            fill="currentColor"
          />
          {/* Finer spire tops & buttress details */}
          <path
            d="M345 30L343 0L347 0L345 30ZM735 40L733 10L737 10L735 40ZM1095 20L1093 0L1097 0L1095 20Z"
            stroke="#C5A46D"
            strokeWidth="1.5"
            opacity="0.3"
          />
        </svg>
      </div>

      {/* Layer 4: Dynamic Gothic Fog Layers */}
      <div
        ref={fogRef1}
        className="absolute -bottom-20 left-[-20%] w-[140%] h-96 opacity-25 animate-fog-1 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center bottom, rgba(35, 38, 48, 0.45) 0%, rgba(20, 22, 28, 0.25) 50%, transparent 80%)',
          filter: 'blur(30px)',
        }}
      />
      <div
        ref={fogRef2}
        className="absolute top-1/3 right-[-20%] w-[130%] h-80 opacity-20 animate-fog-2 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(140, 47, 57, 0.12) 0%, rgba(30, 32, 40, 0.2) 40%, transparent 75%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Layer 5: Ambient floating particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Vignette border framing */}
      <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] pointer-events-none" />
    </div>
  );
};
