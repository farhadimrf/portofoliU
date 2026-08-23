import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BOSS_FIGHTS } from '../data/portfolioData';
import {
  ChevronDown,
  ChevronUp,
  Cpu,
  CheckCircle2,
  AlertOctagon,
  Flame,
} from 'lucide-react';

export const BossFights: React.FC = () => {
  const [openBossId, setOpenBossId] = useState<string>(BOSS_FIGHTS[0].id);

  const toggleBoss = (id: string) => {
    setOpenBossId(openBossId === id ? '' : id);
  };

  return (
    <section id="boss-fights" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="06"
          category="BOSS FIGHTS // PRODUCTION CRISES CONQUERED"
          headline="Intractable Technical Bottlenecks"
          subheadline="True engineering depth is revealed when navigating race conditions, catastrophic technical debt, and multi-million-user scaling bottlenecks."
        />

        {/* Boss Fight Challenge Cards Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {BOSS_FIGHTS.map((boss, idx) => {
            const isOpen = openBossId === boss.id;

            return (
              <div
                key={boss.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#141519] border-[#C5A46D]/60 border-t-[#C5A46D] shadow-[0_16px_40px_rgba(0,0,0,0.85),0_0_24px_rgba(197,164,109,0.12)]'
                    : 'bg-[#141519]/70 border-white/[0.06] border-t-white/[0.12] hover:border-[#C5A46D]/40'
                }`}
              >
                {/* Clickable Header Bar */}
                <button
                  onClick={() => toggleBoss(boss.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-cinzel font-bold text-xs shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#C5A46D] text-[#0A0A0C] shadow-[0_0_15px_rgba(197,164,109,0.4)]'
                          : 'bg-[#0D0D10] border border-[#2A2B33] text-[#C5A46D]'
                      }`}
                    >
                      0{idx + 1}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[11px] font-mono uppercase text-[#C5A46D] tracking-wider font-semibold">
                          {boss.category}
                        </span>

                        {/* Explicit Threat Level Badge */}
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-[#8C2F39]/20 text-[#E8E3D9] border border-[#8C2F39]/60 font-bold uppercase tracking-wider">
                          <AlertOctagon className="w-3 h-3 text-[#8C2F39]" />
                          [ THREAT LEVEL: HIGH ]
                        </span>

                        {boss.metrics && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-300 border border-emerald-800/40">
                            {boss.metrics}
                          </span>
                        )}
                      </div>

                      <h3 className="font-cinzel text-base sm:text-lg md:text-xl font-bold text-[#E8E3D9]">
                        {boss.bossName}
                      </h3>
                      <p className="text-xs text-[#9E988F] font-normal hidden sm:block">
                        {boss.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="p-2 rounded-full bg-[#0D0D10] border border-[#22232B] text-[#C5A46D] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Structured Breakdown Content Area */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#22232B] space-y-4 animate-in fade-in duration-300 text-sm">
                    {/* 1. Problem / Production Bottleneck */}
                    <div className="p-4 rounded-lg bg-[#0D0D10]/90 border border-[#8C2F39]/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#8C2F39] uppercase font-bold tracking-wider">
                        <Flame className="w-4 h-4" />
                        <span>The Production Problem</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#9E988F] leading-relaxed pl-6">
                        {boss.challenge}
                      </p>
                    </div>

                    {/* 2. Architectural Approach */}
                    <div className="p-4 rounded-lg bg-[#0D0D10]/90 border border-[#22232B] space-y-3">
                      <div className="flex items-center gap-2 text-xs font-mono text-[#C5A46D] uppercase font-bold tracking-wider">
                        <Cpu className="w-4 h-4" />
                        <span>Architectural Approach & Methodology</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E8E3D9]/90 leading-relaxed pl-6">
                        {boss.approach}
                      </p>

                      {/* 3. Applied Technologies */}
                      <div className="pl-6 pt-2 flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-mono text-[#9E988F] uppercase">Applied Technologies:</span>
                        {boss.appliedTech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded bg-[#141519] border border-[#C5A46D]/35 text-xs font-mono text-[#C5A46D]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 4. Engineered Outcome */}
                    <div className="p-4 rounded-lg bg-[#0F1813] border border-emerald-800/40 space-y-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Engineered Outcome</span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#E8E3D9]/95 leading-relaxed pl-6 font-medium">
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
