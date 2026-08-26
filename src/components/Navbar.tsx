import React, { useState, useEffect } from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye, Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'The Hunt', href: '#hero' },
  { label: 'The Hunter', href: '#hunter' },
  { label: 'Experience', href: '#regions' },
  { label: 'Projects', href: '#great-hunt' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { insightCount, maxInsight, setIsModalOpen } = useInsight();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Edge case: when user reaches near bottom of document, force active nav item to 'contact'
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      // Check top of page
      if (window.scrollY < 120) {
        setActiveSection('hero');
        return;
      }

      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      const viewportHeight = window.innerHeight;

      // Evaluate sections from bottom to top with clean viewport threshold
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Active when section top crosses into upper 35% of viewport
          if (rect.top <= viewportHeight * 0.35) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-md bg-[#0A0A0C]/85 border-b border-white/[0.06] py-3.5 shadow-[0_4px_24px_rgba(0,0,0,0.85)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* Logo with elegant clean MRF monogram */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#C5A46D] tracking-wider group-hover:text-[#dfbe88] transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <div className="hidden sm:flex flex-col">
              <span className="font-cinzel text-xs font-bold tracking-[0.18em] text-[#EAE6DF] group-hover:text-[#C5A46D] transition-colors">
                M. FARHADI
              </span>
              <span className="text-[10px] font-mono text-[#847F78] tracking-[0.18em] uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium tracking-wider transition-all duration-200 ${
                    isActive
                      ? 'text-[#C5A46D] bg-[#17181C] border border-[#C5A46D]/30 shadow-[0_0_12px_rgba(197,164,109,0.12)]'
                      : 'text-[#B8B2A7] hover:text-[#EAE6DF] hover:bg-[#17181C]/70'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right area */}
          <div className="flex items-center gap-3">

            {/* Insight — subtle indicator */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#847F78] hover:text-[#B8B2A7] hover:bg-[#17181C]/60 transition-colors cursor-pointer"
              title="Insight archives"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A46D]/70" />
              <span>{String(insightCount).padStart(2,'0')}/{String(maxInsight).padStart(2,'0')}</span>
            </button>

            {/* Resume CTA */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C5A46D]/35 bg-[#17181C]/90 hover:bg-[#C5A46D] text-[#EAE6DF] hover:text-[#0A0A0C] text-sm font-medium tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(197,164,109,0.15)] group"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#0A0A0C] transition-colors" />
              <span>Resume</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#17181C] border border-[rgba(255,255,255,0.08)] text-[#B8B2A7] hover:border-[#C5A46D]/40 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#EAE6DF]" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-[rgba(255,255,255,0.08)] bg-[#0D0D0F]/95 backdrop-blur-xl rounded-b-2xl p-4 space-y-1 animate-in fade-in slide-in-from-top-3 duration-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-[#B8B2A7] hover:text-[#EAE6DF] hover:bg-[#17181C] tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[rgba(255,255,255,0.08)]">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-3 rounded-lg border border-[#C5A46D]/40 bg-[#17181C] text-[#EAE6DF] text-sm font-medium tracking-wider"
              >
                <FileDown className="w-4 h-4 text-[#C5A46D]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
