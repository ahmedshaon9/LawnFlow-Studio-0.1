import { motion } from 'motion/react';
import { Check, Sparkles, Shield, Clock, Award } from 'lucide-react';
import { PricingPlan } from '../types';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
  onOpenAudit: () => void;
}

const PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Google Maps Foundation',
    price: '$150',
    period: '/ month',
    description:
      'Essential local Google Maps visibility for owner-operators and solo crews who want consistent weekly inbound calls.',
    features: [
      'Complete Google Business Profile (GBP) audit & setup',
      'Targeted primary & secondary lawn care category tuning',
      'Review generation system (SMS & Email invite funnel)',
      'Weekly geo-tagged photo uploads & project showcase',
      'Google spam competitor & keyword defense',
      'Monthly Maps ranking & verified call tracking report',
    ],
    ctaText: 'Choose Starter',
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'Local Market Takeover',
    price: '$180',
    originalPrice: '$250',
    discountBadge: 'LIMITED PROMO — SAVE $70/MO',
    period: '/ month',
    popular: true,
    description:
      'Our flagship system engineered for lawn care and landscaping companies aiming for 25–45+ high-ticket jobs each month.',
    features: [
      'Everything in Starter plan, plus:',
      'Instant Missed-Call SMS Auto-Responder (never lose a lead)',
      'Automated 5-Star Review Funnel with QR truck stickers',
      'Multi-suburb Local SEO & high-authority business citations',
      'Negative review protection & official dispute support',
      'High-intent lawn service booking page optimization',
      'Bi-weekly performance review & ROI pipeline audit',
    ],
    ctaText: 'Claim Growth Plan',
  },
  {
    id: 'dominance',
    name: 'Dominance',
    tagline: 'Multi-Crew Market Leader',
    price: '$400',
    period: '/ month',
    description:
      'Aggressive market domination for established design-build contractors and multi-truck operations locking out competitors.',
    features: [
      'Everything in Growth plan, plus:',
      'Management of up to 3 GBP locations / expanded territories',
      'Custom high-converting landing page built specifically for ads/SEO',
      'Customer reactivation SMS campaigns (win back past clients)',
      'Guaranteed 100% exclusive local territory lock (no competitors)',
      'Priority same-day Slack & WhatsApp VIP support channel',
      'Dedicated local growth strategist & quarterly roadmap',
    ],
    ctaText: 'Apply for Dominance',
  },
];

export default function Pricing({ onSelectPlan, onOpenAudit }: PricingProps) {
  return (
    <section id="pricing" className="relative py-20 md:py-28 bg-[#090D0E] text-white border-t border-white/10 overflow-hidden">
      {/* Background Ambient Brand Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#0099B2]/10 via-[#10B981]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-[0.25em] text-[#10B981] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            Simple, Transparent Pricing
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display italic text-white tracking-tight leading-[1.1] mb-4">
            Less than one mowing{' '}
            <span className="accent-gradient-text italic font-display">job per week</span>
          </h2>

          {/* Subtext */}
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed max-w-lg mx-auto">
            No long-term contracts. No lock-in fees. We retain clients month after month by consistently booking profitable lawn and landscaping jobs.
          </p>
        </motion.div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
          {PLANS.map((plan, index) => {
            const isPopular = plan.popular;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`relative rounded-3xl flex flex-col justify-between p-7 sm:p-8 transition-all duration-300 ${
                  isPopular
                    ? 'bg-gradient-to-b from-[#132325] via-[#0E1B1D] to-[#0A1416] border-2 border-[#10B981] shadow-2xl shadow-[#10B981]/20 md:-translate-y-2'
                    : 'bg-[#111719] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-[#10B981] text-black shadow-lg shadow-[#10B981]/40">
                      <Sparkles className="w-3 h-3 text-black" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-4">
                    <h3 className="text-2xl font-display font-medium text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs font-mono uppercase tracking-wider text-[#10B981]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
                        {plan.price}
                      </span>
                      {plan.originalPrice && (
                        <span className="text-xl text-neutral-400 line-through font-display font-medium">
                          {plan.originalPrice}
                        </span>
                      )}
                      <span className="text-sm text-neutral-400 font-mono">
                        {plan.period}
                      </span>
                    </div>
                    {plan.discountBadge && (
                      <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-md bg-[#10B981]/20 border border-[#10B981]/40 text-[11px] font-mono font-medium text-[#10B981]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        {plan.discountBadge}
                      </div>
                    )}
                  </div>

                  {/* Plan Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 pb-6 border-b border-white/10">
                    {plan.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200">
                        <div className="w-4 h-4 rounded-full bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-[#10B981]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-2">
                  <button
                    id={`pricing-btn-${plan.id}`}
                    onClick={() => {
                      onSelectPlan(plan.name);
                      onOpenAudit();
                    }}
                    className={`w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-[#10B981] text-black hover:bg-[#22C55E] shadow-lg shadow-[#10B981]/30 hover:scale-[1.02]'
                        : 'bg-white/10 text-white hover:bg-white/15 border border-white/15 hover:border-[#10B981]/50 hover:text-[#10B981]'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <span>↗</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Transparent GBP Setup Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#111719] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shrink-0 animate-pulse" />
            <p className="text-xs sm:text-sm text-neutral-300">
              <strong className="text-white font-medium">Just getting started or suspended?</strong>{' '}
              One-Time Google Business Profile Setup, Verification &amp; Reinstatement &mdash;{' '}
              <span className="text-[#10B981] font-mono font-bold">$250 one-time</span>.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="text-xs font-bold uppercase tracking-wider text-[#10B981] hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>Inquire About Setup</span>
            <span>→</span>
          </button>
        </motion.div>

        {/* Guarantees & Terms */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5 text-center text-xs text-neutral-400">
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#10B981]" />
            <span>Month-to-month, cancel anytime</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-[#10B981]" />
            <span>You own 100% of your profile &amp; reviews</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Award className="w-4 h-4 text-[#10B981]" />
            <span>Exclusive territory protection available</span>
          </div>
        </div>
      </div>
    </section>
  );
}
