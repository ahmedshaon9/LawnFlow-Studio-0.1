import { useState } from 'react';
import { X, CheckCircle, Video, Calendar, Mail, ArrowRight } from 'lucide-react';
import { AuditRequestData } from '../types';
import Logo from './Logo';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: string;
}

export default function AuditModal({ isOpen, onClose, initialPlan }: AuditModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<AuditRequestData>({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    cityState: '',
    websiteOrMapsUrl: '',
    primaryService: 'Lawn Care & Maintenance',
    notes: initialPlan ? `Interested in ${initialPlan} plan` : '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate real submission handling & confirm
    setSubmitted(true);
  };

  return (
    <div
      id="audit-modal-backdrop"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-surface border border-stroke rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow */}
        <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-[#0099B2]/15 blur-3xl pointer-events-none" />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-bg border border-stroke flex items-center justify-center text-muted hover:text-text-primary transition-colors cursor-pointer z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/20 border border-[#10B981] flex items-center justify-center text-[#10B981] mb-5">
              <CheckCircle className="w-8 h-8" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#10B981] font-semibold mb-2">
              Request Received
            </span>

            <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-3">
              We&rsquo;re filming your 3-minute video
            </h3>

            <p className="text-xs sm:text-sm text-muted max-w-md mx-auto mb-6 leading-relaxed">
              We will analyze <strong className="text-text-primary">{formData.businessName || 'your business'}</strong> on Google Maps in {formData.cityState || 'your city'} and send your custom Loom breakdown to <strong className="text-text-primary">{formData.email}</strong> within 24 hours.
            </p>

            <div className="w-full bg-bg/80 border border-stroke rounded-2xl p-4 mb-6 text-left text-xs space-y-2">
              <div className="flex justify-between text-muted">
                <span>Business:</span>
                <span className="text-text-primary font-medium">{formData.businessName}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Location:</span>
                <span className="text-text-primary font-medium">{formData.cityState}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Direct Delivery:</span>
                <span className="text-text-primary font-medium">{formData.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <a
                href="https://calendly.com/lawnflowstudio/30min"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-full bg-[#10B981] text-bg font-semibold text-xs flex items-center justify-center gap-2 hover:bg-[#10B981]/90 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Prefer to talk live? Book 30min ↗</span>
              </a>

              <button
                onClick={onClose}
                className="py-3 px-6 rounded-full border border-stroke bg-surface text-text-primary text-xs font-semibold hover:border-stroke/80 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Logo and Header */}
            <div className="mb-4">
              <Logo size="sm" className="mb-3" />
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] font-mono text-[#10B981] font-semibold">
                Free • 3 Minutes • Zero Pressure
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display italic text-text-primary mb-2">
              Get Your Custom Google Audit Video
            </h3>

            <p className="text-xs sm:text-sm text-muted mb-6 leading-relaxed">
              We&rsquo;ll search your local market, inspect your 3-Pack placement, review your top 3 competitors, and record a private screen walkthrough of what&rsquo;s holding you back.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Mike Vance"
                    value={formData.ownerName}
                    onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                    className="w-full bg-bg border border-stroke rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#10B981] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    Lawn Care / Landscaping Business *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vance Premier Lawn Care"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-bg border border-stroke rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#10B981] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    Email (where we send the video) *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="mike@vancelawn.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-bg border border-stroke rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#10B981] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(555) 234-5678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-bg border border-stroke rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#10B981] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    City &amp; State (service area) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Naperville, IL"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full bg-bg border border-stroke rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#10B981] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-muted mb-1.5">
                    Website or Google Maps link
                  </label>
                  <input
                    type="text"
                    placeholder="vancelawn.com (or leave blank if none)"
                    value={formData.websiteOrMapsUrl}
                    onChange={(e) => setFormData({ ...formData, websiteOrMapsUrl: e.target.value })}
                    className="w-full bg-bg border border-stroke rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-[#10B981] transition-colors"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-text-primary text-bg font-semibold text-xs tracking-wide hover:bg-[#10B981] hover:text-bg transition-all duration-200 cursor-pointer shadow-xl flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Send Me My 3-Minute Video Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Alternative Direct Actions with explicit white font color */}
            <div className="mt-6 pt-5 border-t border-stroke/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
              <a
                href="https://calendly.com/lawnflowstudio/30min"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#10B981] flex items-center gap-1.5 transition-colors font-medium text-white/90"
              >
                <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Or pick a 30-min time on Calendly ↗</span>
              </a>

              <a
                href="mailto:lawnflowstudio@gmail.com"
                className="flex items-center gap-1.5 transition-colors text-white font-medium hover:text-[#10B981]"
              >
                <Mail className="w-3.5 h-3.5 text-[#10B981]" />
                <span className="text-white underline underline-offset-2">lawnflowstudio@gmail.com</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
