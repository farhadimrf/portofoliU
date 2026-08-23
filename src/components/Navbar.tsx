import React, { useState, useEffect } from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye, Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'The Hunt', href: '#hero' },
  { label: 'The Hunter', href: '#hunter' },
  { label: 'Old Systems', href: '#old-systems' },
  { label: 'Experience', href: '#regions' },
  { label: 'The Great Hunt', href: '#great-hunt' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { insightCount, setIsModalOpen, incrementInsight } = useInsight();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section
      const sections = NAV_LINKS.map((l) => l.href.substring(1));
      for (const sectionId of sections.reverse()) {
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
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInsightClick = () => {
    incrementInsight(1);
    setIsModalOpen(true);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0D0D0F]/90 backdrop-blur-md border-b border-[#C5A46D]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Personal Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="group flex items-center gap-3 focus:outline-none"
          >
            {/* Small Rune Mark */}
            <div className="w-8 h-8 rounded-sm bg-[#17181C] border border-[#C5A46D]/30 flex items-center justify-center group-hover:border-[#C5A46D] transition-colors shadow-[0_0_10px_rgba(197,164,109,0.1)]">
              <span className="font-cinzel text-xs font-bold text-[#C5A46D] tracking-wider group-hover:text-[#E5E0D8] transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-cinzel text-xs font-semibold tracking-[0.2em] text-[#E5E0D8] group-hover:text-[#C5A46D] transition-colors">
                M. FARHADI
              </span>
              <span className="text-[10px] font-mono text-[#9B9488] tracking-widest uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 rounded text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'text-[#C5A46D] bg-[#17181C] border border-[#C5A46D]/30 shadow-[0_0_12px_rgba(197,164,109,0.15)]'
                      : 'text-[#9B9488] hover:text-[#E5E0D8] hover:bg-[#17181C]/50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Interactive Insight Counter Badge */}
            <button
              onClick={handleInsightClick}
              className="group flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#17181C] border border-[#C5A46D]/25 hover:border-[#C5A46D] transition-all text-xs font-mono shadow-[0_0_15px_rgba(197,164,109,0.08)] cursor-pointer"
              title="Click to view discovered architectural insights"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#E5E0D8] group-hover:rotate-12 transition-all animate-pulse" />
              <span className="text-[#C5A46D] font-semibold tracking-wider">
                INSIGHT: <span className="text-[#E5E0D8]">{insightCount.toString().padStart(2, '0')}</span>
              </span>
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#8C2F39]/40 bg-[#8C2F39]/15 hover:bg-[#8C2F39]/30 text-[#E5E0D8] text-xs font-cinzel tracking-wider transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#17181C] border border-[#2C2D35] text-[#E5E0D8] hover:border-[#C5A46D]/40 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#2C2D35] bg-[#0D0D0F]/95 backdrop-blur-xl rounded-b-xl p-4 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-2.5 rounded-lg text-sm text-[#9B9488] hover:text-[#E5E0D8] hover:bg-[#17181C] font-cinzel tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2C2D35] flex items-center justify-between">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#8C2F39]/40 bg-[#8C2F39]/20 text-[#E5E0D8] text-xs font-cinzel tracking-wider"
              >
                <FileDown className="w-4 h-4 text-[#C5A46D]" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3 h-3 text-[#9B9488]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
