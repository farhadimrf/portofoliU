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
      <div className={`inline-flex items-center gap-3 mb-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5A46D] px-2.5 py-0.5 rounded border border-[#C5A46D]/20 bg-[#17181C]/80">
          SECTION {number} // {category}
        </span>
      </div>

      {/* Primary Headline */}
      <h2 className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#E5E0D8] leading-tight">
        {headline}
      </h2>

      {/* Ornamental Gothic Divider */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C5A46D]/60" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#8C2F39] border border-[#C5A46D]/40" />
        <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C5A46D]/60" />
      </div>

      {/* Subheadline / Contextual description */}
      {subheadline && (
        <p className="text-sm sm:text-base text-[#9B9488] leading-relaxed font-normal">
          {subheadline}
        </p>
      )}
    </div>
  );
};
