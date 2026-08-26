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
          className="max-w-xs p-3.5 rounded-xl bg-[#17181C]/95 border border-[#C5A46D]/40 shadow-[0_12px_32px_rgba(0,0,0,0.85)] backdrop-blur-xl animate-in slide-in-from-bottom-3 fade-in duration-300 cursor-pointer group"
        >
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="font-mono text-[9px] text-[#C5A46D]/70 uppercase tracking-[0.2em]">
              Axiom {String(activeToast.axiomNumber).padStart(2, '0')}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dismissToast();
              }}
              className="text-[#5C5956] hover:text-[#9A9490] transition-colors"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <p className="font-cinzel text-xs text-[#E5E0D8]/85 italic leading-snug">
            "{activeToast.quote}"
          </p>
          <div className="flex items-center justify-end mt-1.5 text-[9px] font-mono text-[#C5A46D]/50 group-hover:text-[#C5A46D]/80 transition-colors">
            View archives <ChevronRight className="w-2.5 h-2.5 ml-0.5" />
          </div>
        </div>
      )}

      {/* Floating indicator — small, unobtrusive */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#17181C]/80 hover:bg-[#17181C] border border-[rgba(255,255,255,0.055)] hover:border-[#C5A46D]/30 shadow-[0_4px_20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 cursor-pointer group"
        title="Open Insight Archives"
      >
        <Eye className="w-3 h-3 text-[#C5A46D]/60 group-hover:text-[#C5A46D] transition-colors" />
        <span className="font-mono text-[9px] text-[#5C5956] group-hover:text-[#9A9490] transition-colors tracking-[0.15em]">
          {String(insightCount).padStart(2, '0')}/{String(maxInsight).padStart(2, '0')}
        </span>
      </button>
    </aside>
  );
};
