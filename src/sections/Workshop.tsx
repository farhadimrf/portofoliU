import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WORKSHOP_PRACTICES } from '../data/portfolioData';
import { Wrench } from 'lucide-react';

export const Workshop: React.FC = () => {
  return (
    <section id="workshop" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="08"
          category="Engineering Maturity & Culture"
          headline="THE WORKSHOP"
          subheadline="The tools behind the hunt. Quality is the natural consequence of rigorous automation, pre-commit hygiene, and unwavering engineering discipline."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {WORKSHOP_PRACTICES.map((practice, idx) => (
            <div
              key={idx}
              className="gothic-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-5 hover:border-[#C5A46D]/40 transition-all duration-300 bg-[#141519]/90 border-[rgba(255,255,255,0.06)]"
            >
              <div className="space-y-3">
                {/* Category */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-wider uppercase text-[#C5A46D] font-semibold">
                    {practice.category}
                  </span>
                  <Wrench className="w-4 h-4 text-[#847F78]" />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#EAE6DF] leading-snug">
                  {practice.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
                  {practice.description}
                </p>

                {/* Tool badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {practice.tools.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#0D0D0F] border border-[rgba(255,255,255,0.08)] text-xs sm:text-sm font-mono text-[#EAE6DF]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Standard */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.08)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#847F78] block mb-1 font-semibold">
                  Standard & Guarantee
                </span>
                <p className="text-xs sm:text-sm text-[#C5A46D] font-medium leading-relaxed">
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
