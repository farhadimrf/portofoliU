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
      className={`mb-14 sm:mb-20 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}
    >
      {/* LEVEL 3: Atmospheric label — small, muted, monospace */}
      <div className={`flex items-center gap-2 mb-5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#5C5956]">
          {number}
        </span>
        <span className="w-4 h-[1px] bg-[#5C5956]/50" />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#5C5956]">
          {category}
        </span>
      </div>

      {/* LEVEL 1: Cinematic headline — serif, large, strong */}
      <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E5E0D8] leading-tight">
        {headline}
      </h2>

      {/* Slim gold ornamental divider — single, subtle */}
      <div className={`flex items-center gap-3 my-5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-8 h-[1px] bg-[#C5A46D]/50" />
        <div className="w-1 h-1 rotate-45 bg-[#8C2F39]/80" />
        <div className="w-8 h-[1px] bg-[#C5A46D]/50" />
      </div>

      {/* LEVEL 2: Readable subheadline — sans-serif, normal weight, constrained width */}
      {subheadline && (
        <p className="text-sm sm:text-base text-[#9A9490] leading-relaxed font-normal max-w-2xl mx-auto">
          {subheadline}
        </p>
      )}
    </div>
  );
};
