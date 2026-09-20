import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Hls from 'hls.js';

interface HeroProps {
  onGetAudit: () => void;
  onSeeHowItWorks: () => void;
}

const ROLES = ['Google searches', '5-star reviews', 'missed calls', 'map rankings'];
const HLS_SOURCE = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export default function Hero({ onGetAudit, onSeeHowItWorks }: HeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycling role line every 2s
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // HLS Video initialization with native fallback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(HLS_SOURCE);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {
          // Autoplay handled by browser policy
        });
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SOURCE;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {
          // Autoplay handled by browser policy
        });
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  // GSAP Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.name-reveal',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.1 }
      ).fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(8px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.9, stagger: 0.1 },
        0.2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg text-center px-4 sm:px-6 pt-28 pb-20"
    >
      {/* Background Video & Overlays */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {/* Background HLS Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover -translate-x-1/2 -translate-y-1/2"
        />

        {/* Dark overlay: bg-black/40 for business audience readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Ambient Top Glow for Brand Tone */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-b from-[#0099B2]/20 via-[#10B981]/10 to-transparent blur-[120px]" />

        {/* Bottom fade: h-48 bg-gradient-to-t from-bg to-transparent */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero Content (centered, z-10) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Eyebrow */}
        <div className="blur-in mb-4 sm:mb-8 text-[10px] sm:text-xs text-muted uppercase tracking-[0.18em] sm:tracking-[0.3em] font-medium inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 max-w-[92vw]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0099B2] shrink-0" />
          <span className="truncate">FOR LAWN CARE &amp; LANDSCAPING CONTRACTORS</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" />
        </div>

        {/* Headline */}
        <h1 className="name-reveal text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display italic leading-[1.08] sm:leading-[0.95] tracking-tight text-text-primary mb-4 sm:mb-6 px-2">
          Get Found. Get Calls.{' '}
          <span className="accent-gradient-text italic font-display">Growing.</span>
        </h1>

        {/* Role line */}
        <div className="blur-in text-sm sm:text-lg md:text-2xl text-text-primary/90 font-light mb-4 min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center gap-1 sm:gap-1.5 px-2">
          <span className="text-xs sm:text-base md:text-xl text-neutral-300">We turn</span>
          <span
            key={roleIndex}
            className="font-display italic accent-gradient-text text-base sm:text-xl md:text-3xl animate-role-fade-in inline-block px-1"
          >
            {ROLES[roleIndex]}
          </span>
          <span className="text-xs sm:text-base md:text-xl text-neutral-300">into booked jobs.</span>
        </div>

        {/* Description */}
        <p className="blur-in text-xs sm:text-sm md:text-base text-muted max-w-lg mx-auto mb-8 sm:mb-12 leading-relaxed font-normal px-2">
          87% of homeowners search &lsquo;lawn care near me&rsquo; before calling anyone.
          If you&rsquo;re not in the top 3 on Google Maps, those customers are going to
          your competitors — every single day.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in w-full sm:w-auto inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-5 px-4 sm:px-0">
          {/* Primary Solid Button */}
          <div className="relative group w-full sm:w-auto">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
            <button
              id="hero-audit-cta"
              onClick={onGetAudit}
              className="relative w-full sm:w-auto inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105 shadow-xl shadow-black/30 cursor-pointer border border-transparent hover:border-[#10B981]/40"
            >
              <span>Get Free Video Audit</span>
              <span className="ml-2 text-sm sm:text-base leading-none">↗</span>
            </button>
          </div>

          {/* Secondary Outlined Button */}
          <div className="relative group w-full sm:w-auto">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[3px]" />
            <button
              id="hero-how-it-works-cta"
              onClick={onSeeHowItWorks}
              className="relative w-full sm:w-auto inline-flex items-center justify-center rounded-full text-xs sm:text-sm font-semibold px-6 sm:px-7 py-3 sm:py-3.5 border-2 border-stroke bg-bg/80 backdrop-blur-sm text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] sm:text-xs text-muted uppercase tracking-[0.25em]">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke/60 relative overflow-hidden rounded-full">
          <div className="w-full h-1/2 accent-gradient animate-scroll-down rounded-full" />
        </div>
      </div>
    </section>
  );
}
