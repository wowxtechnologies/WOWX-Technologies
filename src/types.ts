export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string; // Dynamic icon from lucide-react
  features: string[];
  benefits: string[];
  timeline: string;
  startingPrice?: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Business Websites" | "Educational Websites" | "E-Commerce" | "Portfolio Sites" | "Landing Pages" | "Web Apps";
  description: string;
  longDescription?: string;
  clientName?: string;
  location?: string;
  featuresUsed?: string[];
  beforeImage: string; // Conceptual mockup link
  afterImage: string;  // High fidelity premium build image mockup
  liveUrl?: string;
  stats?: { label: string; value: string }[];
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  period: string;
  popular: boolean;
  tagline: string;
  features: string[];
  badge?: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Pricing" | "Services" | "Timeline";
}

export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceRequired: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}
