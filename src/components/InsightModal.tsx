import React from 'react';
import { useInsight } from '../hooks/useInsight';
import { Sparkles, X, ShieldAlert, CheckCircle2, Lock } from 'lucide-react';

export const InsightModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen, insightCount, principles } = useInsight();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#17181C] border border-[#C5A46D]/30 rounded-lg p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_30px_rgba(197,164,109,0.1)] text-[#E5E0D8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#2C2D35] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#C5A46D]/15 border border-[#C5A46D]/40 flex items-center justify-center text-[#C5A46D]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E5E0D8] tracking-wide">
                ARCHIVES OF INSIGHT
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A46D]">
                <span>INSIGHT LEVEL: {insightCount.toString().padStart(2, '0')}</span>
                <span>•</span>
                <span className="text-[#9B9488]">Architectural Truths</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 rounded-lg text-[#9B9488] hover:text-[#E5E0D8] hover:bg-[#212228] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Introduction note */}
        <div className="bg-[#0D0D0F]/70 border border-[#2C2D35] rounded-md p-4 mb-6 text-xs sm:text-sm text-[#9B9488] leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
          <p>
            In the nightmare of complex legacy codebases, <strong className="text-[#E5E0D8]">Insight</strong> represents hard-won architectural clarity. These axioms distill lessons from production fires, migrations, and high-load systems.
          </p>
        </div>

        {/* Principles List */}
        <div className="space-y-4">
          {principles.map((item, idx) => {
            const isUnlocked = insightCount >= (idx + 1) * 2 || item.unlocked;
            return (
              <div
                key={item.id}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  isUnlocked
                    ? 'bg-[#212228]/80 border-[#C5A46D]/30 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                    : 'bg-[#121316]/50 border-[#2A2B33]/60 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider">
                    AXIOM 0{item.id} // {item.title}
                  </span>
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                      <CheckCircle2 className="w-3 h-3" /> Unlocked
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#6B665E]">
                      <Lock className="w-3 h-3" /> Requires Insight {(idx + 1) * 2}
                    </span>
                  )}
                </div>

                {isUnlocked ? (
                  <>
                    <p className="font-cinzel text-sm sm:text-base font-semibold text-[#E5E0D8] mb-2 italic">
                      "{item.quote}"
                    </p>
                    <p className="text-xs sm:text-sm text-[#9B9488] leading-relaxed">
                      {item.elaboration}
                    </p>
                  </>
                ) : (
                  <p className="font-mono text-xs text-[#6B665E] italic">
                    [Explore more sections of the portfolio to awaken this architectural principle]
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Close Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsModalOpen(false)}
            className="px-6 py-2.5 rounded border border-[#C5A46D]/40 bg-[#C5A46D]/10 hover:bg-[#C5A46D]/20 text-[#E5E0D8] font-cinzel text-xs uppercase tracking-widest transition-all"
          >
            Return to the Journey
          </button>
        </div>
      </div>
    </div>
  );
};
