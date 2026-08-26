import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCES } from '../data/portfolioData';
import { MapPin, Calendar, CheckCircle2, Building2, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

export const Regions: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(EXPERIENCES[0].id);
  const activeExp = EXPERIENCES.find((e) => e.id === selectedId) || EXPERIENCES[0];

  const handleToggle = (id: string) => {
    setSelectedId(selectedId === id ? '' : id);
  };

  return (
    <section id="regions" className="py-20 md:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="04"
          category="Career Territories"
          headline="THE CONQUERED REGIONS"
          subheadline="Every organization represents a unique engineering territory with distinct architectural constraints and scale."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Experience list (with Mobile Inline Accordion Drawer) */}
          <div className="lg:col-span-5 space-y-3">
            {EXPERIENCES.map((exp) => {
              const isSelected = exp.id === selectedId;
              const isCurrent = exp.status === 'current';

              return (
                <div key={exp.id} className="space-y-2">
                  <button
                    onClick={() => handleToggle(exp.id)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative group cursor-pointer ${
                      isSelected
                        ? 'bg-[#1C1D24] border-[#C5A46D]/45 shadow-[0_10px_28px_rgba(0,0,0,0.75)]'
                        : 'bg-[#17181C]/90 border-[rgba(255,255,255,0.06)] hover:border-[#C5A46D]/30 hover:bg-[#1A1B20]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-3.5 bottom-3.5 w-1 bg-[#C5A46D] rounded-r shadow-[0_0_8px_#C5A46D]" />
                    )}

                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs tracking-wider uppercase text-[#C5A46D] font-semibold">
                        {exp.region}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#847F78]">
                          {exp.period}
                        </span>
                        {/* Mobile chevron indicator */}
                        <span className="lg:hidden text-[#C5A46D]">
                          {isSelected ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#EAE6DF] group-hover:text-[#C5A46D] transition-colors leading-snug">
                          {exp.company}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#B8B2A7] mt-0.5 font-medium">
                          {exp.role}
                        </p>
                        {exp.subtitle && (
                          <p className="text-[11px] font-mono text-[#847F78] mt-0.5 line-clamp-1">
                            {exp.subtitle}
                          </p>
                        )}
                      </div>

                      {isCurrent && (
                        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-600/50 text-emerald-400 font-semibold shrink-0">
                          Active
                        </span>
                      )}
                    </div>
                  </button>

                  {/* Mobile Inline Accordion Drawer (visible only on < lg) */}
                  {isSelected && (
                    <div className="lg:hidden gothic-card p-5 rounded-2xl border-[#C5A46D]/35 bg-[#141519]/95 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200 shadow-[0_10px_25px_rgba(0,0,0,0.6)]">
                      {/* Header info */}
                      <div className="border-b border-[rgba(255,255,255,0.08)] pb-3 space-y-1.5">
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#B8B2A7]">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" /> {exp.location}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-[#C5A46D] pt-1">
                          <Building2 className="w-4 h-4 shrink-0" />
                          <span className="font-bold">{exp.company}</span>
                          {exp.subtitle && (
                            <span className="text-[11px] font-mono text-[#847F78] block w-full sm:w-auto">
                              · {exp.subtitle}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#B8B2A7] leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Key Contributions */}
                      <div className="space-y-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#EAE6DF] font-semibold flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-[#C5A46D]" />
                          Key Architectural Contributions
                        </span>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EAE6DF] leading-relaxed">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A46D] shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack */}
                      <div className="pt-3 border-t border-[rgba(255,255,255,0.08)] flex flex-wrap gap-1.5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-lg bg-[#0D0D0F] border border-[rgba(255,255,255,0.08)] text-[11px] font-mono text-[#EAE6DF]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Experience detail (Desktop Master-Detail view) */}
          <div className="hidden lg:block lg:col-span-7">
            <div className="gothic-card p-6 sm:p-8 rounded-2xl border-[#C5A46D]/30 h-full flex flex-col justify-between relative overflow-hidden bg-[#141519]/95 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
              <div className="space-y-6">

                {/* Header */}
                <div className="border-b border-[rgba(255,255,255,0.08)] pb-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs tracking-widest uppercase text-[#C5A46D] font-semibold">
                      {activeExp.region}
                    </span>
                    <div className="flex items-center gap-4 text-xs font-mono text-[#B8B2A7]">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#C5A46D]" /> {activeExp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#C5A46D]" /> {activeExp.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#EAE6DF] leading-snug">
                    {activeExp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2.5 text-sm sm:text-base text-[#C5A46D] mt-2">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span className="font-bold">{activeExp.company}</span>
                    {activeExp.subtitle && (
                      <span className="text-xs font-mono text-[#847F78]">
                        · {activeExp.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#B8B2A7] leading-relaxed">
                  {activeExp.description}
                </p>

                {/* Key Contributions */}
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-[#EAE6DF] font-semibold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-[#C5A46D]" />
                    Key Architectural Contributions
                  </span>
                  <ul className="space-y-2.5">
                    {activeExp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#EAE6DF] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.08)]">
                <span className="block font-mono text-xs uppercase tracking-wider text-[#847F78] mb-3 font-semibold">
                  Technologies Applied
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeExp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#0D0D0F] border border-[rgba(255,255,255,0.08)] text-xs sm:text-sm font-mono text-[#EAE6DF] hover:border-[#C5A46D]/40 transition-colors"
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
