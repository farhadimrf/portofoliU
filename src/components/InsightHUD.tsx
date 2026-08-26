import React from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye, X, ChevronRight } from 'lucide-react';

/**
 * InsightHUD — intentionally understated.
 * It should feel like an Easter egg discovered naturally,
 * not a primary UI system competing with section headings.
 */
export const InsightHUD: React.FC = () => {
  const {
    insightCount,
    maxInsight,
    setIsModalOpen,
    activeToast,
    dismissToast,
  } = useInsight();

  return (
    <aside
      aria-label="Insight"
      className="fixed bottom-5 left-5 z-40 flex flex-col items-start gap-2.5 select-none pointer-events-auto"
    >
      {/* Toast — appears briefly when insight is gained */}
      {activeToast && (
        <div
          onClick={() => setIsModalOpen(true)}
          className="max-w-xs p-4 rounded-2xl bg-[#17181C]/95 border border-[#C5A46D]/50 shadow-[0_12px_32px_rgba(0,0,0,0.85)] backdrop-blur-xl animate-in slide-in-from-bottom-3 fade-in duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
              Axiom {String(activeToast.axiomNumber).padStart(2, '0')}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dismissToast();
              }}
              className="text-[#847F78] hover:text-[#EAE6DF] transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="font-cinzel text-xs sm:text-sm text-[#EAE6DF] italic leading-snug">
            "{activeToast.quote}"
          </p>
          <div className="flex items-center justify-end mt-2 text-xs font-mono text-[#C5A46D] group-hover:text-[#dfbe88] transition-colors font-medium">
            View archives <ChevronRight className="w-3 h-3 ml-0.5" />
          </div>
        </div>
      )}

      {/* Floating indicator — small, unobtrusive */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#17181C]/90 hover:bg-[#17181C] border border-[rgba(255,255,255,0.08)] hover:border-[#C5A46D]/45 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 cursor-pointer group"
        title="Open Insight Archives"
      >
        <Eye className="w-3.5 h-3.5 text-[#C5A46D] group-hover:scale-110 transition-transform" />
        <span className="font-mono text-xs text-[#B8B2A7] group-hover:text-[#EAE6DF] transition-colors tracking-wider font-semibold">
          {String(insightCount).padStart(2, '0')}/{String(maxInsight).padStart(2, '0')}
        </span>
      </button>
    </aside>
  );
};
