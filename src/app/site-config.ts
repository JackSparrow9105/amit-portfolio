// =============================================================================
//  YOUR PORTFOLIO SETTINGS
//  Edit only this file to change your name, contact details, prices and projects.
//  Anything in [SQUARE BRACKETS] is a placeholder: replace it with your details.
// =============================================================================

export const SITE = {
  name: 'Amit Tiwari',
  /** shown in the logo / browser tab */
  shortName: 'AT',
  role: 'Web & ERP Developer',
  city: 'Delhi, India',
  tagline: 'I build fast, mobile-friendly websites and ERP modules that help growing companies run smoother.',

  // Contact
  phoneDisplay: '+91 9161495113',
  /** country code + number, digits only, e.g. 919876543210 */
  whatsapp: '919161495113',
  email: 'amt9105@gmail.com',
  linkedin: 'https://linkedin.com/in/amit9105',         //(leave empty to hide)
  github: '',            // e.g. 'https://github.com/your-username' (leave empty to hide)

  /** reply time promise shown near the contact form */
  replyTime: 'I usually reply within a few hours.',

  about: [
    'I am a developer with 4+ years of experience building ERP systems for companies and websites for growing businesses. Everything I build loads fast on a phone, is easy for your team to use and fits the way your business actually works.',
    'On the ERP side I work with .NET Core, SQL Server and Angular: purchase, inventory, approvals, bookings and reports. I have delivered 8+ ERP modules and made critical reports up to 90% faster. On the website side I work with Angular and WordPress, and add practical extras like AI chat assistants, product catalogues and WhatsApp enquiry flows.',
    'Every project comes with clear pricing, regular updates while I build, and support after launch.'
  ],
  skills: ['.NET Core', 'C#', 'SQL Server', 'Web API', 'Entity Framework Core', 'Angular', 'TypeScript', 'WordPress', 'Query optimisation', 'AI chat assistants', 'Responsive / mobile-first design']
};

// -----------------------------------------------------------------------------
//  SERVICES (two groups: websites, then ERP)
// -----------------------------------------------------------------------------
export const SERVICES = [
  { icon: 'web', title: 'Business Websites', text: 'Modern, mobile-first websites that load fast and turn visitors into enquiries.' },
  { icon: 'user', title: 'Portfolio Websites', text: 'A clean personal or studio portfolio that shows your work, loads fast on any phone and makes it easy to contact you.' },
  { icon: 'catalog', title: 'Product Catalogues', text: 'Products by category with specs, size tables, PDF catalogue download and enquiry buttons.' },
  { icon: 'ai', title: 'AI Chat Assistants', text: 'A chat assistant that answers customer questions from your own product list, 24/7.' },
  { icon: 'speed', title: 'Redesign & Speed Fixes', text: 'Make an existing slow or outdated website faster, cleaner and mobile-friendly.' },
  { icon: 'globe', title: 'Domain, Email & Google', text: 'Connect your domain, set up business email and help customers find you on Google.' }
];

export const ERP_SERVICES = [
  { icon: 'erp', title: 'Custom ERP Modules', text: 'Purchase, supplier, customer, inventory, HR requisition, visitor and room booking, built one module at a time around how you work.' },
  { icon: 'flow', title: 'Approval Workflows', text: 'Multi-level approvals with email alerts that replace paper files and chasing people on WhatsApp.' },
  { icon: 'chart', title: 'Reports & Dashboards', text: 'Fast, filterable reports and dashboards, so owners can see the numbers without asking around.' },
  { icon: 'db', title: 'Database & Speed', text: 'Slow reports and pages fixed with better queries, stored procedures and indexing. Critical reports made up to 90% faster.' },
  { icon: 'upgrade', title: 'Legacy Modernisation', text: 'Move an old ASP.NET WebForms system to modern .NET Core MVC without stopping daily work.' },
  { icon: 'api', title: 'Web APIs & Angular Screens', text: 'Clean REST APIs with a mobile-friendly Angular front end, so your team can work from a phone or a desk.' }
];

// -----------------------------------------------------------------------------
//  PROJECTS / CASE STUDIES
//  Ask your client before showing their website or name here.
//  A project without "cover" is shown as a text-only case study (good for ERP).
// -----------------------------------------------------------------------------
export interface Project {
  name: string;
  type: string;
  location: string;
  summary: string;
  results: { value: string; label: string }[];
  features: string[];
  tech: string[];
  liveUrl?: string;
  cover?: string;
  phone?: string;
  gallery?: { src: string; caption: string }[];
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Nexus Solutions',
    type: 'Business website · Earthing & lightning protection supplier',
    location: 'Chennai',
    liveUrl: 'https://jacksparrow9105.github.io/NexusSolutions/',
    cover: 'assets/work/nexus-desktop.webp',
    phone: 'assets/work/nexus-phone.webp',
    gallery: [
      { src: 'assets/work/nexus-products.webp', caption: 'Product categories with catalogue codes and size tables' },
      { src: 'assets/work/nexus-reviews.webp', caption: 'Interactive map of customer reviews across South India' }
    ],
    summary: 'Rebuilt a startup supplier’s website into a fast, mobile-first product showcase that brings enquiries straight to WhatsApp. Mobile page weight dropped from 8.8 MB to 0.9 MB.',
    results: [
      { value: '90%', label: 'lighter page on mobile' },
      { value: '35+', label: 'products in 5 categories' },
      { value: '24/7', label: 'AI product assistant' }
    ],
    features: [
      'Mobile-first redesign with fixed buttons, forms and layout',
      'Product categories, catalogue codes and size tables',
      'AI chat assistant that recommends products',
      'Catalogue download on every page',
      'Interactive South India map of customer reviews',
      'WhatsApp & email enquiry form with validation'
    ],
    tech: ['Angular', 'TypeScript', 'Cloudflare Workers AI', 'WebP images', 'GitHub Pages']
  },
  {
    name: 'Manufacturing ERP',
    type: 'ERP system · Cards & packaging manufacturer',
    location: 'India',
    summary: 'Designed and built an ERP for a manufacturer of cards and packaging, covering the chain from purchase order to goods receipt and stock, with paperless approvals at every step.',
    results: [
      { value: '6', label: 'linked ERP modules' },
      { value: '90%', label: 'faster critical reports' },
      { value: '100%', label: 'paperless approvals' }
    ],
    features: [
      'Purchase orders with multi-level approvals',
      'Artwork management and approval',
      'Bill of material and job bag tracking',
      'Goods receipt (MRN) and inventory',
      'Support ticketing',
      'Fast reports on large data with indexed queries'
    ],
    tech: ['.NET Core', 'Web API', 'EF Core', 'SQL Server', 'Angular'],
    note: 'Client name and screens are confidential. A demo walkthrough is available on request.'
  },
  {
    name: 'ERP Modernisation',
    type: 'ERP migration · Education foundation',
    location: 'India',
    summary: 'Moved two live enterprise ERP platforms from ASP.NET WebForms to a clean .NET Core MVC structure, in phases, without stopping daily work.',
    results: [
      { value: '2', label: 'ERP platforms migrated' },
      { value: '70%', label: 'faster dashboards' },
      { value: '30%', label: 'faster module delivery' }
    ],
    features: [
      'Old workflows mapped with business teams before any change',
      'Phased go-live on live production systems',
      'Business logic, data access and screens split into clean layers',
      'Dashboards sped up with lazy loading and optimised stored procedures',
      'Shared coding standard and code reviews for the team'
    ],
    tech: ['.NET Core MVC', 'C#', 'SQL Server', 'Stored procedures'],
    note: 'Client name and screens are confidential. A demo walkthrough is available on request.'
  }
];

// -----------------------------------------------------------------------------
//  PRICING (all prices are "starting from"; edit freely)
//  "type" must match one of the "Looking for" options in app.component.ts
// -----------------------------------------------------------------------------
export const PRICING = [
  {
    name: 'Portfolio Website',
    type: 'Portfolio Website',
    price: '₹12,000',
    note: 'one-time',
    for: 'Portfolios, shops and service businesses',
    features: ['3–5 pages', 'Mobile-friendly design', 'WhatsApp & call buttons', 'Contact form', 'Free hosting setup', '2 rounds of changes'],
    highlight: false
  },
  {
    name: 'Business Website',
    type: 'Business Website',
    price: '₹30,000',
    note: 'one-time',
    for: 'Suppliers, manufacturers and growing companies',
    features: ['Everything in Portfolio', 'Products / catalogue with categories', 'Enquiry form to WhatsApp & email', 'Catalogue PDF download', 'Speed optimisation', 'Google search setup'],
    highlight: true
  },
  {
    name: 'AI Assistant Add-on',
    type: 'AI Assistant',
    price: '+₹8,000',
    note: 'one-time',
    for: 'Add to any website',
    features: ['AI chat that knows your products', 'Answers customer questions 24/7', 'Hands leads over to WhatsApp', 'Runs on a free plan for most businesses'],
    highlight: false
  },
  {
    name: 'Redesign & Speed Fix',
    type: 'Redesign / Speed fix',
    price: 'On request',
    note: '',
    for: 'Slow or outdated websites',
    features: ['Speed check and fixes', 'Mobile-friendly layout', 'Your content kept as it is', 'Quoted after a quick review'],
    highlight: false
  }
];

export const SUPPORT_PLAN = {
  price: '₹2,000',
  period: '/ month',
  features: ['Content & price updates', 'Backups & security checks', 'Small changes every month', 'Priority WhatsApp support']
};

export const PRICING_NOTES = [
  '50% advance, 50% before going live.',
  'Domain (≈ ₹800–1,000 / year) and any paid tools are paid by the client directly.',
  'Prices are starting points; the final quote depends on your exact needs.'
];

// -----------------------------------------------------------------------------
//  ERP PRICING (per module; edit freely)
// -----------------------------------------------------------------------------
export const ERP_PRICING = [
  {
    name: 'Simple Module',
    type: 'ERP Module',
    price: '₹15,000',
    note: 'per module',
    for: 'Visitor management, room booking, asset register, gate pass',
    features: ['Master data and entry screens', 'Search, filters and Excel export', 'Role-based login', '2 reports', 'Works on phone and desktop'],
    highlight: false
  },
  {
    name: 'Standard Module',
    type: 'ERP Module',
    price: '₹30,000',
    note: 'per module',
    for: 'Supplier, customer, HR requisition, inventory',
    features: ['Everything in Simple', 'Up to 2-level approval flow', 'Email alerts', 'Up to 5 reports and dashboard cards', 'Fast stored-procedure backend'],
    highlight: true
  },
  {
    name: 'Advanced Module',
    type: 'ERP Module',
    price: '₹55,000',
    note: 'per module',
    for: 'Purchase order, bill of material, job bag, goods receipt',
    features: ['Everything in Standard', 'Multi-level approval hierarchy', 'Linked with other modules', 'Audit trail of every change', 'Complex calculations and rules'],
    highlight: false
  },
  {
    name: 'Complete ERP',
    type: 'Multi-module ERP',
    price: 'Custom quote',
    note: '',
    for: 'Several modules in one system',
    features: ['Priced module by module, with a package discount from 4 modules', 'One login, roles and shared master data', 'Go-live module by module', 'Quoted after a free workflow call'],
    highlight: false
  }
];

export const ERP_EXTRAS = [
  { name: 'Slow report or page speed-up', price: 'from ₹6,000' },
  { name: 'Move a WebForms module to .NET Core', price: 'from ₹20,000 per module' },
  { name: 'Import old Excel or database data', price: 'from ₹5,000' }
];

export const ERP_SUPPORT_PLAN = {
  price: '₹5,000',
  period: '/ month',
  features: ['Bug fixes & small changes', 'Database backups & checks', 'Report and screen tweaks', 'Priority WhatsApp support']
};

export const ERP_PRICING_NOTES = [
  'Prices are per module and start from the amount shown. The final quote depends on the number of screens, reports and approval levels.',
  '50% advance to start each module, 50% on delivery after your team has tested it.',
  'Hosting, servers and any paid software licences are paid by the client directly.'
];

// -----------------------------------------------------------------------------
//  PROCESS & FAQ
// -----------------------------------------------------------------------------
export const PROCESS = [
  { step: '01', title: 'Discuss', text: 'A free call to understand your business, your workflow and your goals. You get a clear quote and timeline.' },
  { step: '02', title: 'Plan & Build', text: 'Websites: I share progress links as I build. ERP: I map your workflow first, then build and demo module by module.' },
  { step: '03', title: 'Launch', text: 'Websites: domain, hosting, speed and Google setup. ERP: testing with your team, data import and go-live.' },
  { step: '04', title: 'Support', text: 'Help after launch, with optional monthly support for updates and changes.' }
];

export const FAQ = [
  { q: 'How long does a website take?', a: 'A portfolio website usually takes 1–2 weeks and a business website 2–4 weeks, depending on how quickly content (text, photos, logo) is ready.' },
  { q: 'Do I need to buy hosting?', a: 'For websites, usually not. Most sites I build run on free, fast hosting. You only pay for your domain name (around ₹800–1,000 a year).' },
  { q: 'Can I update the website myself?', a: 'Yes. Prices, products and text are kept in simple files, or I can make updates for you under a monthly support plan.' },
  { q: 'Will it work well on mobile?', a: 'Yes. Websites are designed for phones first, and ERP screens are built to work on phones too, so approvals, bookings and reports can be used on the go.' },
  { q: 'How is ERP work priced?', a: 'Per module, by how complex it is: simple, standard or advanced (see the Pricing section). You get an exact quote after a free call about your workflow.' },
  { q: 'Can I start with just one ERP module?', a: 'Yes. Most clients start with the module that hurts the most, such as purchase or approvals, and add more later. Each module is built to share the same login and master data.' },
  { q: 'How long does an ERP module take?', a: 'A simple module usually takes 1–2 weeks, a standard one 2–4 weeks and an advanced one 4–8 weeks, depending on how clear the process is and how quickly your team gives feedback.' },
  { q: 'What do you need from me to start?', a: 'For a website: your logo, business details, product or service list and any photos. For ERP: a walkthrough of how the work is done today, plus any Excel sheets or forms you use. I can help with the rest.' },
  { q: 'How do payments work?', a: '50% advance to start, and 50% before the website goes live or the module is delivered. Monthly support is optional.' }
];
