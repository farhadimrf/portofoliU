import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ARSENAL } from '../data/portfolioData';
import { CheckCircle2, Sparkles, Wrench, ChevronDown, ChevronUp } from 'lucide-react';

export const Arsenal: React.FC = () => {
  const [selectedWeaponId, setSelectedWeaponId] = useState<string>(ARSENAL[0].id);
  const selectedWeapon = ARSENAL.find((a) => a.id === selectedWeaponId) || ARSENAL[0];

  const handleToggle = (id: string) => {
    setSelectedWeaponId(selectedWeaponId === id ? '' : id);
  };

  return (
    <section id="arsenal" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="07"
          category="Technical Skills & Proficiencies"
          headline="HUNTER'S ARSENAL"
          subheadline="Mastery lies in deep familiarity with runtime mechanics, compiler behavior, and architectural trade-offs — not in arbitrary percentages."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Technology selector (with Mobile Inline Accordion Drawer) */}
          <div className="lg:col-span-5 space-y-3">
            {ARSENAL.map((item) => {
              const isSelected = selectedWeaponId === item.id;

              return (
                <div key={item.id} className="space-y-2">
                  <button
                    onClick={() => handleToggle(item.id)}
                    className={`w-full text-left p-4 sm:p-4.5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1D24] border-[#C5A46D]/45 shadow-[0_10px_28px_rgba(0,0,0,0.7)]'
                        : 'bg-[#17181C]/90 border-[rgba(255,255,255,0.06)] hover:border-[#C5A46D]/30 hover:bg-[#1A1B20]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#C5A46D] rounded-r shadow-[0_0_8px_#C5A46D]" />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div>
                        {/* Technical Domain Archetype */}
                        <span className="font-mono text-[11px] text-[#C5A46D] tracking-wider uppercase block font-semibold mb-1">
                          {item.archetype}
                        </span>
                        {/* Real Technology Name */}
                        <h3 className="text-base sm:text-lg font-bold text-[#EAE6DF] group-hover:text-[#C5A46D] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {/* Mobile chevron indicator */}
                        <span className="lg:hidden text-[#C5A46D]">
                          {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Mobile Inline Accordion Drawer (visible only on < lg) */}
                  {isSelected && (
                    <div className="lg:hidden gothic-card p-5 rounded-2xl border-[#C5A46D]/35 bg-[#141519]/95 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
                      {/* Header */}
                      <div className="border-b border-[rgba(255,255,255,0.08)] pb-3">
                        <span className="font-mono text-xs tracking-widest uppercase text-[#C5A46D] font-semibold flex items-center gap-1.5 mb-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          {item.archetype}
                        </span>
                        <h4 className="text-base font-bold text-[#EAE6DF]">
                          {item.name}
                        </h4>
                      </div>

                      {/* Mastery Description */}
                      <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
                        {item.masteryDescription}
                      </p>

                      {/* Key Capabilities */}
                      <div className="space-y-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6DF] font-semibold flex items-center gap-1.5">
                          <Wrench className="w-3.5 h-3.5 text-[#C5A46D]" />
                          Core Capabilities
                        </span>
                        <div className="grid grid-cols-1 gap-2">
                          {item.keyStrengths.map((strength, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 p-2.5 rounded-xl bg-[#0D0D0F]/90 border border-[rgba(255,255,255,0.06)] text-xs text-[#EAE6DF]"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                              <span className="leading-snug">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Production Use */}
                      <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[#847F78] block mb-1 font-semibold">
                          Production Application
                        </span>
                        <p className="text-xs text-[#C5A46D] font-medium leading-relaxed">
                          {item.productionUse}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Technology deep dive (Desktop Master-Detail view) */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/30 h-full flex flex-col justify-between relative overflow-hidden bg-[#141519]/90">
              <div className="space-y-6">

                {/* Header */}
                <div className="border-b border-[rgba(255,255,255,0.08)] pb-5">
                  <span className="font-mono text-xs tracking-widest uppercase text-[#C5A46D] font-semibold flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    {selectedWeapon.archetype}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#EAE6DF]">
                    {selectedWeapon.name}
                  </h3>
                </div>

                {/* Mastery Description */}
                <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
                  {selectedWeapon.masteryDescription}
                </p>

                {/* Core Capabilities */}
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#EAE6DF] font-semibold flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-[#C5A46D]" />
                    Core Architectural Capabilities
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedWeapon.keyStrengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#0D0D0F]/90 border border-[rgba(255,255,255,0.06)] text-xs sm:text-sm text-[#EAE6DF]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span className="leading-snug">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Production Use */}
              <div className="pt-5 mt-6 border-t border-[rgba(255,255,255,0.08)]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#847F78] block mb-1 font-semibold">
                  Production Application
                </span>
                <p className="text-sm sm:text-base text-[#C5A46D] font-medium leading-relaxed">
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
