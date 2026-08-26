import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FUTURE_FRONTIERS } from '../data/portfolioData';
import { Layers, RefreshCcw, Smartphone, Server, Compass } from 'lucide-react';

const iconMap = { Layers, RefreshCcw, Smartphone, Server };

export const HuntersDream: React.FC = () => {
  return (
    <section id="hunters-dream" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="10"
          category="Research & Focus Areas"
          headline="THE HUNT CONTINUES."
          subheadline="Engineering is a continuous evolution. These are the technical specializations and architectural paradigms I am actively advancing."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {FUTURE_FRONTIERS.map((frontier, idx) => {
            const Icon = iconMap[frontier.icon as keyof typeof iconMap] || Compass;

            return (
              <div
                key={idx}
                className="gothic-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-[#C5A46D]/40 transition-all duration-300 group bg-[#141519]/90 border-[rgba(255,255,255,0.06)] shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              >
                <div className="space-y-3">
                  {/* Top header row: Icon + Status Badge */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0D0D0F] border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D] group-hover:border-[#C5A46D]/60 transition-colors shrink-0 shadow-[0_0_10px_rgba(197,164,109,0.15)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#0D0D0F] border border-[rgba(255,255,255,0.08)] text-[#C5A46D] uppercase tracking-wider font-semibold">
                      {frontier.status}
                    </span>
                  </div>

                  {/* Headline Title */}
                  <h3 className="text-base sm:text-lg font-bold text-[#EAE6DF] leading-snug group-hover:text-[#C5A46D] transition-colors pt-1">
                    {frontier.title}
                  </h3>

                  {/* Description Paragraph */}
                  <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
                    {frontier.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
