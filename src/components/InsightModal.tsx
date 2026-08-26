import React from 'react';
import { useInsight } from '../hooks/useInsight';
import { X, ShieldAlert, CheckCircle2, Lock, Eye } from 'lucide-react';

export const InsightModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen, insightCount, principles } = useInsight();

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-[#141519] border border-[#C5A46D]/40 border-t-[#C5A46D] rounded-2xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_40px_rgba(197,164,109,0.15)] text-[#E8E3D9]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between border-b border-[#22232B] pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A46D]/15 border border-[#C5A46D]/50 flex items-center justify-center text-[#C5A46D] shadow-[0_0_15px_rgba(197,164,109,0.3)]">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#E8E3D9] tracking-wide">
                ARCHIVES OF INSIGHT
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A46D]">
                <span>INSIGHT DISCOVERED: {insightCount.toString().padStart(2, '0')} / 05</span>
                <span>•</span>
                <span className="text-[#9E988F]">Architectural Truths</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="p-2 rounded-lg text-[#9E988F] hover:text-[#E8E3D9] hover:bg-white/[0.06] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Introduction note */}
        <div className="bg-[#0D0D10]/90 border border-[rgba(255,255,255,0.08)] rounded-2xl p-4 mb-6 text-sm text-[#B8B2A7] leading-relaxed flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
          <p>
            In the complexity of enterprise systems, <strong className="text-[#EAE6DF]">Insight</strong> represents hard-won architectural clarity. These axioms distill lessons forged during high-concurrency production deployments and zero-downtime migrations.
          </p>
        </div>

        {/* Principles List */}
        <div className="space-y-4">
          {principles.map((item) => {
            const isUnlocked = insightCount >= item.id || item.unlocked;
            return (
              <div
                key={item.id}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 ${
                  isUnlocked
                    ? 'bg-[#1C1D24]/95 border-[#C5A46D]/45 shadow-[0_4px_20px_rgba(0,0,0,0.5)]'
                    : 'bg-[#101114]/60 border-white/[0.05] opacity-50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-bold">
                    AXIOM 0{item.id} · {item.title}
                  </span>
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-700/50 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Unlocked
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-[#847F78]">
                      <Lock className="w-3.5 h-3.5" /> Explore further to awaken
                    </span>
                  )}
                </div>

                {isUnlocked ? (
                  <>
                    <p className="font-cinzel text-base sm:text-lg font-bold text-[#EAE6DF] mb-2 italic">
                      "{item.quote}"
                    </p>
                    <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
                      {item.elaboration}
                    </p>
                  </>
                ) : (
                  <p className="font-mono text-xs text-[#847F78] italic">
                    [Explore sections of the portfolio to discover this architectural principle]
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
            className="px-6 py-2.5 rounded-lg border border-[#C5A46D]/40 bg-[#C5A46D]/15 hover:bg-[#C5A46D]/25 text-[#E8E3D9] font-cinzel text-xs uppercase tracking-widest transition-all cursor-pointer"
          >
            Return to the Showcase
          </button>
        </div>
      </div>
    </div>
  );
};
