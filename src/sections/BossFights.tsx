import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BOSS_FIGHTS } from '../data/portfolioData';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const BossFights: React.FC = () => {
  const [openBossId, setOpenBossId] = useState<string>(BOSS_FIGHTS[0].id);

  const toggleBoss = (id: string) => {
    setOpenBossId(openBossId === id ? '' : id);
  };

  return (
    <section id="boss-fights" className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="06"
          category="Architectural Challenges"
          headline="INTRACTABLE TECHNICAL CHALLENGES"
          subheadline="Engineering depth is revealed when navigating race conditions, legacy technical debt, and multi-system scaling constraints."
        />

        <div className="space-y-3 max-w-3xl mx-auto">
          {BOSS_FIGHTS.map((boss, idx) => {
            const isOpen = openBossId === boss.id;

            return (
              <div
                key={boss.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#17181C] border-[#C5A46D]/40 shadow-[0_16px_40px_rgba(0,0,0,0.7)]'
                    : 'bg-[#17181C]/70 border-[rgba(255,255,255,0.055)] hover:border-[#C5A46D]/25'
                }`}
              >
                {/* Header */}
                <button
                  onClick={() => toggleBoss(boss.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    {/* LEVEL 3: Number — monospace, dim */}
                    <span className="font-mono text-[10px] text-[#5C5956] tracking-[0.2em] mt-1 shrink-0">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    <div className="min-w-0">
                      {/* LEVEL 3: Category — monospace, muted */}
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5956] block mb-1">
                        {boss.category}
                      </span>

                      {/* LEVEL 1: Boss name — serif, clear */}
                      <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#E5E0D8]">
                        {boss.bossName}
                      </h3>

                      {/* LEVEL 2: Subtitle — sans, readable */}
                      <p className="text-xs text-[#9A9490] mt-1 hidden sm:block leading-relaxed">
                        {boss.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="text-[#C5A46D]/60 shrink-0 mt-1">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Content — editorial case study format */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[rgba(255,255,255,0.055)] space-y-5">

                    {/* Challenge */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5956]">
                        Challenge
                      </span>
                      <p className="text-sm text-[#9A9490] leading-relaxed max-w-2xl">
                        {boss.challenge}
                      </p>
                    </div>

                    {/* Approach */}
                    <div className="space-y-1.5">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5956]">
                        Approach
                      </span>
                      <p className="text-sm text-[#E5E0D8]/85 leading-relaxed max-w-2xl">
                        {boss.approach}
                      </p>
                    </div>

                    {/* Technology */}
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5956]">
                        Technology
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {boss.appliedTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#0D0D0F] border border-[rgba(255,255,255,0.055)] text-xs font-mono text-[#E5E0D8]/80"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Outcome */}
                    <div className="space-y-1.5 pt-1 border-t border-[rgba(255,255,255,0.055)]">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#5C5956]">
                        Outcome
                      </span>
                      <p className="text-sm text-[#E5E0D8]/90 leading-relaxed font-medium max-w-2xl">
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
