export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  points: string[];
  anchor: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TechGroup {
  name: string;
  icon: string;
  items: string[];
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface PortfolioItem {
  title: string;
  industry: string;
  description: string;
  problem: string;
  solution: string;
  tech: string[];
  isFlagship: boolean;
  image?: string;
  link?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface IndustryItem {
  icon: string;
  name: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const SITE = {
  name: 'S3 Globe Web Solutions',
  tagline: 'Solutions Serve Success',
  domain: 's3globe.in',
  email: 'info@s3globe.in',
  phone: '+91 70287 78825',
  whatsapp: '917028778825',
  facebook: 'https://www.facebook.com/profile.php?id=61593359548480',
  instagram: '',
  linkedin: 'https://www.linkedin.com/company/s3-globe-web-solutions/',
};

export const SERVICES: ServiceItem[] = [
  {
    icon: 'globe',
    title: 'Website Development',
    description: 'Fast, modern, SEO-friendly websites that turn visitors into customers.',
    points: ['Corporate websites', 'Business websites', 'E-commerce', 'Landing pages', 'CMS'],
    anchor: 'website-development',
  },
  {
    icon: 'layout-dashboard',
    title: 'Web Applications',
    description: 'Scalable web apps and internal tools built for real business workflows.',
    points: ['ERP', 'CRM', 'Inventory', 'Billing', 'HRMS', 'Custom dashboards'],
    anchor: 'web-applications',
  },
  {
    icon: 'smartphone',
    title: 'Android App Development',
    description: 'Native and cross-platform Android apps built for performance and scale.',
    points: ['Native Android (Kotlin/Java)', 'Flutter', 'React Native', 'Play Store deployment'],
    anchor: 'android-app-development',
  },
  {
    icon: 'apple',
    title: 'iPhone (iOS) App Development',
    description: 'Polished iOS apps that feel native and ship to the App Store fast.',
    points: ['Native iOS (Swift)', 'Flutter', 'React Native', 'App Store deployment'],
    anchor: 'ios-app-development',
  },
  {
    icon: 'cpu',
    title: 'Custom Software Development',
    description: 'Purpose-built software designed around how your business actually works.',
    points: ['Requirement analysis', 'System architecture', 'Custom modules', 'Third-party integrations'],
    anchor: 'custom-software',
  },
  {
    icon: 'megaphone',
    title: 'Digital Marketing',
    description: 'Data-driven marketing that gets your business found, clicked, and chosen.',
    points: ['SEO', 'Google Ads', 'Meta Ads', 'Social Media', 'Branding'],
    anchor: 'digital-marketing',
  },
  {
    icon: 'bot',
    title: 'AI Agent Development',
    description: 'Custom AI agents, chatbots, and automation that work around the clock.',
    points: ['AI Agents', 'Chatbots', 'Voice AI', 'Business Automation'],
    anchor: 'ai-agent-development',
  },
];

export interface WhyItem {
  icon: string;
  label: string;
}

export const WHY_CHOOSE_US: WhyItem[] = [
  { icon: 'users', label: 'Experienced Developers' },
  { icon: 'cpu', label: 'Latest Technologies' },
  { icon: 'landmark', label: 'Affordable Pricing' },
  { icon: 'zap', label: 'Fast Delivery' },
  { icon: 'headphones', label: 'Dedicated Support' },
  { icon: 'search-check', label: 'SEO Friendly' },
  { icon: 'smartphone', label: 'Mobile Responsive' },
  { icon: 'lock', label: 'Secure Applications' },
  { icon: 'layers', label: 'Scalable Architecture' },
];

export const STATS: StatItem[] = [
  { value: 50, suffix: '+', label: 'Projects' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 24, suffix: '/7', label: 'Support' },
];

export const TECH_GROUPS: TechGroup[] = [
  { name: 'Frontend', icon: 'monitor', items: ['Angular', 'React', 'Next.js', 'Vue', 'HTML5', 'CSS3', 'Tailwind'] },
  { name: 'Backend', icon: 'server', items: ['Node.js', 'Express', '.NET', 'Java', 'PHP', 'Python'] },
  { name: 'Database', icon: 'database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
  { name: 'Cloud', icon: 'cloud', items: ['AWS', 'Azure', 'Google Cloud', 'Docker'] },
  { name: 'AI', icon: 'brain-circuit', items: ['OpenAI', 'Gemini', 'LangChain', 'RAG', 'TensorFlow'] },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, title: 'Discussion', description: 'We understand your goals, challenges, and requirements in depth.' },
  { step: 2, title: 'Planning', description: 'We define scope, timeline, and technical architecture.' },
  { step: 3, title: 'UI Design', description: 'We design clean, modern interfaces built around your users.' },
  { step: 4, title: 'Development', description: 'We build using modern, scalable, and secure technologies.' },
  { step: 5, title: 'Testing', description: 'We rigorously test for functionality, performance, and security.' },
  { step: 6, title: 'Deployment', description: 'We launch your product on production-ready infrastructure.' },
  { step: 7, title: 'Support', description: 'We provide ongoing support, updates, and maintenance.' },
];

// Flagship projects are real, in-house products. "Sample project —" entries
// are placeholders — swap with real client work as it becomes available.
// Everything else (e.g. Matching Woman) is real client work.
export const PORTFOLIO: PortfolioItem[] = [
  {
    title: 'VoiceOPD',
    industry: 'Healthcare',
    description: 'Voice-driven OPD management platform for clinics and hospitals.',
    problem: 'Doctors and front-desk staff lost time on manual patient record entry during consultations.',
    solution: 'A voice-first OPD workflow that captures consultation notes and patient records hands-free, cutting documentation time.',
    tech: ['Angular', 'Node.js', 'MongoDB', 'AI Speech'],
    isFlagship: true,
    image: '/portfolio/voiceopd-banner.png',
    link: 'https://voiceopd.s3globe.in',
  },
  {
    title: 'SmartSheti',
    industry: 'Agriculture',
    description: 'Smart farming platform helping farmers make data-driven decisions.',
    problem: 'Farmers lacked accessible tools to track crop health, weather impact, and farm resources in one place.',
    solution: 'A unified platform for crop tracking, resource planning, and actionable farm insights.',
    tech: ['Angular', 'Node.js', 'MongoDB'],
    isFlagship: true,
    image: '/portfolio/smartsheti.png',
    link: 'https://smartsheti.com',
  },
  {
    title: 'Matching Woman',
    industry: 'Retail',
    description: 'Shopify fabric store selling premium textiles priced and sold by the meter.',
    problem: 'Shopify variants are priced per whole unit ("each"), but this fabric retailer sells everything by length — ₹450 to ₹2,800+ per meter across brocades, organza, velvet, chikankari, and embellished fabrics. Standard Shopify had no way to let customers select a fabric length and have the cart price it accurately.',
    solution: 'A custom Shopify app adding true per-meter selling: a metre-selector on every product page and a cart-transform function that recalculates line-item pricing in real time based on the exact length selected, shared across the store’s themes.',
    tech: ['Shopify', 'Shopify Functions', 'JavaScript', 'Liquid'],
    isFlagship: false,
    image: '/portfolio/matchingwoman.png',
    link: 'https://matchingwoman.in',
  },
  {
    title: 'Manufacturing ERP',
    industry: 'Manufacturing',
    description: 'Sample project — end-to-end ERP for production planning and inventory.',
    problem: 'Disconnected spreadsheets across production, inventory, and billing teams.',
    solution: 'A unified ERP covering production planning, inventory, and billing in one dashboard.',
    tech: ['React', 'Express', 'PostgreSQL'],
    isFlagship: false,
  },
  {
    title: 'Hospital Management System',
    industry: 'Healthcare',
    description: 'Sample project — patient records, appointments, and billing in one system.',
    problem: 'Paper-based patient records slowed down appointments and billing.',
    solution: 'A digital hospital management system covering registration, appointments, and billing.',
    tech: ['Angular', '.NET', 'MySQL'],
    isFlagship: false,
  },
  {
    title: 'School ERP',
    industry: 'Education',
    description: 'Sample project — admissions, attendance, fees, and academics in one place.',
    problem: 'Schools managing admissions, fees, and attendance across disconnected tools.',
    solution: 'A single ERP for admissions, attendance, fee collection, and academic tracking.',
    tech: ['React', 'Node.js', 'MongoDB'],
    isFlagship: false,
  },
  {
    title: 'AI Support Chatbot',
    industry: 'Retail',
    description: 'Sample project — AI chatbot for 24/7 customer support and order tracking.',
    problem: 'Support team overwhelmed by repetitive order-status and FAQ queries.',
    solution: 'An AI chatbot handling FAQs and order tracking, escalating complex queries to humans.',
    tech: ['OpenAI', 'LangChain', 'Node.js'],
    isFlagship: false,
  },
];

// Sample testimonials — replace with real client reviews once collected.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rohan Deshmukh',
    role: 'Founder, Retail Startup',
    quote: 'S3 Globe delivered our e-commerce platform ahead of schedule and it has been rock solid since launch.',
    rating: 5,
  },
  {
    name: 'Dr. Anita Kulkarni',
    role: 'Clinic Owner',
    quote: 'Our OPD workflow is dramatically faster now. The team clearly understood healthcare operations.',
    rating: 5,
  },
  {
    name: 'Vikram Shah',
    role: 'Operations Head, Manufacturing',
    quote: 'The ERP they built replaced five different spreadsheets. Support has been responsive throughout.',
    rating: 5,
  },
];

export const INDUSTRIES: IndustryItem[] = [
  { icon: 'stethoscope', name: 'Healthcare' },
  { icon: 'graduation-cap', name: 'Education' },
  { icon: 'factory', name: 'Manufacturing' },
  { icon: 'shopping-bag', name: 'Retail' },
  { icon: 'wheat', name: 'Agriculture' },
  { icon: 'landmark', name: 'Finance' },
  { icon: 'building-2', name: 'Real Estate' },
  { icon: 'concierge-bell', name: 'Hospitality' },
  { icon: 'hard-hat', name: 'Construction' },
  { icon: 'rocket', name: 'Startups' },
];

export const FAQS: FaqItem[] = [
  {
    question: 'How long does a typical project take?',
    answer: 'A business website usually takes 2-4 weeks, while web/mobile apps and custom software range from 6-16 weeks depending on scope. We give you a clear timeline after the planning phase.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work primarily with Angular, React, and Next.js on the frontend, Node.js/.NET/Java on the backend, and MongoDB/PostgreSQL/MySQL for data — choosing the right stack for your project.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. Every project includes a post-launch support window, and we offer ongoing maintenance plans for updates, monitoring, and feature additions.',
  },
  {
    question: 'Can you redesign or improve an existing website or app?',
    answer: 'Absolutely. We regularly take over existing codebases — auditing, redesigning, and modernizing them without disrupting your live users.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes, we are happy to sign an NDA before discussing project details to protect your idea and data.',
  },
  {
    question: 'What is your pricing model?',
    answer: 'Pricing depends on scope — fixed-price for well-defined projects, or milestone-based for evolving ones. Share your requirements via the contact form and we\'ll send a tailored estimate.',
  },
  {
    question: 'Can you build both the app and the AI features together?',
    answer: 'Yes — AI Agent Development is one of our core services, so we regularly ship apps with AI chatbots, voice AI, or automation built in from day one.',
  },
];
