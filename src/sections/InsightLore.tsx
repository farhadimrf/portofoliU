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
    <section id="insight" className="py-20 md:py-28 relative z-10">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* Minimal eye icon */}
        <div className="flex justify-center mb-6">
          <div className="w-11 h-11 rounded-full bg-[#17181C] border border-[#C5A46D]/40 flex items-center justify-center text-[#C5A46D] animate-pulse-glow shadow-[0_0_15px_rgba(197,164,109,0.2)]">
            <Eye className="w-5 h-5" />
          </div>
        </div>

        {/* LEVEL 1: Serif quote */}
        <h2 className="font-cinzel text-xl sm:text-2xl font-bold text-[#EAE6DF] max-w-xl mx-auto leading-snug mb-3">
          "The deeper your insight, the simpler the architecture becomes."
        </h2>

        {/* LEVEL 2: Readable body */}
        <p className="text-sm sm:text-base text-[#B8B2A7] max-w-lg mx-auto leading-relaxed mb-8">
          Every complex system problem has already been solved by adhering to fundamental engineering discipline.
        </p>

        {/* Insight status */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="font-mono text-xs text-[#C5A46D] tracking-widest uppercase font-semibold">
            Insight Knowledge: {String(insightCount).padStart(2,'0')} / {String(maxInsight).padStart(2,'0')}
          </span>
        </div>

        {/* Quick principles preview — readable modern typography & uncut text */}
        {principles.slice(0, 3).length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
            {principles.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#17181C]/95 border border-[rgba(255,255,255,0.08)] flex flex-col justify-between space-y-3 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-[#C5A46D]/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold block mb-2">
                    Axiom 0{item.id} · {item.title.replace('Axiom of ', '')}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-[#EAE6DF] font-medium leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-2 border-t border-[rgba(255,255,255,0.06)]">
                  <span className="font-mono text-[11px] text-[#847F78]">Architectural Axiom</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2.5 rounded-xl bg-[#17181C] hover:bg-[#1C1D24] border border-[#C5A46D]/40 hover:border-[#C5A46D]/70 text-[#C5A46D] font-cinzel text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_15px_rgba(197,164,109,0.15)]"
          >
            <Eye className="w-4 h-4" />
            <span>Open Archives</span>
          </button>

          <button
            onClick={() => incrementInsight(1)}
            className="px-4 py-2.5 rounded-xl bg-[#17181C]/70 hover:bg-[#17181C] border border-[rgba(255,255,255,0.08)] text-[#B8B2A7] hover:text-[#EAE6DF] text-xs font-mono tracking-wider transition-all flex items-center gap-2 cursor-pointer"
          >
            <Key className="w-3.5 h-3.5 text-[#C5A46D]" />
            <span>Commune (+1)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
