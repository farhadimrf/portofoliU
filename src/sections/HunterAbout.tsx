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
    <section id="hunter" ref={sectionRef} className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="02"
          category="Engineering Evolution"
          headline="EVERY ENGINEER HAS A PATH."
          subheadline="From native device memory constraints to nation-scale enterprise architectures — technical mastery is forged through real production complexity."
        />

        {/* High-level progression breadcrumb — clean, scannable */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14 text-xs sm:text-sm font-mono tracking-wider uppercase">
          <span className="text-[#B8B2A7]">Android</span>
          <span className="text-[#C5A46D]">→</span>
          <span className="text-[#B8B2A7]">React</span>
          <span className="text-[#C5A46D]">→</span>
          <span className="text-[#B8B2A7]">Modern Web</span>
          <span className="text-[#C5A46D]">→</span>
          <span className="text-[#B8B2A7]">Architecture</span>
          <span className="text-[#C5A46D]">→</span>
          <span className="text-[#C5A46D] font-bold">Software Engineering</span>
        </div>

        {/* Vertical timeline — clean, scannable */}
        <div ref={timelineRef} className="max-w-3xl mx-auto relative">
          {/* Vertical spine */}
          <div className="absolute left-[19px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-transparent via-[#C5A46D]/35 to-transparent" />

          <div className="space-y-0">
            {CAREER_EVOLUTION_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Code2;
              const isLast = idx === CAREER_EVOLUTION_STEPS.length - 1;

              return (
                <div key={step.phase} className={`timeline-item relative flex gap-6 ${isLast ? '' : 'pb-10'}`}>
                  {/* Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-[#17181C] border border-[#C5A46D]/50 flex items-center justify-center text-[#C5A46D] shadow-[0_0_16px_rgba(197,164,109,0.2)]">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-1 pt-0.5 flex-1">
                    {/* Period Badge */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono text-xs tracking-wider uppercase text-[#C5A46D] font-semibold">
                        {step.period}
                      </span>
                      <span className="text-xs font-mono text-[#847F78]">· {step.era}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#EAE6DF] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed max-w-xl">
                      {step.description}
                    </p>

                    {/* Key takeaway */}
                    <div className="mt-3.5 flex items-start gap-2.5 p-3 rounded-xl bg-[#141519]/80 border border-[rgba(255,255,255,0.06)] max-w-xl">
                      <span className="font-mono text-xs text-[#C5A46D] mt-0.5 shrink-0 font-bold">→</span>
                      <span className="text-xs sm:text-sm text-[#EAE6DF] font-medium leading-relaxed">{step.keyTakeaway}</span>
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
