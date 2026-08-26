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

      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      for (const sectionId of [...sections].reverse()) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          ? 'bg-[#0D0D0F]/90 backdrop-blur-lg border-b border-[rgba(255,255,255,0.055)] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="w-7 h-7 rounded bg-[#17181C] border border-[#C5A46D]/25 flex items-center justify-center group-hover:border-[#C5A46D]/50 transition-colors">
              <span className="font-cinzel text-[10px] font-bold text-[#C5A46D] group-hover:text-[#dfbe88] transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-cinzel text-[11px] font-semibold tracking-[0.18em] text-[#E5E0D8]/80 group-hover:text-[#C5A46D] transition-colors">
                M. FARHADI
              </span>
              <span className="text-[9px] font-mono text-[#5C5956] tracking-[0.18em] uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-1.5 rounded text-[11px] font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-[#C5A46D] bg-[#17181C] border border-[#C5A46D]/25'
                      : 'text-[#5C5956] hover:text-[#9A9490] hover:bg-[#17181C]/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right area */}
          <div className="flex items-center gap-2.5">

            {/* Insight — very small, subtle */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded text-[9px] font-mono text-[#5C5956] hover:text-[#9A9490] transition-colors cursor-pointer"
              title="Insight archives"
            >
              <Eye className="w-3 h-3" />
              <span>{String(insightCount).padStart(2,'0')}/{String(maxInsight).padStart(2,'0')}</span>
            </button>

            {/* Resume */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[rgba(255,255,255,0.08)] bg-[#17181C]/80 hover:border-[#C5A46D]/30 text-[#9A9490] hover:text-[#E5E0D8] text-[11px] font-cinzel tracking-wider transition-all"
            >
              <FileDown className="w-3 h-3 text-[#C5A46D]" />
              <span>Resume</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded bg-[#17181C] border border-[rgba(255,255,255,0.055)] text-[#9A9490] hover:border-[#C5A46D]/30 transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-[rgba(255,255,255,0.055)] bg-[#0D0D0F]/95 backdrop-blur-xl rounded-b-2xl p-4 space-y-1 animate-in fade-in slide-in-from-top-3 duration-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block px-4 py-2.5 rounded-lg text-sm text-[#9A9490] hover:text-[#E5E0D8] hover:bg-[#17181C] font-cinzel tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[rgba(255,255,255,0.055)]">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[rgba(255,255,255,0.08)] text-[#9A9490] text-xs font-cinzel tracking-wider"
              >
                <FileDown className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
