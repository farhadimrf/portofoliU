import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WORKSHOP_PRACTICES } from '../data/portfolioData';

export const Workshop: React.FC = () => {
  return (
    <section id="workshop" className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="08"
          category="Engineering Standards"
          headline="THE WORKSHOP"
          subheadline="The tools behind the hunt. Quality is the natural consequence of rigorous automation, pre-commit hygiene, and unwavering engineering discipline."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {WORKSHOP_PRACTICES.map((practice, idx) => (
            <div
              key={idx}
              className="gothic-card p-6 sm:p-7 rounded-2xl flex flex-col gap-4 hover:border-[#C5A46D]/30 transition-all duration-300"
            >
              <div className="space-y-2">
                {/* LEVEL 3: Category — monospace, muted */}
                <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#5C5956]">
                  {practice.category}
                </span>

                {/* LEVEL 2: Title — sans-serif, prominent */}
                <h3 className="text-lg font-semibold text-[#E5E0D8] leading-snug">
                  {practice.title}
                </h3>

                <p className="text-sm text-[#9A9490] leading-relaxed">
                  {practice.description}
                </p>

                {/* Tool badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {practice.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#0D0D0F] border border-[rgba(255,255,255,0.055)] text-[11px] font-mono text-[#9A9490]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Standard */}
              <div className="pt-3 border-t border-[rgba(255,255,255,0.055)]">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5956] block mb-1">
                  Standard
                </span>
                <p className="text-xs text-[#C5A46D]/70 leading-relaxed">
                  {practice.standard}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
