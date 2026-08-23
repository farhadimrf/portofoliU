import React from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye, Sparkles, X, ChevronRight } from 'lucide-react';

export const InsightHUD: React.FC = () => {
  const {
    insightCount,
    maxInsight,
    setIsModalOpen,
    activeToast,
    dismissToast,
  } = useInsight();

  const formattedCount = insightCount.toString().padStart(2, '0');
  const formattedMax = maxInsight.toString().padStart(2, '0');

  return (
    <aside aria-label="Architectural Insight HUD" className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3 select-none pointer-events-auto">
      {/* Toast Takeaway Banner */}
      {activeToast && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="max-w-sm sm:max-w-md p-4 rounded-xl bg-[#141519]/95 border border-[#C5A46D]/60 border-t-[#C5A46D] shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(197,164,109,0.2)] backdrop-blur-xl animate-in slide-in-from-bottom-4 fade-in duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D] animate-ping" />
              <span className="font-mono text-[11px] text-[#C5A46D] uppercase tracking-widest font-bold">
                INSIGHT GAINED // AXIOM 0{activeToast.axiomNumber}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dismissToast();
              }}
              className="p-1 rounded text-[#9E988F] hover:text-[#E8E3D9] hover:bg-white/[0.05] transition-colors"
              aria-label="Dismiss takeaway toast"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="font-cinzel text-xs sm:text-sm font-semibold text-[#E8E3D9] italic group-hover:text-[#C5A46D] transition-colors leading-snug">
            "{activeToast.quote}"
          </p>

          <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#22232B] text-[10px] font-mono text-[#9E988F]">
            <span>Click to inspect axiom</span>
            <span className="text-[#C5A46D] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
              Archives <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}

      {/* Floating Status Indicator at bottom-left */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="group flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#141519]/90 hover:bg-[#1C1D24] border border-[#C5A46D]/35 hover:border-[#C5A46D] shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(197,164,109,0.12)] backdrop-blur-xl transition-all duration-300 cursor-pointer"
        title="Open Archives of Insight"
      >
        <div className="w-6 h-6 rounded-full bg-[#0D0D10] border border-[#C5A46D]/50 flex items-center justify-center text-[#C5A46D] group-hover:border-[#C5A46D] shadow-[0_0_10px_rgba(197,164,109,0.3)] transition-colors">
          <Eye className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform animate-pulse" />
        </div>

        <div className="flex items-center gap-1.5 font-mono text-xs tracking-wider">
          <span className="text-[#C5A46D] font-bold">INSIGHT:</span>
          <span className="text-[#E8E3D9] font-bold">[ {formattedCount} / {formattedMax} ]</span>
        </div>

        <Sparkles className="w-3.5 h-3.5 text-[#C5A46D]/60 group-hover:text-[#C5A46D] transition-colors" />
      </button>
    </aside>
  );
};
