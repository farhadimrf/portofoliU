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
  { label: 'Boss Fights', href: '#boss-fights' },
  { label: 'Arsenal', href: '#arsenal' },
  { label: 'Workshop', href: '#workshop' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { insightCount, maxInsight, setIsModalOpen, incrementInsight } = useInsight();

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
          ? 'bg-[#0A0A0C]/90 backdrop-blur-md border-b border-[#C5A46D]/15 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.85)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
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
            <div className="w-8 h-8 rounded bg-[#141519] border border-[#C5A46D]/30 flex items-center justify-center group-hover:border-[#C5A46D] transition-colors shadow-[0_0_10px_rgba(197,164,109,0.1)]">
              <span className="font-cinzel text-xs font-bold text-[#C5A46D] tracking-wider group-hover:text-[#E8E3D9] transition-colors">
                {PERSONAL_INFO.shortName}
              </span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-cinzel text-xs font-semibold tracking-[0.2em] text-[#E8E3D9] group-hover:text-[#C5A46D] transition-colors">
                M. FARHADI
              </span>
              <span className="text-[10px] font-mono text-[#9E988F] tracking-widest uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
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
                      ? 'text-[#C5A46D] bg-[#141519] border border-[#C5A46D]/30 shadow-[0_0_12px_rgba(197,164,109,0.15)]'
                      : 'text-[#9E988F] hover:text-[#E8E3D9] hover:bg-[#141519]/50'
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
              className="group flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141519] border border-[#C5A46D]/30 hover:border-[#C5A46D] transition-all text-xs font-mono shadow-[0_0_15px_rgba(197,164,109,0.08)] cursor-pointer"
              title="Click to view discovered architectural insights"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#E8E3D9] group-hover:rotate-12 transition-all animate-pulse" />
              <span className="text-[#C5A46D] font-semibold tracking-wider">
                INSIGHT: <span className="text-[#E8E3D9]">{insightCount.toString().padStart(2, '0')}</span> / {maxInsight.toString().padStart(2, '0')}
              </span>
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#8C2F39]/50 bg-[#8C2F39]/15 hover:bg-[#8C2F39]/30 text-[#E8E3D9] text-xs font-cinzel tracking-wider transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#141519] border border-[#22232B] text-[#E8E3D9] hover:border-[#C5A46D]/40 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#22232B] bg-[#0A0A0C]/95 backdrop-blur-xl rounded-b-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-3 duration-200">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-4 py-2.5 rounded-lg text-sm text-[#9E988F] hover:text-[#E8E3D9] hover:bg-[#141519] font-cinzel tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#22232B] flex items-center justify-between">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded border border-[#8C2F39]/50 bg-[#8C2F39]/20 text-[#E8E3D9] text-xs font-cinzel tracking-wider"
              >
                <FileDown className="w-4 h-4 text-[#C5A46D]" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3 h-3 text-[#9E988F]" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
