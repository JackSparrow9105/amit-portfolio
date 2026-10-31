// =============================================================================
//  YOUR PORTFOLIO SETTINGS
//  Edit only this file to change your name, contact details, prices and projects.
//  Anything in [SQUARE BRACKETS] is a placeholder: replace it with your details.
// =============================================================================

export const SITE = {
  name: '[Your Name]',
  /** shown in the logo / browser tab */
  shortName: '[YN]',
  role: 'Web Developer',
  city: '[Your City], India',
  tagline: 'I build fast, mobile-friendly websites and business tools for growing companies.',

  // Contact
  phoneDisplay: '+91 [XXXXX XXXXX]',
  /** country code + number, digits only, e.g. 919876543210 */
  whatsapp: '91XXXXXXXXXX',
  email: '[you@example.com]',
  linkedin: '',          // e.g. 'https://www.linkedin.com/in/your-profile' (leave empty to hide)
  github: '',            // e.g. 'https://github.com/your-username' (leave empty to hide)

  /** reply time promise shown near the contact form */
  replyTime: 'I usually reply within a few hours.',

  about: [
    'I am a web developer who builds websites that do more than look good: they load fast on any phone, bring in enquiries and are easy for business owners to manage.',
    'I work with Angular and WordPress, and add practical extras like AI chat assistants, product catalogues and WhatsApp enquiry flows that small businesses actually use.',
    'Every project comes with clear pricing, regular updates while I build, and support after launch.'
  ],
  skills: ['Angular', 'TypeScript', 'WordPress', 'Responsive / mobile-first design', 'AI chat assistants', 'Website speed', 'Google search setup', 'Domain & email setup']
};

// -----------------------------------------------------------------------------
//  SERVICES
// -----------------------------------------------------------------------------
export const SERVICES = [
  { icon: 'web', title: 'Business Websites', text: 'Modern, mobile-first websites that load fast and turn visitors into enquiries.' },
  { icon: 'catalog', title: 'Product Catalogues', text: 'Products by category with specs, size tables, PDF catalogue download and enquiry buttons.' },
  { icon: 'ai', title: 'AI Chat Assistants', text: 'A chat assistant that answers customer questions from your own product list, 24/7.' },
  { icon: 'speed', title: 'Redesign & Speed Fixes', text: 'Make an existing slow or outdated website faster, cleaner and mobile-friendly.' },
  { icon: 'tools', title: 'Business Tools', text: 'Enquiry trackers, quotation makers and simple stock systems built around how you work.' },
  { icon: 'globe', title: 'Domain, Email & Google', text: 'Connect your domain, set up business email and help customers find you on Google.' }
];

// -----------------------------------------------------------------------------
//  PROJECTS / CASE STUDIES
//  Ask your client before showing their website here.
// -----------------------------------------------------------------------------
export const PROJECTS = [
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
  }
];

// -----------------------------------------------------------------------------
//  PRICING (all prices are "starting from"; edit freely)
// -----------------------------------------------------------------------------
export const PRICING = [
  {
    name: 'Starter Website',
    price: '₹12,000',
    note: 'one-time',
    for: 'Portfolios, shops and service businesses',
    features: ['3–5 pages', 'Mobile-friendly design', 'WhatsApp & call buttons', 'Contact form', 'Free hosting setup', '2 rounds of changes'],
    highlight: false
  },
  {
    name: 'Business Website',
    price: '₹30,000',
    note: 'one-time',
    for: 'Suppliers, manufacturers and growing companies',
    features: ['Everything in Starter', 'Products / catalogue with categories', 'Enquiry form to WhatsApp & email', 'Catalogue PDF download', 'Speed optimisation', 'Google search setup'],
    highlight: true
  },
  {
    name: 'AI Assistant Add-on',
    price: '+₹8,000',
    note: 'one-time',
    for: 'Add to any website',
    features: ['AI chat that knows your products', 'Answers customer questions 24/7', 'Hands leads over to WhatsApp', 'Runs on a free plan for most businesses'],
    highlight: false
  },
  {
    name: 'Custom Business Tools',
    price: 'On request',
    note: '',
    for: 'Enquiry tracker, quotation maker, stock',
    features: ['Built around your process', 'Works on mobile & computer', 'Branded PDF quotations', 'Quoted after a free call'],
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
//  PROCESS & FAQ
// -----------------------------------------------------------------------------
export const PROCESS = [
  { step: '01', title: 'Discuss', text: 'A free call to understand your business, customers and goals. You get a clear quote and timeline.' },
  { step: '02', title: 'Design & Build', text: 'I build your site and share progress links so you can see it grow and suggest changes.' },
  { step: '03', title: 'Launch', text: 'Domain, hosting, speed and Google setup done. Your site goes live, tested on phones and computers.' },
  { step: '04', title: 'Support', text: 'Help after launch, with optional monthly support for updates and changes.' }
];

export const FAQ = [
  { q: 'How long does a website take?', a: 'A starter website usually takes 1–2 weeks and a business website 2–4 weeks, depending on how quickly content (text, photos, logo) is ready.' },
  { q: 'Do I need to buy hosting?', a: 'Usually not. Most sites I build run on free, fast hosting. You only pay for your domain name (around ₹800–1,000 a year).' },
  { q: 'Can I update the website myself?', a: 'Yes. Prices, products and text are kept in simple files, or I can make updates for you under a monthly support plan.' },
  { q: 'Will it work well on mobile?', a: 'Yes. Every site is designed for phones first, then tablets and computers, and tested on real screen sizes before launch.' },
  { q: 'What do you need from me to start?', a: 'Your logo, business details, product or service list, and any photos you have. I can help with the rest.' },
  { q: 'How do payments work?', a: '50% advance to start, and 50% before the website goes live. Monthly support is optional.' }
];
