import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ARSENAL } from '../data/portfolioData';
import { CheckCircle2 } from 'lucide-react';
import type { ArsenalItem } from '../types';

export const Arsenal: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<ArsenalItem>(ARSENAL[0]);

  return (
    <section id="arsenal" className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="07"
          category="Hunter's Arsenal"
          headline="THE HUNTER'S ARSENAL"
          subheadline="Mastery lies in deep familiarity with runtime mechanics, compiler behavior, and architectural trade-offs — not in arbitrary percentages."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Technology selector */}
          <div className="lg:col-span-5 space-y-2">
            {ARSENAL.map((item) => {
              const isSelected = selectedWeapon.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedWeapon(item)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-[#1C1D24] border-[#C5A46D]/40 shadow-[0_10px_28px_rgba(0,0,0,0.7)]'
                      : 'bg-[#17181C]/80 border-[rgba(255,255,255,0.055)] hover:border-[#C5A46D]/25 hover:bg-[#1A1B20]'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-0.5 bg-[#C5A46D] rounded-r shadow-[0_0_6px_#C5A46D]" />
                  )}

                  <div className="flex items-center justify-between">
                    <div>
                      {/* LEVEL 3: Weapon archetype — monospace, very muted */}
                      <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#5C5956] block mb-0.5">
                        {item.archetype}
                      </span>
                      {/* LEVEL 2: Tech name — primary, readable */}
                      <h3 className="text-base font-semibold text-[#E5E0D8] group-hover:text-[#C5A46D] transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#0D0D0F] text-[#5C5956] uppercase border border-[rgba(255,255,255,0.055)]">
                      {item.category}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Technology deep dive */}
          <div className="lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/25 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5">

                {/* Header */}
                <div className="border-b border-[rgba(255,255,255,0.055)] pb-4">
                  {/* LEVEL 3: Archetype — tiny, muted */}
                  <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#5C5956] block mb-1.5">
                    {selectedWeapon.archetype}
                  </span>
                  {/* LEVEL 2: Tech name — large, sans-serif */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#E5E0D8]">
                    {selectedWeapon.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9A9490] leading-relaxed">
                  {selectedWeapon.masteryDescription}
                </p>

                {/* Capabilities */}
                <div className="space-y-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5956] block">
                    Core Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedWeapon.keyStrengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0D0D0F]/80 border border-[rgba(255,255,255,0.055)] text-xs text-[#9A9490]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]/50 shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Production role */}
              <div className="pt-5 mt-5 border-t border-[rgba(255,255,255,0.055)]">
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5956] block mb-1.5">
                  Production Use
                </span>
                <p className="text-sm text-[#C5A46D]/80 leading-relaxed">
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
