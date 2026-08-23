import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { useInsight } from '../hooks/useInsight';
import { Eye, Sparkles, Key } from 'lucide-react';

export const InsightLore: React.FC = () => {
  const { insightCount, principles, incrementInsight, setIsModalOpen } = useInsight();

  return (
    <section id="insight" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="09"
          category="INSIGHT"
          headline="Architectural Wisdom & Core Axioms"
          subheadline="As you venture deeper into the codebase, clarity replaces illusion. Insight reveals the underlying truths of resilient software design."
        />

        {/* Insight Interactive Altar */}
        <div className="max-w-4xl mx-auto gothic-card p-6 sm:p-10 rounded-2xl border-[#C5A46D]/40 text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#C5A46D]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            {/* Insight Counter Badge */}
            <div className="inline-flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-[#0D0D0F] border-2 border-[#C5A46D] flex items-center justify-center text-[#C5A46D] shadow-[0_0_30px_rgba(197,164,109,0.3)] animate-pulse-glow">
                <Eye className="w-8 h-8" />
              </div>
              <span className="font-mono text-sm uppercase text-[#C5A46D] tracking-[0.25em] font-bold mt-2">
                INSIGHT LEVEL: {insightCount.toString().padStart(2, '0')}
              </span>
            </div>

            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E5E0D8] max-w-xl mx-auto">
              "The deeper your insight, the simpler the architecture becomes."
            </h3>

            <p className="text-xs sm:text-sm text-[#9B9488] max-w-lg mx-auto leading-relaxed">
              Every complex problem has already been solved by adhering to fundamental engineering discipline. Click below to inspect unlocked architectural axioms.
            </p>

            {/* Quick Principles Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-left">
              {principles.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-lg bg-[#0D0D0F]/80 border border-[#2C2D35] space-y-1"
                >
                  <span className="text-[10px] font-mono text-[#C5A46D] uppercase block">
                    {item.title}
                  </span>
                  <p className="text-xs text-[#E5E0D8] font-cinzel italic line-clamp-2">
                    "{item.quote}"
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Actions */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded bg-gradient-to-r from-[#C5A46D] to-[#dfbe88] hover:from-[#dfbe88] hover:to-[#C5A46D] text-[#0D0D0F] font-cinzel font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(197,164,109,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Open Full Archives of Insight</span>
              </button>

              <button
                onClick={() => incrementInsight(1)}
                className="px-5 py-3 rounded bg-[#17181C] hover:bg-[#212228] border border-[#C5A46D]/30 text-[#E5E0D8] text-xs font-mono tracking-wider transition-all flex items-center gap-2 cursor-pointer"
              >
                <Key className="w-4 h-4 text-[#C5A46D]" />
                <span>Commune (+1 Insight)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
