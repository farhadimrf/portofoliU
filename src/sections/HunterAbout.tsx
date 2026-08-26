import React, { useEffect, useRef } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CAREER_EVOLUTION_STEPS } from '../data/portfolioData';
import { Smartphone, Code2, Layers, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const iconMap = { Smartphone, Code2, Layers, Cpu };

export const HunterAbout: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!timelineRef.current) return;
      const items = timelineRef.current.querySelectorAll('.timeline-item');
      gsap.from(items, {
        opacity: 0,
        x: -24,
        stagger: 0.18,
        duration: 0.75,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="hunter" ref={sectionRef} className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="02"
          category="The Hunter"
          headline="EVERY ENGINEER HAS A PATH."
          subheadline="From native device memory constraints to nation-scale enterprise architectures — technical mastery is forged through real production complexity."
        />

        {/* High-level progression breadcrumb — clean, scannable */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 text-[10px] sm:text-xs font-mono text-[#5C5956] tracking-[0.18em] uppercase">
          <span className="text-[#9A9490]">Android</span>
          <span className="text-[#C5A46D]/60">→</span>
          <span className="text-[#9A9490]">React</span>
          <span className="text-[#C5A46D]/60">→</span>
          <span className="text-[#9A9490]">Modern Web</span>
          <span className="text-[#C5A46D]/60">→</span>
          <span className="text-[#9A9490]">Architecture</span>
          <span className="text-[#C5A46D]/60">→</span>
          <span className="text-[#C5A46D] font-semibold">Software Engineering</span>
        </div>

        {/* Vertical timeline — clean, scannable */}
        <div ref={timelineRef} className="max-w-2xl mx-auto relative">
          {/* Vertical spine */}
          <div className="absolute left-[17px] top-3 bottom-3 w-[1px] bg-gradient-to-b from-transparent via-[#C5A46D]/25 to-transparent" />

          <div className="space-y-0">
            {CAREER_EVOLUTION_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Code2;
              const isLast = idx === CAREER_EVOLUTION_STEPS.length - 1;

              return (
                <div key={step.phase} className={`timeline-item relative flex gap-6 ${isLast ? '' : 'pb-10'}`}>
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-9 h-9 rounded-full bg-[#17181C] border border-[#C5A46D]/40 flex items-center justify-center text-[#C5A46D] shadow-[0_0_14px_rgba(197,164,109,0.15)]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-1 pt-0.5 flex-1">
                    {/* LEVEL 3: Period — monospace, muted */}
                    <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-[#5C5956]">
                      {step.period}
                    </span>

                    {/* LEVEL 1: Title — serif */}
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E5E0D8] mt-0.5 mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* LEVEL 2: Description — sans-serif, readable */}
                    <p className="text-sm text-[#9A9490] leading-relaxed max-w-lg">
                      {step.description}
                    </p>

                    {/* Key takeaway — slightly more visible than period, still quiet */}
                    <div className="mt-3 flex items-start gap-2">
                      <span className="font-mono text-[10px] text-[#C5A46D]/60 mt-0.5 shrink-0">→</span>
                      <span className="font-mono text-[10px] text-[#5C5956] leading-relaxed">{step.keyTakeaway}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
