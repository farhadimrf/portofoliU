import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { CAREER_EVOLUTION_STEPS, PERSONAL_INFO } from '../data/portfolioData';
import { Smartphone, Code2, Layers, Cpu, Compass, CheckCircle } from 'lucide-react';

const iconMap = {
  Smartphone,
  Code2,
  Layers,
  Cpu,
};

export const HunterAbout: React.FC = () => {
  return (
    <section id="hunter" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="02"
          category="THE HUNTER // PHILOSOPHY & EVOLUTION"
          headline="Every engineer has a path."
          subheadline="From native device memory constraints to nation-scale enterprise architectures, technical mastery is forged through confronting real production complexity."
        />

        {/* Narrative Intro Card */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl gothic-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A46D]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-4 h-4" /> Core Engineering Creed
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E8E3D9]">
                Discipline, Precision & Resilient Systems
              </h3>
              <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>
            <div className="shrink-0 flex flex-col gap-2.5 p-4 rounded-xl bg-[#0D0D10]/90 border border-[#22232B] text-xs font-mono w-full md:w-auto">
              <div className="flex items-center gap-2 text-[#E8E3D9]">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>6+ Years Engineering Experience</span>
              </div>
              <div className="flex items-center gap-2 text-[#E8E3D9]">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>40M+ End-User Platform Scale</span>
              </div>
              <div className="flex items-center gap-2 text-[#E8E3D9]">
                <CheckCircle className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Zero-Downtime Strangler Migrations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Career Evolution Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central spine line for desktop */}
          <div className="hidden md:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-[#C5A46D]/30 to-transparent" />

          <div className="space-y-8 sm:space-y-12">
            {CAREER_EVOLUTION_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap] || Code2;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={step.phase}
                  className={`relative flex flex-col md:flex-row items-center gap-6 sm:gap-10 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Card */}
                  <div className="w-full md:w-[calc(50%-40px)]">
                    <div className="gothic-card p-6 sm:p-7 rounded-xl hover:border-[#C5A46D]/40 transition-all duration-300 group hover:-translate-y-1">
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-widest font-semibold">
                          ERA {step.phase} // {step.era}
                        </span>
                        <span className="font-mono text-xs text-[#9E988F] bg-[#0D0D10] px-2.5 py-1 rounded border border-[#22232B]">
                          {step.period}
                        </span>
                      </div>

                      <h4 className="font-cinzel text-lg sm:text-xl font-bold text-[#E8E3D9] group-hover:text-[#C5A46D] transition-colors mb-2">
                        {step.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#9E988F] leading-relaxed mb-4">
                        {step.description}
                      </p>

                      <div className="pt-3 border-t border-[#22232B] flex items-start gap-2 text-xs font-mono text-[#E8E3D9]/90">
                        <span className="text-[#C5A46D] font-bold">Insight:</span>
                        <span>{step.keyTakeaway}</span>
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#141519] border-2 border-[#C5A46D]/50 text-[#C5A46D] shadow-[0_0_20px_rgba(197,164,109,0.2)] shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Spacer for desktop layout alignment */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
