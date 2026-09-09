export interface Project {
  id: string;
  num: string;
  category: string;
  sector: 'hotel' | 'ecommerce' | 'restaurant' | 'service';
  name: string;
  clientLocation: string;
  tagline: string;
  description: string;
  metrics: { label: string; value: string }[];
  technologies: string[];
  desktopImage: string;
  mobileImage: string;
  gallery: string[];
  demoUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
  };
}

export interface ServiceItem {
  num: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  deliveryTime: string;
  startingPriceMGA: string;
  startingPriceEUR: string;
  iconName: string;
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  business: string;
  location: string;
  role: string;
  comment: string;
  rating: number;
  date: string;
  avatar: string;
  projectType: string;
  paymentMethod: string;
}

export interface AuditResult {
  url: string;
  overallScore: number;
  metrics: {
    performance: number;
    seoLocal: number;
    mobileSpeed: number;
    conversion: number;
  };
  keyIssues: {
    type: 'critical' | 'warning' | 'success';
    title: string;
    description: string;
    fixImpact: string;
  }[];
  madagascarReadiness: {
    telmaOrangeSpeedScore: number;
    hasWhatsAppDirect: boolean;
    hasMobileMoneyClarity: boolean;
    localSeoRank: string;
  };
  recommendation: string;
}
