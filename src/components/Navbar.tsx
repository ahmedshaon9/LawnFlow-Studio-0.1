import { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAudit: () => void;
}

export default function Navbar({ activeSection, onNavigate, onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'how-it-works' },
    { label: 'Results', id: 'results' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <header
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-3 sm:pt-5 px-3 sm:px-4 pointer-events-none"
    >
      <nav
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 sm:px-3 py-1.5 sm:py-2 transition-all duration-300 ${
          scrolled ? 'shadow-xl shadow-black/60 border-white/20' : 'shadow-md shadow-black/20'
        }`}
        aria-label="Main Navigation"
      >
        {/* Brand Logo Link */}
        <button
          id="nav-logo-btn"
          onClick={() => onNavigate('hero')}
          className="group relative flex items-center pr-2 pl-1 cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Lawnflow Studio Home"
        >
          <Logo size="sm" />
        </button>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 sm:mx-1.5" />

        {/* Nav links */}
        <div className="flex items-center space-x-0.5 sm:space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`text-xs sm:text-sm rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-text-primary bg-stroke/60 font-semibold'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/40'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-1 sm:mx-1.5" />

        {/* Free Audit Button with gradient hover ring */}
        <div className="relative group">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
          <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button
            id="nav-free-audit-btn"
            onClick={onOpenAudit}
            className="relative inline-flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-surface backdrop-blur-md text-text-primary font-medium hover:text-white transition-all cursor-pointer"
          >
            <span>Free Audit</span>
            <span className="text-[11px] text-[#10B981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              ↗
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
