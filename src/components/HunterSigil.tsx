import React from 'react';

interface HunterSigilProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  interactive?: boolean;
}

export const HunterSigil: React.FC<HunterSigilProps> = ({
  className = '',
  size = 'lg',
  interactive = true,
}) => {
  const sizeMap = {
    sm: 'w-16 h-36',
    md: 'w-20 h-44',
    lg: 'w-24 h-52 sm:w-32 sm:h-68 md:w-36 md:h-80',
    xl: 'w-40 h-88 sm:w-48 sm:h-[420px]',
  };

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background ethereal pulse halo */}
      <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-[#C5A46D]/10 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-[#8C2F39]/15 blur-2xl pointer-events-none" />

      <svg
        id="hunter-sigil"
        viewBox="0 0 200 420"
        className={`${sizeMap[size]} drop-shadow-[0_0_25px_rgba(197,164,109,0.3)] transition-all duration-700 hover:drop-shadow-[0_0_40px_rgba(230,34,34,0.55)] ${
          interactive ? 'cursor-pointer' : ''
        }`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Hunter's Mark Sigil"
      >
        {/* Center Vertical Blade */}
        <path
          className="sigil-path"
          d="M 92 18 L 108 26 L 103 210 L 103 358 L 97 366 L 97 210 Z"
          fill="#E5E0D8"
          stroke="#C5A46D"
          strokeWidth="1.5"
        />

        {/* Upper Angular Diamond Horns */}
        <path
          className="sigil-path"
          d="M 100 196 L 176 292 L 138 360 L 148 346 L 166 292 L 100 216 L 34 292 L 52 346 L 62 360 L 24 292 Z"
          fill="#E5E0D8"
          stroke="#C5A46D"
          strokeWidth="1.5"
        />

        {/* Bottom Floating Ember Dot */}
        <circle
          className="sigil-dot"
          cx="100"
          cy="392"
          r="9"
          fill="#E5E0D8"
          stroke="#C5A46D"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
};
