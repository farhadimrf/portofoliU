import React from 'react';

interface SectionHeadingProps {
  number: string;
  category: string;
  headline: string;
  subheadline?: string;
  align?: 'center' | 'left';
  className?: string;
}

/**
 * SectionHeading — enforces the 3-level content hierarchy:
 *
 * LEVEL 3 (Atmosphere): `number` + `category` — tiny, muted, monospace
 * LEVEL 1 (Story):       `headline`             — large, serif, cinematic
 * LEVEL 2 (Information): `subheadline`           — readable, sans-serif, muted
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  headline,
  subheadline,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-10 sm:mb-14 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {/* LEVEL 3: Atmospheric label — small, muted, monospace */}
      <div className={`flex items-center gap-2 mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A46D] font-semibold">
          {number}
        </span>
        <span className="w-4 h-[1px] bg-[#C5A46D]/40" />
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#847F78] font-semibold">
          {category}
        </span>
      </div>

      {/* LEVEL 1: Cinematic headline — serif, large, strong */}
      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#EAE6DF] leading-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
        {headline}
      </h2>

      {/* Slim gold ornamental divider — single, subtle */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-8 h-[1px] bg-[#C5A46D]/50" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#8C2F39]" />
        <div className="w-8 h-[1px] bg-[#C5A46D]/50" />
      </div>

      {/* LEVEL 2: Readable subheadline — high contrast, comfortable line height */}
      {subheadline && (
        <p className="text-base sm:text-lg text-[#B8B2A7] leading-relaxed font-normal max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
};
