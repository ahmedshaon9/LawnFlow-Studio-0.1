import { X, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import { MetricItem } from '../types';

interface MetricLightboxProps {
  metric: MetricItem | null;
  onClose: () => void;
  onOpenAudit: () => void;
}

export default function MetricLightbox({ metric, onClose, onOpenAudit }: MetricLightboxProps) {
  if (!metric) return null;

  return (
    <div
      id="metric-lightbox-overlay"
      className="fixed inset-0 z-[9990] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-surface border border-stroke rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient glow */}
        <div className="absolute -right-16 -top-16 w-44 h-44 rounded-full bg-[#0099B2]/15 blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-text-primary transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Category */}
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#10B981]">
            {metric.statCategory}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-display text-text-primary mb-1">
          {metric.label}
        </h3>
        <p className="text-xs text-muted font-mono mb-6">{metric.timeframe}</p>

        {/* Big comparison card */}
        <div className="bg-bg/80 border border-stroke/80 rounded-2xl p-5 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-muted block mb-1">
                Before Optimization
              </span>
              <span className="text-xl sm:text-2xl font-display text-muted">
                {metric.before}
              </span>
            </div>

            <div className="flex flex-col items-center px-4">
              <span className="text-xs font-mono font-semibold text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 px-2.5 py-1 rounded-full flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                {metric.change}
              </span>
            </div>

            <div className="text-right">
              <span className="text-[11px] uppercase tracking-wider text-[#10B981] block mb-1">
                After 90 Days
              </span>
              <span className="text-2xl sm:text-3xl font-display italic text-text-primary font-medium">
                {metric.after}
              </span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stroke/50 flex items-center justify-between text-xs">
            <span className="text-muted">Net Business Impact:</span>
            <span className="font-semibold text-text-primary">{metric.highlight}</span>
          </div>
        </div>

        {/* Detailed context */}
        <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
          {metric.description}
        </p>

        <div className="flex items-center gap-2 text-xs text-muted mb-6 bg-surface/80 border border-stroke/40 rounded-xl p-3">
          <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
          <span>Verified data pulled directly from Google Business Profile Performance Dashboard.</span>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-stroke/60">
          <button
            onClick={onClose}
            className="text-xs text-muted hover:text-text-primary cursor-pointer"
          >
            Close view
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenAudit();
            }}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-text-primary text-bg font-semibold text-xs hover:bg-[#10B981] hover:text-bg transition-colors cursor-pointer"
          >
            <span>Get Audit For My City</span>
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
