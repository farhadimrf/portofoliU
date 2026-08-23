import React from 'react';

interface SectionHeadingProps {
  number: string;
  category: string;
  headline: string;
  subheadline?: string;
  align?: 'center' | 'left';
  className?: string;
}

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
    <div className={`mb-12 sm:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${className}`}>
      {/* Top Roman / Gothic metadata tag */}
      <div className={`inline-flex items-center gap-3 mb-3.5 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A46D] px-3 py-1 rounded-md border border-[#C5A46D]/25 bg-[#141519]/90 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
          SECTION {number} // {category}
        </span>
      </div>

      {/* Primary Headline */}
      <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E8E3D9] leading-tight">
        {headline}
      </h2>

      {/* Ornamental Gothic Divider */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A46D]/60" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#8C2F39] border border-[#C5A46D]/50" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A46D]/60" />
      </div>

      {/* Subheadline / Contextual description */}
      {subheadline && (
        <p className="text-sm sm:text-base text-[#9E988F] leading-relaxed font-normal">
          {subheadline}
        </p>
      )}
    </div>
  );
};
