import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileDown, Check, Copy, ArrowUp, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="pt-28 md:pt-40 pb-16 relative z-10 border-t border-[#22232B] bg-gradient-to-b from-[#0A0A0C] via-[#0E0F12] to-[#08080A]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <SectionHeading
          number="11"
          category="Initiate Conversation"
          headline="THE NIGHT IS NOT OVER"
          subheadline="Seeking high-impact software engineering roles, complex frontend architecture challenges, and mission-critical system modernizations."
        />

        {/* Contact Action Center */}
        <div className="max-w-3xl mx-auto gothic-card p-8 sm:p-12 rounded-2xl border-[#C5A46D]/40 text-center relative overflow-hidden mb-16">
          <div className="space-y-6">
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-[#E8E3D9]">
              Let's Build Something Exceptional.
            </h3>

            <p className="text-sm text-[#9E988F] max-w-md mx-auto leading-relaxed">
              Whether you are modernizing a legacy enterprise monolith or architecting a next-generation web application, let's connect.
            </p>

            {/* Email Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#C5A46D] hover:bg-[#dfbe88] text-[#0A0A0C] font-cinzel font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(197,164,109,0.35)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#141519] hover:bg-[#1C1D24] border border-[#22232B] hover:border-[#C5A46D]/40 text-[#E8E3D9] text-xs font-mono tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#C5A46D]" />
                    <span>Copy: {PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Grid */}
            <div className="pt-6 border-t border-[#22232B] flex flex-wrap items-center justify-center gap-4">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0D0D10] border border-[#22232B] hover:border-[#C5A46D]/50 text-xs font-mono text-[#E8E3D9] transition-all group"
              >
                <svg className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0D0D10] border border-[#22232B] hover:border-[#C5A46D]/50 text-xs font-mono text-[#E8E3D9] transition-all group"
              >
                <svg className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#8C2F39]/20 border border-[#8C2F39]/50 hover:bg-[#8C2F39]/30 text-xs font-cinzel text-[#E8E3D9] transition-all group"
              >
                <FileDown className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>

        {/* Minimal Footer Signature */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#1C1D24] text-xs font-mono text-[#9E988F]">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A46D] font-cinzel font-bold">{PERSONAL_INFO.shortName}</span>
            <span>•</span>
            <span>{PERSONAL_INFO.name} · Software Engineer</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#5E5B54]">Crafted with React, Vite, TypeScript & GSAP</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#141519] border border-[#22232B] text-[#C5A46D] hover:text-[#E8E3D9] hover:border-[#C5A46D] transition-colors cursor-pointer"
              title="Return to the Hunt (Top)"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
