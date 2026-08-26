import React from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye, Key } from 'lucide-react';

/**
 * InsightLore — intentionally understated.
 * A quiet interlude between sections. Should feel discovered, not announced.
 */
export const InsightLore: React.FC = () => {
  const { insightCount, maxInsight, principles, incrementInsight, setIsModalOpen } = useInsight();

  return (
    <section id="insight" className="py-28 md:py-36 relative z-10">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* Minimal eye icon — unassuming */}
        <div className="flex justify-center mb-6">
          <div className="w-10 h-10 rounded-full bg-[#17181C] border border-[#C5A46D]/25 flex items-center justify-center text-[#C5A46D]/60 animate-pulse-glow">
            <Eye className="w-5 h-5" />
          </div>
        </div>

        {/* LEVEL 1: Serif quote */}
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#E5E0D8] max-w-xl mx-auto leading-snug mb-3">
          "The deeper your insight, the simpler the architecture becomes."
        </h2>

        {/* LEVEL 2: Readable body */}
        <p className="text-sm text-[#9A9490] max-w-md mx-auto leading-relaxed mb-8">
          Every complex system problem has already been solved by adhering to fundamental engineering discipline.
        </p>

        {/* Insight status — small, monospace */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="font-mono text-[10px] text-[#5C5956] tracking-[0.22em] uppercase">
            Insight {String(insightCount).padStart(2,'0')} / {String(maxInsight).padStart(2,'0')}
          </span>
        </div>

        {/* Quick principles preview */}
        {principles.slice(0, 3).length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left">
            {principles.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-[#17181C]/80 border border-[rgba(255,255,255,0.055)] space-y-1"
              >
                <span className="font-mono text-[9px] text-[#5C5956] uppercase tracking-[0.2em] block">
                  Axiom {String(item.id).padStart(2,'0')}
                </span>
                <p className="text-xs text-[#E5E0D8]/75 font-cinzel italic line-clamp-2 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-lg bg-[#17181C] hover:bg-[#1C1D24] border border-[#C5A46D]/25 hover:border-[#C5A46D]/45 text-[#C5A46D] font-cinzel text-xs uppercase tracking-[0.18em] transition-all flex items-center gap-2 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Open Archives</span>
          </button>

          <button
            onClick={() => incrementInsight(1)}
            className="px-4 py-2.5 rounded-lg bg-[#17181C]/60 hover:bg-[#17181C] border border-[rgba(255,255,255,0.055)] text-[#9A9490] text-[11px] font-mono tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <Key className="w-3 h-3 text-[#C5A46D]/50" />
            <span>Commune (+1)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
