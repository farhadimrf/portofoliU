import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export const Regions: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  return (
    <section id="regions" className="py-28 md:py-40 relative z-10">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="04"
          category="Career Territories"
          headline="THE CONQUERED REGIONS"
          subheadline="Every organization represents a unique engineering territory with distinct architectural constraints and scale."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Experience list */}
          <div className="lg:col-span-5 space-y-2">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedId;
              const isCurrent = exp.status === 'current';

              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                    isSelected
                      ? 'bg-[#1C1D24] border-[#C5A46D]/40 shadow-[0_10px_28px_rgba(0,0,0,0.7)]'
                      : 'bg-[#17181C]/80 border-[rgba(255,255,255,0.055)] hover:border-[#C5A46D]/25 hover:bg-[#1A1B20]'
                  }`}
                >
                  {isSelected && (
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#C5A46D] rounded-r shadow-[0_0_6px_#C5A46D]" />
                  )}

                  <div className="flex items-center justify-between mb-1.5">
                    {/* LEVEL 3: Region name — monospace, muted */}
                    <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#5C5956]">
                      {exp.region}
                    </span>
                    <span className="font-mono text-[9px] text-[#5C5956]">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      {/* LEVEL 2: Company — sans-serif, readable */}
                      <h4 className="text-base font-semibold text-[#E5E0D8] group-hover:text-[#C5A46D] transition-colors leading-snug">
                        {exp.company}
                      </h4>
                      <p className="text-xs text-[#9A9490] mt-0.5">
                        {exp.role}
                      </p>
                    </div>

                    {isCurrent && (
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-700/40 text-emerald-400">
                        Active
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Experience detail */}
          <div className="lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/25 h-full flex flex-col justify-between relative overflow-hidden">
              <div className="space-y-5">

                {/* Header */}
                <div className="border-b border-[rgba(255,255,255,0.055)] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    {/* LEVEL 3: Region — tiny, muted */}
                    <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#5C5956]">
                      {activeExp.region}
                    </span>
                    <div className="flex items-center gap-3 text-[9px] font-mono text-[#5C5956]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {activeExp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {activeExp.location}
                      </span>
                    </div>
                  </div>

                  {/* LEVEL 2: Role — primary information */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E5E0D8] leading-snug">
                    {activeExp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-[#C5A46D] mt-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span className="font-medium">{activeExp.company}</span>
                    {activeExp.badge && (
                      <span className="px-2 py-0.5 rounded bg-[#8C2F39]/20 border border-[#8C2F39]/40 text-[#E5E0D8] text-[10px] font-mono">
                        {activeExp.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9A9490] leading-relaxed">
                  {activeExp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5956] block">
                    Key Contributions
                  </span>
                  <ul className="space-y-2">
                    {activeExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9A9490] leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D]/60 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech stack */}
              <div className="pt-5 mt-5 border-t border-[rgba(255,255,255,0.055)]">
                <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-[#5C5956] mb-2.5">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#0D0D0F] border border-[rgba(255,255,255,0.055)] text-[11px] font-mono text-[#9A9490] hover:border-[#C5A46D]/25 hover:text-[#E5E0D8] transition-colors"
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
