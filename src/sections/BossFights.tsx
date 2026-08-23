import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BOSS_FIGHTS } from '../data/portfolioData';
import { ShieldAlert, ChevronDown, ChevronUp, Cpu, CheckCircle2 } from 'lucide-react';

export const BossFights: React.FC = () => {
  const [openBossId, setOpenBossId] = useState<string>(BOSS_FIGHTS[0].id);

  const toggleBoss = (id: string) => {
    setOpenBossId(openBossId === id ? '' : id);
  };

  return (
    <section id="boss-fights" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="06"
          category="BOSS FIGHTS"
          headline="Complex Engineering Challenges"
          subheadline="True technical depth is revealed when navigating intractable bottlenecks, legacy technical debt, and high-concurrency race conditions."
        />

        {/* Boss Fight Challenge Cards Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {BOSS_FIGHTS.map((boss, idx) => {
            const isOpen = openBossId === boss.id;

            return (
              <div
                key={boss.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#17181C] border-[#C5A46D]/60 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_20px_rgba(197,164,109,0.1)]'
                    : 'bg-[#121316]/80 border-[#2A2B33] hover:border-[#C5A46D]/30'
                }`}
              >
                {/* Header / Clickable bar */}
                <button
                  onClick={() => toggleBoss(boss.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-lg bg-[#0D0D0F] border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D] shrink-0 font-cinzel font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono uppercase text-[#C5A46D] tracking-wider">
                          {boss.category}
                        </span>
                        {boss.metrics && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#8C2F39]/20 text-[#E5E0D8] border border-[#8C2F39]/40">
                            {boss.metrics}
                          </span>
                        )}
                      </div>
                      <h3 className="font-cinzel text-base sm:text-lg md:text-xl font-bold text-[#E5E0D8]">
                        {boss.bossName}
                      </h3>
                      <p className="text-xs text-[#9B9488] font-normal hidden sm:block">
                        {boss.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-[#0D0D0F] border border-[#2C2D35] text-[#C5A46D] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Content Area */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#2C2D35]/80 space-y-5 animate-in fade-in duration-300 text-sm">
                    {/* Challenge Block */}
                    <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#8C2F39]/30 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C2F39] uppercase font-bold tracking-wider">
                        <ShieldAlert className="w-4 h-4" />
                        <span>The Production Bottleneck</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#9B9488] leading-relaxed pl-6">
                        {boss.challenge}
                      </p>
                    </div>

                    {/* Approach & Applied Tech */}
                    <div className="p-4 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C5A46D] uppercase font-bold tracking-wider">
                        <Cpu className="w-4 h-4" />
                        <span>Architectural Approach & Methodology</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E5E0D8]/90 leading-relaxed pl-6">
                        {boss.approach}
                      </p>

                      <div className="pl-6 pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono text-[#9B9488]">Applied Arsenal:</span>
                        {boss.appliedTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded bg-[#17181C] border border-[#C5A46D]/30 text-[11px] font-mono text-[#C5A46D]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome Block */}
                    <div className="p-4 rounded-lg bg-[#141B17] border border-emerald-800/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Measurable Engineering Outcome</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E5E0D8]/90 leading-relaxed pl-6">
                        {boss.outcome}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
