import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WORKSHOP_PRACTICES } from '../data/portfolioData';
import { CheckCircle } from 'lucide-react';

export const Workshop: React.FC = () => {
  return (
    <section id="workshop" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="08"
          category="THE WORKSHOP"
          headline="The Tools & Discipline Behind the Craft"
          subheadline="Quality is not an accident of genius; it is the natural consequence of rigorous automation, pre-commit hygiene, and unwavering standards."
        />

        {/* 4-Card Practice Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {WORKSHOP_PRACTICES.map((practice, idx) => (
            <div
              key={idx}
              className="gothic-card p-6 sm:p-7 rounded-xl flex flex-col justify-between space-y-4 hover:border-[#C5A46D]/40 transition-all duration-300"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
                    {practice.category}
                  </span>
                  <div className="w-6 h-6 rounded bg-[#0D0D0F] border border-[#2C2D35] flex items-center justify-center text-[#9B9488] text-xs font-mono">
                    0{idx + 1}
                  </div>
                </div>

                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E5E0D8]">
                  {practice.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9B9488] leading-relaxed">
                  {practice.description}
                </p>

                {/* Tool Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {practice.tools.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-[#0D0D0F] border border-[#2C2D35] text-xs font-mono text-[#E5E0D8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Standard Guarantees */}
              <div className="pt-4 border-t border-[#2C2D35]/80 flex items-start gap-2 text-xs font-mono text-[#C5A46D]">
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
