import React from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye } from 'lucide-react';

/**
 * InsightLore — intentionally understated.
 * A quiet interlude between sections. Should feel discovered, not announced.
 */
export const InsightLore: React.FC = () => {
  const { insightCount, maxInsight, principles, setIsModalOpen } = useInsight();

  return (
    <section id="insight" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">

        {/* Minimal eye icon */}
        <div className="flex justify-center mb-6">
          <div className="w-11 h-11 rounded-full bg-[#17181C] border border-[#C5A46D]/40 flex items-center justify-center text-[#C5A46D] animate-pulse-glow shadow-[0_0_15px_rgba(197,164,109,0.2)]">
            <Eye className="w-5 h-5" />
          </div>
        </div>

        {/* Header content centered */}
        <div className="max-w-2xl mx-auto mb-8">
          {/* LEVEL 1: Serif quote */}
          <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-bold text-[#EAE6DF] leading-snug mb-3">
            "The deeper your insight, the simpler the architecture becomes."
          </h2>

          {/* LEVEL 2: Readable body */}
          <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
            Every complex system problem has already been solved by adhering to fundamental engineering discipline.
          </p>
        </div>

        {/* Insight status */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="font-mono text-xs text-[#C5A46D] tracking-widest uppercase font-semibold">
            Insight Knowledge: {String(insightCount).padStart(2, '0')} / {String(maxInsight).padStart(2, '0')}
          </span>
        </div>

        {/* Full-width Axiom cards grid */}
        {principles.slice(0, 3).length > 0 && (
          <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 text-left">
            {principles.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="p-6 flex flex-col justify-between min-h-[220px] rounded-xl bg-[#121316] border border-white/[0.06] hover:border-[#C5A46D]/40 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <span className="text-xs font-mono text-[#C5A46D] tracking-wider mb-3 block">
                    Axiom 0{item.id} · {item.title.replace('Axiom of ', '')}
                  </span>
                  <p className="text-sm sm:text-base text-[#EAE6DF] font-sans leading-relaxed flex-grow">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-[#847F78]">
                  <span>Architectural Axiom</span>
                  <span className="text-[#C5A46D]">Core Truth</span>
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
        </div>
      </div>
    </section>
  );
};
