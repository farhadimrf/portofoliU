import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0C] border-t border-white/[0.08] pt-12 pb-8 px-4 sm:px-6 lg:px-8 relative z-10 select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

        {/* Emblem / Monogram */}
        <div className="flex items-center justify-center mb-2">
          <span className="font-cinzel text-xl sm:text-2xl font-bold text-[#C5A46D] tracking-widest drop-shadow-[0_0_15px_rgba(197,164,109,0.35)]">
            MRF
          </span>
        </div>

        {/* Thematic Closing Quote */}
        <p className="font-cinzel text-xs sm:text-sm text-[#847F78] tracking-[0.16em] uppercase mt-2 mb-3">
          "Fear the legacy code."
        </p>
        {/* Quick Links & Socials */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 font-mono text-xs text-[#B8B2A7] my-3 flex-wrap">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A46D] transition-colors"
          >
            GitHub
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#C5A46D] transition-colors"
          >
            LinkedIn
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-[#C5A46D] transition-colors"
          >
            Email
          </a>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-[#C5A46D] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Divider */}
        <div className="w-full max-w-md h-[1px] bg-white/[0.06] my-6" />

        {/* Copyright */}
        <p className="text-[11px] font-mono text-[#66625C] tracking-wider uppercase">
          © 2026 MOHAMMADREZA FARHADI. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};
