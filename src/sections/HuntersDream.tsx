import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { FUTURE_FRONTIERS } from '../data/portfolioData';
import { Network, Layers, Terminal, Server, ArrowUpRight, Compass } from 'lucide-react';

const iconMap = {
  Network,
  Layers,
  Terminal,
  Server,
};

export const HuntersDream: React.FC = () => {
  return (
    <section id="hunters-dream" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="10"
          category="THE HUNTER'S DREAM // FUTURE HORIZONS"
          headline="THE HUNT CONTINUES."
          subheadline="Engineering is a limitless frontier. These are the technical horizons and architectural domains I am actively exploring and mastering."
        />

        {/* Future Horizons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {FUTURE_FRONTIERS.map((frontier, idx) => {
            const Icon = iconMap[frontier.icon as keyof typeof iconMap] || Compass;

            return (
              <div
                key={idx}
                className="gothic-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between space-y-4 hover:border-[#C5A46D]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#0D0D10] border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D] group-hover:border-[#C5A46D] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0D0D10] border border-[#22232B] text-[#C5A46D] uppercase">
                      {frontier.status}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E8E3D9] group-hover:text-[#C5A46D] transition-colors">
                    {frontier.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#9E988F] leading-relaxed">
                    {frontier.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#22232B] flex items-center justify-between text-xs font-mono text-[#9E988F]">
                  <span>Domain Frontier 0{idx + 1}</span>
                  <span className="text-[#C5A46D] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Expanding <ArrowUpRight className="w-3 h-3" />
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
