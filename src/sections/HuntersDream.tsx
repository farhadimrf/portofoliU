import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FUTURE_FRONTIERS } from '../data/portfolioData';
import { Network, Layers, Terminal, Server, Compass, ArrowUpRight } from 'lucide-react';

const iconMap = { Network, Layers, Terminal, Server };

export const HuntersDream: React.FC = () => {
  return (
    <section id="hunters-dream" className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="10"
          category="The Hunter's Dream"
          headline="THE HUNT CONTINUES."
          subheadline="Engineering is a limitless frontier. These are the technical horizons I am actively exploring and mastering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {FUTURE_FRONTIERS.map((frontier, idx) => {
            const Icon = iconMap[frontier.icon as keyof typeof iconMap] || Compass;

            return (
              <div
                key={idx}
                className="gothic-card p-6 sm:p-7 rounded-2xl flex flex-col gap-4 hover:border-[#C5A46D]/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#0D0D0F] border border-[#C5A46D]/20 flex items-center justify-center text-[#C5A46D]/70 group-hover:border-[#C5A46D]/40 group-hover:text-[#C5A46D] transition-colors shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  {/* LEVEL 3: Status — monospace, small */}
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#0D0D0F] border border-[rgba(255,255,255,0.055)] text-[#5C5956] uppercase tracking-[0.15em]">
                    {frontier.status}
                  </span>
                </div>

                {/* LEVEL 2: Title */}
                <h3 className="text-base font-semibold text-[#E5E0D8] leading-snug group-hover:text-[#C5A46D] transition-colors">
                  {frontier.title}
                </h3>

                <p className="text-sm text-[#9A9490] leading-relaxed flex-1">
                  {frontier.description}
                </p>

                <div className="pt-2 border-t border-[rgba(255,255,255,0.055)] flex items-center justify-end">
                  <span className="text-[#C5A46D]/40 group-hover:text-[#C5A46D]/70 transition-colors flex items-center gap-1 text-[10px] font-mono">
                    Expanding <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
