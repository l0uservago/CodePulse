
import { Monitor, Layers, BarChart3, Rocket, Zap, ShieldCheck } from 'lucide-react';
import { NavItem, Service, CaseStudy, PricingTier, FAQItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Servizi', path: '/servizi' },
  { label: 'Prezzi', path: '/prezzi' },
  { label: 'Chi Siamo', path: '/chi-siamo' },
];

export const SERVICES: Service[] = [
  {
    id: 'siti-web',
    title: 'Siti Web High-End',
    description: 'Vetrine digitali progettate per convertire. Veloci, accessibili e animate con cura.',
    features: ['Design Responsive', 'SEO Optimization', 'CMS Headless', 'Performance 99/100'],
    icon: Monitor,
  },
  {
    id: 'web-app',
    title: 'Web Application',
    description: 'Software cloud complessi resi semplici. Scalabilità e UX di livello enterprise.',
    features: ['SaaS Development', 'React / Next.js', 'Database Real-time', 'API Integration'],
    icon: Layers,
  },
  {
    id: 'dashboard',
    title: 'Dashboard & Analytics',
    description: 'Visualizzazione dati interattiva per prendere decisioni migliori, più in fretta.',
    features: ['Data Visualization', 'Admin Panels', 'Reporting Automatizzato', 'User Management'],
    icon: BarChart3,
  },
];

export const WORK_ITEMS: CaseStudy[] = [
  {
    id: '1',
    title: 'FinTech Dashboard',
    client: 'NovaPay',
    category: 'Dashboard',
    imageGradient: 'from-blue-600 to-cyan-500',
    stats: [{ label: 'Efficienza', value: '+45%' }, { label: 'Errori', value: '-20%' }],
    tags: ['React', 'D3.js', 'Enterprise']
  },
  {
    id: '2',
    title: 'E-commerce Luxury',
    client: 'Aura Milano',
    category: 'Sito Web',
    imageGradient: 'from-purple-600 to-pink-500',
    stats: [{ label: 'Conversion', value: '+2.8%' }, { label: 'Speed', value: '0.4s' }],
    tags: ['Next.js', 'Shopify', 'Motion']
  },
  {
    id: '3',
    title: 'SaaS Gestionale',
    client: 'LogiTrack',
    category: 'Web App',
    imageGradient: 'from-emerald-600 to-teal-500',
    stats: [{ label: 'Utenti', value: '12k+' }, { label: 'Uptime', value: '99.9%' }],
    tags: ['SaaS', 'Cloud', 'Real-time']
  },
  {
    id: '4',
    title: 'Booking Engine',
    client: 'Velox Travel',
    category: 'Web App',
    imageGradient: 'from-orange-500 to-red-500',
    stats: [{ label: 'Prenotazioni', value: '+150%' }, { label: 'Mobile', value: '60%' }],
    tags: ['Booking', 'API', 'Complex Logic']
  },
  {
    id: '5',
    title: 'Corporate Rebrand',
    client: 'NexGen Energy',
    category: 'Sito Web',
    imageGradient: 'from-indigo-600 to-blue-500',
    stats: [{ label: 'Traffic', value: '+80%' }, { label: 'Bounce', value: '-15%' }],
    tags: ['Corporate', 'Animation', 'SEO']
  },
  {
    id: '6',
    title: 'Analytics Suite',
    client: 'DataFlow',
    category: 'Dashboard',
    imageGradient: 'from-fuchsia-600 to-purple-600',
    stats: [{ label: 'Data Points', value: '1M+' }, { label: 'Latency', value: '<50ms' }],
    tags: ['Big Data', 'Charts', 'Dark Mode']
  }
];

export const PRICING: PricingTier[] = [
  {
    name: 'Launch',
    price: '299',
    timeframe: '7-10 giorni',
    description: 'Ideale per landing page ad alta conversione o siti vetrina essenziali.',
    features: ['Design Esclusivo', 'Sviluppo Next.js', 'SEO Base', '1 Revisione Major', 'Analytics Setup'],
  },
  {
    name: 'MVP / App',
    price: '799',
    timeframe: '14-21 giorni',
    description: 'Per startup e aziende che necessitano di funzionalità dinamiche.',
    features: ['Architettura Scalabile', 'Auth & Database', 'Admin Dashboard', 'API Integration', '2 Revisioni Major', 'Supporto 30gg'],
    isPopular: true,
  },
  {
    name: 'Scale / Custom',
    price: 'Custom',
    timeframe: 'Variabile',
    description: 'Ecosistemi complessi, piattaforme SaaS o refactoring completi.',
    features: ['Architettura Microservizi', 'Test Coverage', 'CI/CD Pipeline', 'Audit Sicurezza', 'SLA Garantito', 'Training Team'],
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Quali sono i tempi reali di consegna?",
    answer: "Lavoro a sprint. Una landing page richiede 7-10 giorni. Una web app complessa dalle 3 alle 6 settimane. Definiamo una timeline rigida all'inizio e la rispetto."
  },
  {
    question: "Posso chiedere revisioni illimitate?",
    answer: "No. L'efficienza richiede focus. Includo 2 round di revisioni strutturate per ogni fase. Questo ci costringe a essere precisi e a non disperdere energie in dettagli marginali."
  },
  {
    question: "Che tecnologie utilizzi?",
    answer: "Il mio stack di riferimento è React/Next.js per il frontend, TailwindCSS per lo stile, Node.js o Supabase per il backend. Scelgo tecnologie moderne, stabili e manutenibili nel tempo."
  },
  {
    question: "Offri manutenzione post-lancio?",
    answer: "Sì, offro piani di manutenzione mensile (Care Plans) che includono aggiornamenti di sicurezza, monitoraggio uptime e piccole modifiche evolutive."
  },
];
