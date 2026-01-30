import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: 'Sito Web' | 'Web App' | 'Dashboard';
  imageGradient: string;
  stats: { label: string; value: string }[];
  tags: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  timeframe: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}