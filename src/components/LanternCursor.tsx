import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const LanternCursor: React.FC = () => {
  const glowRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Check if device is touch-primary
    const checkTouch = () => {
      if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
        setIsTouch(true);
      }
    };
    checkTouch();

    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);

      // Smooth lag on outer lantern glow for atmospheric feel
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.7,
          ease: 'power2.out',
        });
      }

      // Faster precision on lantern core
      if (coreRef.current) {
        gsap.to(coreRef.current, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.15,
          ease: 'power1.out',
        });
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
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
    <div className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} pointer-events-none fixed inset-0 z-50 overflow-hidden`}>
      {/* Outer ambient lantern radiance */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(197, 164, 109, 0.055) 0%, rgba(140, 47, 57, 0.025) 45%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />
      {/* Inner warm lantern ember core */}
      <div
        ref={coreRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full pointer-events-none"
        style={{
          backgroundColor: 'rgba(197, 164, 109, 0.75)',
          boxShadow: '0 0 10px 2px rgba(197, 164, 109, 0.5), 0 0 20px 4px rgba(140, 47, 57, 0.3)',
        }}
      />
    </div>
  );
};
