import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, PhoneCall, Globe, X, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenAudit: () => void;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gbp-setup',
    title: 'Google Business Profile Setup & Verification',
    span: 'md:col-span-7',
    icon: 'map-pin',
    copy: "Invisible on Google = invisible to 87% of homeowners. We build your profile from scratch and handle the entire verification — so you show up when neighbors search 'lawn care near me.'",
    footerLeft: 'One-time $200–250',
    footerRight: 'Most clients see first calls within 4 weeks →',
    details: [
      'Pinpoint geocoded service area mapping covering your most profitable neighborhoods',
      'Video verification & reinstatement support with Google local specialists',
      'Strategic primary and secondary categories (Lawn Care, Landscaper, Lawn Mowing)',
      '100+ optimized geo-tagged photos of clean cuts, aeration, and landscape transformations',
      'High-intent service catalog with custom descriptions and instant quote links',
    ],
  },
  {
    id: 'review-engine',
    title: '5-Star Review Engine',
    span: 'md:col-span-5',
    icon: 'star',
    copy: 'The moment a job is done, your customer gets a friendly text with a one-tap review link. Every job. Every customer. On autopilot.',
    footerLeft: 'Included in Growth',
    footerRight: 'Never buy a review — we ask everyone, every time',
    details: [
      'Automated SMS triggered right as your crews wrap up mowing or cleanup',
      'Direct one-tap deep-link directly into the 5-star Google review box',
      'Smart follow-up reminder 48 hours later if unopened (no spamming)',
      'Automatic AI & human branded review responses to boost SEO rank',
      'QR code cards designed for your mowing trailers and yard signs',
    ],
  },
  {
    id: 'missed-call-textback',
    title: 'Missed Call Text-Back',
    span: 'md:col-span-5',
    icon: 'phone',
    copy: "You're on a mower. The phone rings. By the time you check, they hired someone else. Our system texts them back in 30 seconds. Most stay.",
    footerLeft: 'One saved customer = $500+/season',
    footerRight: '30-second automated response',
    details: [
      'Instant SMS sent within 30 seconds: "Hey! Sorry I missed your call, I’m on a mower right now. How can I help with your lawn?"',
      'Stops homeowners from calling the next landscaper on Google Maps',
      'Collects address, lot size, and requested service right inside the chat',
      'Pushes hot leads straight into your phone and scheduling calendar',
      'Average client recovers 4–8 recurring mowing accounts each spring month',
    ],
  },
  {
    id: 'convert-website',
    title: 'Website Built to Convert',
    span: 'md:col-span-7',
    icon: 'browser',
    copy: 'Your profile earns the click. Your website closes the job. Fast, mobile-first, with an instant quote form — designed for lawn care, not a template.',
    footerLeft: 'From $500 + $30/mo care',
    footerRight: 'Live Google reviews embedded',
    details: [
      'Sub-second page load speeds optimized for homeowners on mobile phones',
      'Instant lawn square-footage & pricing estimator form that pre-qualifies leads',
      'Live synchronized Google reviews widget showing real neighborhood feedback',
      'Dedicated suburban neighborhood landing pages targeting nearby zip codes',
      'SSL certificate, hosting, daily backups, and ongoing seasonal updates included',
    ],
  },
];

export default function Services({ onOpenAudit }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (type: ServiceItem['icon']) => {
    switch (type) {
      case 'map-pin':
        return <MapPin className="w-5 h-5 text-[#0099B2]" />;
      case 'star':
        return <Star className="w-5 h-5 text-[#10B981] fill-[#10B981]/20" />;
      case 'phone':
        return <PhoneCall className="w-5 h-5 text-[#0EA5E9]" />;
      case 'browser':
        return <Globe className="w-5 h-5 text-[#22C55E]" />;
    }
  };

  return (
    <section id="services" className="bg-bg py-12 md:py-20 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-normal text-text-primary leading-[1.1] mb-4">
              Everything your business needs to{' '}
              <span className="font-display italic text-[#10B981]">win on Google</span>
            </h2>

            {/* Subtext */}
            <p className="text-sm md:text-base text-muted leading-relaxed">
              No ad spend. No agencies with 20 layers of account managers. One focused
              system, built for lawn care companies.
            </p>
          </div>

          {/* Desktop Only Free Audit Button */}
          <div className="hidden md:block shrink-0">
            <div className="relative group inline-block">
              <span className="absolute -inset-[2px] rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[2px]" />
              <button
                id="services-header-audit-btn"
                onClick={onOpenAudit}
                className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-surface border border-stroke text-xs font-semibold text-text-primary hover:text-white transition-all duration-200 cursor-pointer"
              >
                <span>Get free audit</span>
                <span className="text-[#10B981] text-sm">→</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bento Grid: spans 7/5/5/7 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className={`group relative bg-surface border border-stroke rounded-3xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#10B981]/40 ${service.span}`}
              onClick={() => setSelectedService(service)}
            >
              {/* Background ambient hover glow */}
              <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#0099B2]/5 blur-3xl group-hover:bg-[#10B981]/15 transition-all duration-500 pointer-events-none" />

              {/* Hover Backdrop Overlay */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-md transition-all duration-300 z-10 flex items-center justify-center p-6 text-center">
                <div className="relative group/pill">
                  <span className="absolute -inset-[2px] rounded-full accent-gradient animate-gradient-shift blur-[2px]" />
                  <span className="relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-white text-bg font-semibold text-xs tracking-wide shadow-lg">
                    Learn more <span className="text-[#10B981]">↗</span>
                  </span>
                </div>
              </div>

              {/* Card Main Content */}
              <div className="relative z-0">
                {/* Icon area with subtle accent gradient glow */}
                <div className="relative inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-bg border border-stroke/80 mb-6 group-hover:border-[#10B981]/50 transition-colors">
                  <div className="absolute inset-0 rounded-2xl bg-[#0099B2]/10 blur-sm pointer-events-none" />
                  {getIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-medium text-text-primary tracking-tight mb-3">
                  {service.title}
                </h3>

                {/* Copy */}
                <p className="text-sm text-muted leading-relaxed font-normal">
                  {service.copy}
                </p>
              </div>

              {/* Footer */}
              <div className="relative z-0 pt-6 mt-6 border-t border-stroke/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-semibold text-text-primary tracking-wide">
                  {service.footerLeft}
                </span>
                <span className="text-muted group-hover:text-[#10B981] transition-colors flex items-center gap-1">
                  {service.footerRight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal for Service Deep-Dive */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-xl bg-surface border border-stroke rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-text-primary transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-bg border border-stroke flex items-center justify-center">
                {getIcon(selectedService.icon)}
              </div>
              <span className="text-xs text-[#10B981] uppercase tracking-[0.2em] font-semibold">
                Service Breakdown
              </span>
            </div>

            <h3 className="text-2xl font-display text-text-primary mb-3">
              {selectedService.title}
            </h3>

            <p className="text-sm text-muted mb-6 leading-relaxed">
              {selectedService.copy}
            </p>

            <div className="space-y-3 mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-muted font-medium">
                Included Deliverables:
              </p>
              {selectedService.details.map((point, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-text-primary/90">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-stroke/60 flex items-center justify-between">
              <div>
                <span className="block text-[11px] text-muted uppercase tracking-wider">Investment</span>
                <span className="text-sm font-semibold text-text-primary">{selectedService.footerLeft}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedService(null);
                  onOpenAudit();
                }}
                className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-text-primary text-bg font-semibold text-xs hover:bg-[#10B981] hover:text-bg transition-colors cursor-pointer"
              >
                <span>Request Free Audit</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
