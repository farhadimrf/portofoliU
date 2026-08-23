import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export const Regions: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  return (
    <section id="regions" className="py-24 md:py-36 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="04"
          category="THE REGIONS // CAREER CONQUESTS"
          headline="Career Experience & Milestones"
          subheadline="Every organization represents a unique engineering territory with distinct architectural constraints, team dynamics, and scale."
        />

        {/* Master-Detail Interactive Career Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Region List / Chronological Navigation (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedId;
              const isCurrent = exp.status === 'current';

              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer hover:-translate-y-1 ${
                    isSelected
                      ? 'bg-[#1C1D24] border-[#C5A46D] shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(197,164,109,0.15)]'
                      : 'bg-[#141519]/80 border-white/[0.06] border-t-white/[0.12] hover:border-[#C5A46D]/40 hover:bg-[#181920]'
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
                    <span className="font-mono text-[11px] text-[#9E988F]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-cinzel text-base sm:text-lg font-bold text-[#E8E3D9] group-hover:text-[#C5A46D] transition-colors">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-[#9E988F] font-normal">
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
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/35 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-6">
                {/* Header of Active Experience */}
                <div className="border-b border-[#22232B] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <div className="inline-flex items-center gap-2 text-xs font-mono text-[#C5A46D] uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activeExp.region}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#9E988F]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" /> {activeExp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" /> {activeExp.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8E3D9]">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#C5A46D] font-mono mt-1">
                    <Building2 className="w-4 h-4" />
                    <span>{activeExp.company}</span>
                    {activeExp.badge && (
                      <span className="px-2.5 py-0.5 rounded bg-[#8C2F39]/30 border border-[#8C2F39]/60 text-[#E8E3D9] text-xs font-mono">
                        {activeExp.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed">
                  {activeExp.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#E8E3D9] font-semibold">
                    Key Architectural & Engineering Contributions:
                  </h4>
                  <ul className="space-y-2.5">
                    {activeExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9E988F] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-6 mt-6 border-t border-[#22232B]">
                <span className="block font-mono text-[11px] uppercase tracking-wider text-[#9E988F] mb-3">
                  Applied Technologies & Arsenal:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#0D0D10] border border-[#22232B] text-xs font-mono text-[#E8E3D9] hover:border-[#C5A46D]/40 transition-colors"
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
