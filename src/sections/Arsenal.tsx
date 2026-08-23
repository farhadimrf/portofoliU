import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ARSENAL } from '../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import type { ArsenalItem } from '../types';

export const Arsenal: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<ArsenalItem>(ARSENAL[0]);

  return (
    <section id="arsenal" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="07"
          category="HUNTER'S ARSENAL"
          headline="Core Technologies & Frameworks"
          subheadline="Mastery of tools lies not in arbitrary percentages, but in deep familiarity with runtime mechanics, edge cases, and architectural trade-offs."
        />

        {/* Weapons of Choice Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Weapon Archetype Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {ARSENAL.map((item) => {
              const isSelected = selectedWeapon.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedWeapon(item)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-[#1D1E24] border-[#C5A46D] shadow-[0_0_25px_rgba(197,164,109,0.15)]'
                      : 'bg-[#141518]/80 border-[#2A2B33] hover:border-[#C5A46D]/40 hover:bg-[#18191E]'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#C5A46D] rounded-r shadow-[0_0_8px_#C5A46D]" />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#C5A46D]">
                      {item.archetype}
                    </span>
                    <span className="text-[10px] font-mono text-[#9B9488] uppercase">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#E5E0D8] group-hover:text-[#C5A46D] transition-colors">
                    {item.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Weapon Deep Breakdown Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-xl border-[#C5A46D]/30 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                {/* Header of Active Weapon */}
                <div className="border-b border-[#2C2D35] pb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A46D] uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{selectedWeapon.archetype}</span>
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E5E0D8]">
                    {selectedWeapon.name}
                  </h3>
                </div>

                {/* Master Description */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#9B9488] uppercase tracking-wider block font-semibold">
                    Architectural Utility:
                  </span>
                  <p className="text-sm sm:text-base text-[#E5E0D8]/90 leading-relaxed italic bg-[#0D0D0F]/60 p-4 rounded-lg border border-[#2A2B33]">
                    "{selectedWeapon.masteryDescription}"
                  </p>
                </div>

                {/* Key Strengths & Subsystems */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-wider block font-semibold">
                    Core Technical Strengths:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedWeapon.keyStrengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded bg-[#0D0D0F]/80 border border-[#2C2D35] text-xs text-[#E5E0D8]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Production Execution Footer */}
              <div className="pt-6 mt-6 border-t border-[#2C2D35] bg-[#141519]/50 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9B9488] block mb-1">
                  Enterprise Production Role:
                </span>
                <p className="text-xs sm:text-sm text-[#C5A46D] font-mono">
                  {selectedWeapon.productionUse}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
