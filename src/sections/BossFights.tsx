import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BOSS_FIGHTS } from '../data/portfolioData';
import { ChevronDown, ChevronUp, AlertCircle, Wrench, Trophy } from 'lucide-react';

export const BossFights: React.FC = () => {
  const [openBossId, setOpenBossId] = useState<string>(BOSS_FIGHTS[0].id);

  const toggleBoss = (id: string) => {
    setOpenBossId(openBossId === id ? '' : id);
  };

  return (
    <section id="boss-fights" className="py-20 md:py-28 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="06"
          category="Architectural Case Studies"
          headline="ARCHITECTURAL CHALLENGES"
          subheadline="Engineering depth is revealed when navigating race conditions, legacy technical debt, and multi-system scaling constraints."
        />

        <div className="space-y-3.5 max-w-4xl mx-auto">
          {BOSS_FIGHTS.map((boss, idx) => {
            const isOpen = openBossId === boss.id;

            return (
              <div
                key={boss.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#17181C] border-[#C5A46D]/45 shadow-[0_16px_40px_rgba(0,0,0,0.75)]'
                    : 'bg-[#17181C]/85 border-[rgba(255,255,255,0.06)] hover:border-[#C5A46D]/30 hover:bg-[#1A1B20]'
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleBoss(boss.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <span className="font-mono text-xs text-[#C5A46D] tracking-widest mt-1 shrink-0 font-bold">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#847F78]">
                          {boss.category}
                        </span>
                        {boss.metrics && (
                          <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#C5A46D]/15 text-[#C5A46D] border border-[#C5A46D]/30 font-semibold">
                            {boss.metrics}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#EAE6DF] leading-snug">
                        {boss.bossName}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#B8B2A7] mt-1 leading-relaxed">
                        {boss.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-lg bg-[#0D0D0F] border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#C5A46D] shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Content Breakdown: Problem, Engineering Approach, Impact */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[rgba(255,255,255,0.06)] space-y-5 animate-in fade-in duration-200">

                    {/* 1. Problem */}
                    <div className="p-4 rounded-xl bg-[#0D0D10]/80 border border-[#8C2F39]/25 space-y-1.5">
                      <div className="flex items-center gap-2 text-[#8C2F39]">
                        <AlertCircle className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-wider font-bold">
                          The Problem & Constraints
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed pl-6">
                        {boss.challenge}
                      </p>
                    </div>

                    {/* 2. Engineering Approach */}
                    <div className="p-4 rounded-xl bg-[#0D0D10]/80 border border-[#C5A46D]/25 space-y-1.5">
                      <div className="flex items-center gap-2 text-[#C5A46D]">
                        <Wrench className="w-4 h-4" />
                        <span className="font-mono text-xs uppercase tracking-wider font-bold">
                          Engineering Approach & Architecture
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-[#EAE6DF] leading-relaxed pl-6">
                        {boss.approach}
                      </p>
                    </div>

                    {/* 3. Applied Technologies */}
                    <div className="space-y-2">
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#847F78] block font-semibold">
                        Applied Technologies
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {boss.appliedTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-[#0D0D0F] border border-[rgba(255,255,255,0.08)] text-xs sm:text-sm font-mono text-[#EAE6DF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 4. Impact & Outcome */}
                    <div className="p-4 rounded-xl bg-[#141519] border border-emerald-800/30 flex items-start gap-3">
                      <Trophy className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div className="space-y-0.5">
                        <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-semibold block">
                          Production Impact
                        </span>
                        <p className="text-sm sm:text-base text-[#EAE6DF] font-medium leading-relaxed">
                          {boss.outcome}
                        </p>
                      </div>
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
