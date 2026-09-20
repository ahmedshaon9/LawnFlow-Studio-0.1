export interface ServiceItem {
  id: string;
  title: string;
  span: string;
  icon: 'map-pin' | 'star' | 'phone' | 'browser';
  copy: string;
  footerLeft: string;
  footerRight: string;
  details: string[];
}

export interface MetricItem {
  id: string;
  label: string;
  before: string;
  after: string;
  change: string;
  highlight: string;
  description: string;
  statCategory: string;
  timeframe: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice?: string;
  discountBadge?: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface AuditRequestData {
  businessName: string;
  ownerName: string;
  email: string;
  phone: string;
  cityState: string;
  websiteOrMapsUrl: string;
  primaryService: string;
  notes?: string;
}
