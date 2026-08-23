import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export const Regions: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  return (
    <section id="regions" className="py-24 sm:py-32 relative z-10">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="04"
          category="THE REGIONS"
          headline="Career Experience & Conquests"
          subheadline="Every organization represents a unique engineering territory with distinct constraints, team dynamics, and scale."
        />

        {/* Master-Detail Interactive Career Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left: Region List / Chronological Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedId;
              const isCurrent = exp.status === 'current';

              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-[#1D1E24] border-[#C5A46D] shadow-[0_0_25px_rgba(197,164,109,0.15)]'
                      : 'bg-[#141518]/80 border-[#2A2B33] hover:border-[#C5A46D]/40 hover:bg-[#18191E]'
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isSelected && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-[#C5A46D] rounded-r shadow-[0_0_8px_#C5A46D]" />
                  )}

                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono text-xs text-[#C5A46D] uppercase tracking-wider font-semibold">
                      {exp.region}
                    </span>
                    <span className="font-mono text-[11px] text-[#9B9488]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#E5E0D8] group-hover:text-[#C5A46D] transition-colors">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-[#9B9488] font-normal">
                        {exp.role}
                      </p>
                    </div>

                    {isCurrent && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/50 text-emerald-300 animate-pulse">
                        Active
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Region Deep Dive (7 cols) */}
          <div className="lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-xl border-[#C5A46D]/30 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                {/* Header of Active Experience */}
                <div className="border-b border-[#2C2D35] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activeExp.region}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#9B9488]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" /> {activeExp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" /> {activeExp.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E5E0D8]">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#C5A46D] font-mono mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{activeExp.company}</span>
                    {activeExp.badge && (
                      <span className="px-2.5 py-0.5 rounded bg-[#8C2F39]/30 border border-[#8C2F39]/60 text-[#E5E0D8] text-xs">
                        {activeExp.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed">
                  {activeExp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#E5E0D8] font-semibold">
                    Key Architectural & Engineering Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9B9488] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-6 mt-6 border-t border-[#2C2D35]">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#9B9488] mb-3">
                  Applied Technologies & Arsenal:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#0D0D0F] border border-[#2C2D35] text-xs font-mono text-[#E5E0D8] hover:border-[#C5A46D]/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
