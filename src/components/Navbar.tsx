import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAudit: () => void;
}

export default function Navbar({ activeSection, onNavigate, onOpenAudit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Process', id: 'how-it-works' },
    { label: 'Results', id: 'results' },
    { label: 'Pricing', id: 'pricing' },
  ];

  const handleMobileSelect = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-nav"
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2.5 sm:pt-5 px-3 sm:px-4 pointer-events-none"
    >
      {/* DESKTOP NAVBAR (hidden on mobile, visible md and up) */}
      <nav
        className={`pointer-events-auto hidden md:inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-3 py-2 transition-all duration-300 ${
          scrolled ? 'shadow-xl shadow-black/60 border-white/20' : 'shadow-md shadow-black/20'
        }`}
        aria-label="Desktop Navigation"
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
        <div className="w-px h-5 bg-stroke mx-1.5" />

        {/* Nav links */}
        <div className="flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => onNavigate(item.id)}
                className={`text-sm rounded-full px-3.5 py-1.5 transition-all duration-200 cursor-pointer ${
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
        <div className="w-px h-5 bg-stroke mx-1.5" />

        {/* Free Audit Button with gradient hover ring */}
        <div className="relative group">
          <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
          <span className="absolute -inset-[1px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <button
            id="nav-free-audit-btn"
            onClick={onOpenAudit}
            className="relative inline-flex items-center gap-1 text-sm rounded-full px-4 py-1.5 bg-surface backdrop-blur-md text-text-primary font-medium hover:text-white transition-all cursor-pointer"
          >
            <span>Free Audit</span>
            <span className="text-[11px] text-[#10B981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              ↗
            </span>
          </button>
        </div>
      </nav>

      {/* MOBILE NAVBAR (visible on mobile, hidden on md+) */}
      <div className="pointer-events-auto w-full max-w-md md:hidden relative flex flex-col items-center">
        <nav
          id="mobile-nav-bar"
          className={`w-full flex items-center justify-between rounded-2xl backdrop-blur-xl border border-white/12 bg-surface/95 px-3.5 py-2 transition-all duration-300 ${
            scrolled ? 'shadow-2xl shadow-black/80 border-white/25' : 'shadow-lg shadow-black/40'
          }`}
          aria-label="Mobile Navigation"
        >
          {/* Mobile Logo */}
          <button
            id="mobile-nav-logo-btn"
            onClick={() => handleMobileSelect('hero')}
            className="flex items-center cursor-pointer active:scale-95 transition-transform"
            aria-label="Lawnflow Studio Home"
          >
            <Logo size="sm" />
          </button>

          {/* Right Mobile Actions: Quick Audit Pill + Hamburger Toggle */}
          <div className="flex items-center gap-2">
            <button
              id="mobile-nav-quick-audit-btn"
              onClick={onOpenAudit}
              className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 text-[#10B981] active:scale-95 transition-transform"
            >
              <span>Audit</span>
              <span className="text-[10px]">↗</span>
            </button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-text-primary active:scale-95 transition-all hover:bg-white/10"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <div
              id="mobile-menu-panel"
              className="w-full mt-2 p-3 rounded-2xl backdrop-blur-2xl border border-white/15 bg-surface/98 shadow-2xl shadow-black/90 flex flex-col gap-1.5 animate-in fade-in slide-in-from-top-3 duration-200"
            >
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    onClick={() => handleMobileSelect(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-semibold'
                        : 'text-neutral-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />}
                  </button>
                );
              })}

              {/* Full CTA inside mobile menu */}
              <div className="pt-2 border-t border-white/10 mt-1">
                <button
                  id="mobile-drawer-audit-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAudit();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-bg bg-text-primary hover:bg-[#10B981] hover:text-white transition-all shadow-lg active:scale-[0.98]"
                >
                  <span>Claim Free Video Audit</span>
                  <span className="text-sm">↗</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
