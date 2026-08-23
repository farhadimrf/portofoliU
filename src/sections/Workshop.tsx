import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WORKSHOP_PRACTICES } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';

export const Workshop: React.FC = () => {
  return (
    <section id="workshop" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="08"
          category="THE WORKSHOP // DISCIPLINE & TOOLING"
          headline="The Standards Behind the Craft"
          subheadline="Quality is not an accident of genius; it is the natural consequence of rigorous automation, pre-commit hygiene, and unwavering standards."
        />

        {/* 4-Card Practice Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {WORKSHOP_PRACTICES.map((practice, idx) => (
            <div
              key={idx}
              className="gothic-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#C5A46D]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                    {practice.category}
                  </span>
                  <div className="w-7 h-7 rounded bg-[#0D0D10] border border-[#22232B] flex items-center justify-center text-[#9E988F] text-xs font-mono">
                    0{idx + 1}
                  </div>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E8E3D9]">
                  {practice.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9E988F] leading-relaxed">
                  {practice.description}
                </p>

                {/* Tool Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {practice.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#0D0D10] border border-[#22232B] text-xs font-mono text-[#E8E3D9]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Standard Guarantees */}
              <div className="pt-4 border-t border-[#22232B] flex items-start gap-2 text-xs font-mono text-[#C5A46D]">
                <CheckCircle className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>Standard: {practice.standard}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
