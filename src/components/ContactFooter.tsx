import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail } from 'lucide-react';
import Logo from './Logo';

interface ContactFooterProps {
  onOpenAudit: () => void;
}

const MARQUEE_TEXT = 'GET FOUND • GET CALLS • GET GROWING • ';
const REPEATED_MARQUEE = MARQUEE_TEXT.repeat(10);

export default function ContactFooter({ onOpenAudit }: ContactFooterProps) {
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  // GSAP Marquee: xPercent: -50, duration 40, ease "none", repeat -1
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const tween = gsap.to(marquee, {
      xPercent: -50,
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, []);

  return (
    <footer
      id="contact"
      className="relative bg-bg pt-16 md:pt-24 pb-10 md:pb-14 overflow-hidden border-t border-stroke/40"
    >
      {/* Sleek Dark Background with Ambient Logo Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full bg-gradient-to-t from-[#0099B2]/10 via-[#10B981]/10 to-transparent blur-[140px]" />
        <div 
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* GSAP Marquee Bar */}
      <div className="relative z-10 w-full overflow-hidden py-4 border-y border-stroke/50 bg-bg/60 backdrop-blur-md mb-16 md:mb-20">
        <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
          <span className="text-sm sm:text-base md:text-lg font-display tracking-[0.25em] uppercase text-text-primary/70">
            {REPEATED_MARQUEE}
          </span>
          <span className="text-sm sm:text-base md:text-lg font-display tracking-[0.25em] uppercase text-text-primary/70">
            {REPEATED_MARQUEE}
          </span>
        </div>
      </div>

      {/* CTA Block (centered) */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center mb-16 md:mb-20">
        {/* Brand Logo & Eyebrow */}
        <div className="flex flex-col items-center justify-center mb-6">
          <Logo size="md" className="mb-4" />
          <div className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.3em] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0099B2]" />
            Free. 3 minutes. Yours to keep.
            <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary leading-[1.1] sm:leading-[1.02] tracking-tight mb-4 sm:mb-6">
          See exactly why your competitors <span className="accent-gradient-text">outrank you.</span>
        </h2>

        {/* Subtext */}
        <p className="text-xs sm:text-sm md:text-base text-muted max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          We record a personal video for your business. If it&rsquo;s not useful, delete it
          and keep the info.
        </p>

        {/* Action Buttons with gradient hover border ring */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          {/* Main Free Audit Trigger */}
          <div className="relative group w-full sm:w-auto">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
            <button
              id="cta-get-free-audit-btn"
              onClick={onOpenAudit}
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-8 py-3.5 sm:py-4 bg-text-primary text-bg font-semibold text-xs sm:text-sm hover:bg-bg hover:text-text-primary transition-all duration-300 shadow-2xl hover:scale-105 cursor-pointer border border-transparent hover:border-[#10B981]/40"
            >
              <span>Get My Free Audit</span>
              <span className="text-sm sm:text-base leading-none">↗</span>
            </button>
          </div>

          {/* Calendly Booking Link */}
          <div className="relative group w-full sm:w-auto">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <a
              id="cta-calendly-btn"
              href="https://calendly.com/lawnflowstudio/30min"
              target="_blank"
              rel="noreferrer"
              className="relative w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3.5 sm:py-4 bg-surface border border-stroke text-text-primary hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 hover:scale-105 backdrop-blur-md cursor-pointer"
            >
              <span>Book 30-Min Call</span>
              <span className="text-xs text-[#10B981]">↗</span>
            </a>
          </div>
        </div>

        {/* Direct mail link with explicit normal text-white font color (never yellow) */}
        <div className="mt-8 flex justify-center">
          <a
            href="mailto:lawnflowstudio@gmail.com"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-surface/90 border border-stroke hover:border-stroke/80 transition-all text-xs cursor-pointer shadow-lg shadow-black/20"
          >
            <Mail className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="text-muted">Or email us directly:</span>
            <span className="text-white font-semibold underline underline-offset-4 decoration-stroke/80 group-hover:decoration-[#10B981] transition-colors">
              lawnflowstudio@gmail.com
            </span>
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-8 border-t border-stroke/60">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo brand signature */}
          <div className="flex items-center gap-3">
            <Logo size="sm" />
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-white transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-white transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-muted hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

          {/* Small print */}
          <p className="text-[11px] text-muted text-center md:text-right">
            &copy; 2026 Lawnflow Studio &mdash; Google Business Profile, Local SEO &amp; Review Systems for Lawn Care
          </p>
        </div>
      </div>
    </footer>
  );
}
