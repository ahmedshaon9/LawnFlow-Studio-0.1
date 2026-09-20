import { motion } from 'framer-motion';
import { Video, Wrench, PhoneCall, TrendingUp } from 'lucide-react';

interface HowItWorksProps {
  onOpenAudit: () => void;
}

const STEPS = [
  {
    step: 'Step 01',
    title: 'Free 3-Minute Video Audit',
    desc: 'We search your city on Google, record a personal video showing exactly why competitors outrank you — and the 3 fixes that change it. Free. No strings.',
    icon: Video,
    timeline: 'Within 24 Hours',
  },
  {
    step: 'Step 02',
    title: 'We Fix Your Google Presence',
    desc: 'Profile setup or rebuild, review system live, missed-call text-back active. Most of the work happens in week one.',
    icon: Wrench,
    timeline: 'Week 1 Execution',
  },
  {
    step: 'Step 03',
    title: 'Calls Start Coming In',
    desc: 'Rankings climb within 60–90 days. Review requests go out with every job. Your phone rings — and nothing gets missed.',
    icon: PhoneCall,
    timeline: 'Days 30–60',
  },
  {
    step: 'Step 04',
    title: 'You See It in Numbers',
    desc: "Monthly report: calls, profile views, direction requests, new reviews. If the numbers don't move, you cancel. No contracts.",
    icon: TrendingUp,
    timeline: 'Ongoing Growth',
  },
];

export default function HowItWorks({ onOpenAudit }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-12 md:mb-16"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em] font-medium">
              The Process
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-normal text-text-primary leading-[1.15] sm:leading-[1.1] mb-3 sm:mb-4">
            Simple enough to{' '}
            <span className="font-display italic text-[#10B981]">start this week</span>
          </h2>

          {/* Subtext */}
          <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
            No endless onboarding questionnaires. No waiting 6 months for a strategy deck.
            We get your Google presence converting immediately.
          </p>
        </motion.div>

        {/* 4 steps displayed as horizontal pills */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {STEPS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative rounded-[28px] sm:rounded-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 p-5 sm:p-4 md:px-6 bg-surface/30 hover:bg-surface border border-stroke transition-all duration-300 hover:border-[#10B981]/40"
              >
                {/* Left Block: Step number & Icon badge */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-12 h-12 rounded-full bg-bg border border-stroke flex items-center justify-center text-[#10B981] group-hover:border-[#10B981]/60 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-semibold block">
                      {item.step}
                    </span>
                    <h3 className="text-base sm:text-lg font-display text-text-primary group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Center Copy */}
                <div className="flex-1 sm:px-4">
                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Right Timeline / Tag */}
                <div className="shrink-0 flex items-center gap-3 self-end sm:self-center">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-muted/80 px-3 py-1 rounded-full bg-bg/80 border border-stroke/60">
                    {item.timeline}
                  </span>
                  {index === 0 && (
                    <button
                      onClick={onOpenAudit}
                      className="hidden md:inline-flex items-center gap-1 text-xs text-[#10B981] hover:underline cursor-pointer font-medium"
                    >
                      <span>Claim</span>
                      <span>↗</span>
                    </button>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
