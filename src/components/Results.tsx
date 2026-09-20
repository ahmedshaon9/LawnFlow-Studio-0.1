import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MetricItem } from '../types';
import MetricLightbox from './MetricLightbox';

gsap.registerPlugin(ScrollTrigger);

interface ResultsProps {
  onOpenAudit: () => void;
}

const METRICS_DATA: MetricItem[] = [
  {
    id: 'rankings',
    label: 'Google Maps Ranking',
    before: '#7 Rank',
    after: '#3 Rank',
    change: '↑ into the top 3',
    highlight: 'Enters the 3-Pack on mobile searches',
    statCategory: 'Visibility & Discovery',
    timeframe: 'Average across 15 high-density suburban zip codes',
    description:
      'Moving from position #7 (hidden behind the "More Places" click) into position #3 in the Google Local 3-Pack places the client directly in front of 87% of local homeowners searching for weekly mowing, aeration, or seasonal cleanups.',
  },
  {
    id: 'calls',
    label: 'Direct Google Phone Calls',
    before: '22 calls/mo',
    after: '41 calls/mo',
    change: '+86%',
    highlight: '+19 exclusive inbound calls every month',
    statCategory: 'Lead Conversion',
    timeframe: 'March–June peak booking window',
    description:
      'Homeowners tapping the direct "Call" button straight from the Google Business Profile card without needing to browse other directory sites or fill out third-party forms.',
  },
  {
    id: 'views',
    label: 'Profile Search Views',
    before: '350 views/mo',
    after: '580 views/mo',
    change: '+66%',
    highlight: 'Over 230 additional high-intent impressions',
    statCategory: 'Search Impressions',
    timeframe: 'Calculated over 90 consecutive operational days',
    description:
      'Optimizing local business categories, geo-tagged equipment photos, and service descriptions expanded the search footprint into neighboring subdivisions and commercial clusters.',
  },
  {
    id: 'reviews',
    label: 'Monthly 5-Star Reviews',
    before: '2 / month',
    after: '9 / month',
    change: '+350%',
    highlight: '4.9 Star average rating maintained',
    statCategory: 'Social Proof Engine',
    timeframe: 'Automated post-job SMS dispatch',
    description:
      'Prior to Lawnflow Studio, asking for reviews was irregular and forgotten. Our automated post-job text system reaches homeowners right after the yard is cut, tripling monthly review velocity.',
  },
  {
    id: 'missed-calls',
    label: 'Missed Calls Recovered',
    before: '0 recovered',
    after: '6 / month',
    change: '+$300+/mo saved',
    highlight: '$3,600+ annual recurring revenue captured',
    statCategory: 'Revenue Retention',
    timeframe: 'Instant 30s auto text-back engine',
    description:
      'When crews are operating noisy zero-turn mowers or weed trimmers, inbound calls are naturally missed. Our 30-second text-back catches the homeowner before they dial the next business on the list.',
  },
  {
    id: 'directions',
    label: 'Direction Requests',
    before: '12 / month',
    after: '28 / month',
    change: '+133%',
    highlight: 'High-intent residential & commercial drive-bys',
    statCategory: 'Local Trust',
    timeframe: 'Verified via Google Maps analytics',
    description:
      'Homeowners and property managers requesting routes to the nursery, yard headquarters, or verifying business legitimacy through physical Google Maps direction requests.',
  },
];

export default function Results({ onOpenAudit }: ResultsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<HTMLDivElement | null>(null);
  const colLeftRef = useRef<HTMLDivElement | null>(null);
  const colRightRef = useRef<HTMLDivElement | null>(null);
  const [selectedMetric, setSelectedMetric] = useState<MetricItem | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinned = pinnedRef.current;
    const colLeft = colLeftRef.current;
    const colRight = colRightRef.current;

    if (!container || !pinned) return;

    const ctx = gsap.context(() => {
      // Pinned center header effect across desktop screens
      ScrollTrigger.create({
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        pin: pinned,
        pinSpacing: false,
      });

      // Parallax scroll for left column cards
      if (colLeft) {
        gsap.fromTo(
          colLeft.children,
          { y: 80, rotate: -2 },
          {
            y: -80,
            rotate: 1,
            ease: 'none',
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      // Parallax scroll for right column cards
      if (colRight) {
        gsap.fromTo(
          colRight.children,
          { y: 140, rotate: 2 },
          {
            y: -140,
            rotate: -1,
            ease: 'none',
            stagger: 0.15,
            scrollTrigger: {
              trigger: container,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="results"
      className="relative min-h-[180vh] md:min-h-[260vh] lg:min-h-[300vh] bg-bg border-t border-stroke/40"
    >
      {/* Layer 1: Pinned Center (z-10) */}
      <div
        ref={pinnedRef}
        className="w-full h-screen flex items-center justify-center pointer-events-none z-10 sticky top-0"
      >
        <div className="max-w-xl mx-auto px-6 text-center pointer-events-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              Proof
            </span>
            <span className="w-8 h-px bg-stroke" />
          </div>

          {/* Heading with italic accent word */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-normal text-text-primary leading-[1.05] mb-4">
            What actually{' '}
            <span className="font-display italic text-[#10B981]">moves</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-muted max-w-md mx-auto mb-8 leading-relaxed">
            Rankings are vanity. Calls are sanity. Here&rsquo;s what 90 days looks like
            for a typical client.
          </p>

          {/* Button */}
          <div className="relative group inline-block">
            <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
            <button
              id="results-get-audit-btn"
              onClick={onOpenAudit}
              className="relative inline-flex items-center gap-2 rounded-full px-6 py-3 bg-surface border border-stroke text-xs font-semibold text-text-primary hover:text-white transition-all duration-200 cursor-pointer shadow-xl shadow-black/40"
            >
              <span>Get your free audit</span>
              <span className="text-[#10B981] text-sm">↗</span>
            </button>
          </div>
        </div>
      </div>

      {/* Layer 2: Parallax Stat Cards (z-20) */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 md:px-12 -mt-[85vh] sm:-mt-[80vh] pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-24 lg:gap-40 items-start justify-items-center">
          {/* Left Column (3 cards) */}
          <div ref={colLeftRef} className="flex flex-col gap-16 md:gap-36 w-full max-w-[320px]">
            {METRICS_DATA.slice(0, 3).map((metric) => (
              <div
                key={metric.id}
                onClick={() => setSelectedMetric(metric)}
                className="group relative aspect-square w-full bg-surface border border-stroke rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-2xl hover:shadow-[#10B981]/10"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0099B2]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top header */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#10B981]">
                    {metric.label}
                  </span>
                  <span className="text-xs text-muted group-hover:text-text-primary transition-colors">
                    ↗
                  </span>
                </div>

                {/* Big number in font-display italic */}
                <div className="my-auto py-2">
                  <div className="text-4xl sm:text-5xl font-display italic text-text-primary group-hover:text-[#10B981] transition-colors leading-none tracking-tight">
                    {metric.change}
                  </div>
                </div>

                {/* Small "before -> after" caption in text-muted */}
                <div className="pt-3 border-t border-stroke/60">
                  <p className="text-xs text-muted font-normal tracking-wide">
                    {metric.before} <span className="text-[#10B981] mx-1">→</span> {metric.after}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (3 cards) */}
          <div ref={colRightRef} className="flex flex-col gap-16 md:gap-36 w-full max-w-[320px] sm:pt-24 md:pt-48">
            {METRICS_DATA.slice(3, 6).map((metric) => (
              <div
                key={metric.id}
                onClick={() => setSelectedMetric(metric)}
                className="group relative aspect-square w-full bg-surface border border-stroke rounded-3xl p-6 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-[#10B981]/50 hover:shadow-2xl hover:shadow-[#10B981]/10"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#10B981]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top header */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#10B981]">
                    {metric.label}
                  </span>
                  <span className="text-xs text-muted group-hover:text-text-primary transition-colors">
                    ↗
                  </span>
                </div>

                {/* Big number in font-display italic */}
                <div className="my-auto py-2">
                  <div className="text-4xl sm:text-5xl font-display italic text-text-primary group-hover:text-[#10B981] transition-colors leading-none tracking-tight">
                    {metric.change}
                  </div>
                </div>

                {/* Small "before -> after" caption in text-muted */}
                <div className="pt-3 border-t border-stroke/60">
                  <p className="text-xs text-muted font-normal tracking-wide">
                    {metric.before} <span className="text-[#10B981] mx-1">→</span> {metric.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for clicked metric */}
      <MetricLightbox
        metric={selectedMetric}
        onClose={() => setSelectedMetric(null)}
        onOpenAudit={onOpenAudit}
      />
    </section>
  );
}
