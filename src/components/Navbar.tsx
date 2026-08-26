import React, { useState, useEffect, useRef } from 'react';
import { useInsight } from '../hooks/useInsight';
import { Eye, Menu, X, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'The Hunt', href: '#hero', id: 'hero' },
  { label: 'The Hunter', href: '#hunter', id: 'hunter' },
  { label: 'Experience', href: '#regions', id: 'regions' },
  { label: 'Projects', href: '#great-hunt', id: 'great-hunt' },
  { label: 'Arsenal', href: '#arsenal', id: 'arsenal' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('The Hunt');
  const activeSectionRef = useRef('The Hunt');
  const { insightCount, maxInsight, setIsModalOpen } = useInsight();

  useEffect(() => {
    let ticking = false;

    const calculateActiveSection = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 1. Bottom of page priority: Force select Contact when reaching page bottom
      if (scrollY + windowHeight >= documentHeight - 80) {
        if (activeSectionRef.current !== 'Contact') {
          activeSectionRef.current = 'Contact';
          setActiveSection('Contact');
        }
        ticking = false;
        return;
      }

      // 2. Top of page priority: Select The Hunt
      if (scrollY < 120) {
        if (activeSectionRef.current !== 'The Hunt') {
          activeSectionRef.current = 'The Hunt';
          setActiveSection('The Hunt');
        }
        ticking = false;
        return;
      }

      // 3. Robust calculation based on getBoundingClientRect (avoids flicker and transform bugs)
      const targetLine = windowHeight * 0.38; // Virtual scanline offset
      let currentActive = activeSectionRef.current;

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetLine) {
            currentActive = item.label;
            break;
          }
        }
      }

      if (currentActive !== activeSectionRef.current) {
        activeSectionRef.current = currentActive;
        setActiveSection(currentActive);
      }

      ticking = false;
    };

    const onScroll = () => {
      setIsScrolled(window.scrollY > 30);
      if (!ticking) {
        window.requestAnimationFrame(calculateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    calculateActiveSection();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'backdrop-blur-xl bg-[#0A0A0C]/90 border-b border-white/[0.08] py-2.5 shadow-[0_4px_30px_rgba(0,0,0,0.9)]'
        : 'bg-transparent py-4'
        }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-4">

          {/* Logo with clean typography and no outer container border */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="group flex items-center gap-2.5 focus:outline-none shrink-0 whitespace-nowrap"
          >
            <span className="font-cinzel text-base sm:text-lg font-bold text-[#C5A46D] tracking-wider group-hover:text-[#dfbe88] transition-colors">
              {PERSONAL_INFO.shortName}
            </span>
            <div className="hidden md:flex flex-col">
              <span className="font-cinzel text-xs font-bold tracking-[0.16em] text-[#EAE6DF] group-hover:text-[#C5A46D] transition-colors">
                M. FARHADI
              </span>
              <span className="text-[9px] font-mono text-[#847F78] tracking-[0.16em] uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop navigation with unwrapped single-line layout */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.label;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`px-3 py-1.5 rounded-lg text-sm xl:text-sm font-medium tracking-wider whitespace-nowrap shrink-0 transition-colors duration-200 ${isActive
                    ? 'text-[#C5A46D] bg-[#17181C] border border-[#C5A46D]/40 shadow-[0_0_12px_rgba(197,164,109,0.15)] font-semibold'
                    : 'text-[#B8B2A7] hover:text-[#EAE6DF] hover:bg-[#17181C]/60 border border-transparent'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 whitespace-nowrap">
            {/* Insight Badge */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-mono text-[#847F78] hover:text-[#B8B2A7] hover:bg-[#17181C]/70 transition-colors cursor-pointer shrink-0"
              title="Insight archives"
            >
              <Eye className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>{String(insightCount).padStart(2, '0')}/{String(maxInsight).padStart(2, '0')}</span>
            </button>

            {/* Resume Button */}
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-[#C5A46D]/40 bg-[#17181C] hover:bg-[#C5A46D] text-[#EAE6DF] hover:text-[#0A0A0C] text-xs xl:text-sm font-medium tracking-wider transition-all duration-300 shadow-[0_0_12px_rgba(197,164,109,0.12)] shrink-0"
            >
              <FileDown className="w-3.5 h-3.5 text-[#C5A46D] group-hover:text-[#0A0A0C] transition-colors" />
              <span>Resume</span>
            </a>

            {/* Hamburger Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#17181C] border border-white/[0.08] text-[#B8B2A7] hover:border-[#C5A46D]/40 transition-colors shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#EAE6DF]" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/[0.08] bg-[#0D0D0F]/95 backdrop-blur-xl rounded-b-2xl p-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors ${activeSection === link.label
                  ? 'text-[#C5A46D] bg-[#17181C] font-semibold'
                  : 'text-[#B8B2A7] hover:text-[#EAE6DF] hover:bg-[#17181C]'
                  }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2.5 border-t border-white/[0.08]">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 rounded-lg border border-[#C5A46D]/40 bg-[#17181C] text-[#EAE6DF] text-xs font-medium tracking-wider"
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