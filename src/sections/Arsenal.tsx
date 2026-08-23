import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ARSENAL } from '../data/portfolioData';
import { Sparkles, CheckCircle2, Shield, Code, Server, Wrench, Layers } from 'lucide-react';
import type { ArsenalItem } from '../types';

export const Arsenal: React.FC = () => {
  const [selectedWeapon, setSelectedWeapon] = useState<ArsenalItem>(ARSENAL[0]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const CATEGORIES = [
    { id: 'all', label: 'All Weapons', icon: Layers },
    { id: 'core', label: 'Frontend Core', icon: Code },
    { id: 'framework', label: 'Build & Frameworks', icon: Wrench },
    { id: 'backend', label: 'Backend & APIs', icon: Server },
    { id: 'data', label: 'Data & State', icon: Shield },
  ];

  const filteredArsenal =
    activeCategory === 'all'
      ? ARSENAL
      : ARSENAL.filter((item) => item.category === activeCategory);

  return (
    <section id="arsenal" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="07"
          category="HUNTER'S ARSENAL // BATTLE-TESTED TOOLCHAIN"
          headline="Core Technologies & Frameworks"
          subheadline="Mastery lies not in arbitrary percentages, but in deep familiarity with runtime mechanics, compiler behavior, and architectural trade-offs."
        />

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const matching = cat.id === 'all' ? ARSENAL[0] : ARSENAL.find((a) => a.category === cat.id);
                  if (matching) setSelectedWeapon(matching);
                }}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A46D] text-[#0A0A0C] font-bold shadow-[0_0_15px_rgba(197,164,109,0.35)]'
                    : 'bg-[#141519] text-[#9E988F] hover:text-[#E8E3D9] border border-white/[0.06]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Weapons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Weapon Archetype Selector (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {filteredArsenal.map((item) => {
              const isSelected = selectedWeapon.id === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedWeapon(item)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-[#1C1D24] border-[#C5A46D] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(197,164,109,0.2)]'
                      : 'bg-[#141519]/80 border-white/[0.06] border-t-white/[0.12] hover:border-[#C5A46D]/40 hover:bg-[#181920]'
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#C5A46D] rounded-r shadow-[0_0_8px_#C5A46D]" />
                  )}

                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#C5A46D] font-semibold">
                      {item.archetype}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D0D10] text-[#9E988F] uppercase border border-[#22232B]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#E8E3D9] group-hover:text-[#C5A46D] transition-colors">
                    {item.name}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Right Weapon Deep Breakdown Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/35 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                {/* Header of Active Weapon */}
                <div className="border-b border-[#22232B] pb-4">
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A46D] uppercase tracking-widest mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>TRICK WEAPON // {selectedWeapon.archetype}</span>
                  </div>
                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8E3D9]">
                    {selectedWeapon.name}
                  </h3>
                </div>

                {/* Master Architectural Utility */}
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#C5A46D] uppercase tracking-wider block font-semibold">
                    Architectural Utility & Runtime Mechanics:
                  </span>
                  <p className="text-sm sm:text-base text-[#E8E3D9]/90 leading-relaxed italic bg-[#0D0D10]/80 p-4 rounded-xl border border-[#22232B]">
                    "{selectedWeapon.masteryDescription}"
                  </p>
                </div>

                {/* Core Technical Strengths */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-[#9E988F] uppercase tracking-wider block font-semibold">
                    Core Technical Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedWeapon.keyStrengths.map((strength, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-[#0D0D10]/80 border border-[#22232B] text-xs text-[#E8E3D9]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0" />
                        <span>{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Production Execution Role */}
              <div className="pt-6 mt-6 border-t border-[#22232B] bg-[#0D0D10]/60 -mx-6 -mb-6 sm:-mx-8 sm:-mb-8 p-6 rounded-b-2xl">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#9E988F] block mb-1">
                  Enterprise Production Role:
                </span>
                <p className="text-xs sm:text-sm text-[#C5A46D] font-mono font-medium">
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
