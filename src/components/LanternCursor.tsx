import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const LanternCursor: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch or coarse pointer
    const checkTouch = () => {
      if (
        window.matchMedia('(pointer: coarse)').matches ||
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0
      ) {
        setIsTouch(true);
      }
    };
    checkTouch();

    if (isTouch) return;

    // Use GSAP quickTo for ultra-smooth 60fps tracking
    const glowX = glowRef.current
      ? gsap.quickTo(glowRef.current, 'x', { duration: 0.6, ease: 'power2.out' })
      : null;
    const glowY = glowRef.current
      ? gsap.quickTo(glowRef.current, 'y', { duration: 0.6, ease: 'power2.out' })
      : null;

    const coreX = coreRef.current
      ? gsap.quickTo(coreRef.current, 'x', { duration: 0.15, ease: 'power1.out' })
      : null;
    const coreY = coreRef.current
      ? gsap.quickTo(coreRef.current, 'y', { duration: 0.15, ease: 'power1.out' })
      : null;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      glowX?.(e.clientX);
      glowY?.(e.clientY);
      coreX?.(e.clientX);
      coreY?.(e.clientY);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible, isTouch]);

  if (isTouch) return null;

  return (
    <div
      className={`transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } pointer-events-none fixed inset-0 z-50 overflow-hidden select-none`}
    >
      {/* Outer ambient lantern radiance (w-80 h-80) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(197,164,109,0.08)_0%,transparent_70%)]"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Inner warm lantern ember core */}
      <div
        ref={coreRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(197, 164, 109, 0.85)',
          boxShadow: '0 0 12px 2px rgba(197, 164, 109, 0.6), 0 0 24px 4px rgba(140, 47, 57, 0.35)',
        }}
      />
    </div>
  );
};
