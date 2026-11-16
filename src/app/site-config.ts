// =============================================================================
//  AMOLI TECHNOLOGIES WEBSITE SETTINGS
//  Edit only this file to change contact details, products, prices and projects.
//  Anything in [SQUARE BRACKETS] is a placeholder: replace it with your details.
// =============================================================================

export const SITE = {
  name: 'Amoli Technologies',
  /** shown in the browser tab and footer */
  shortName: 'Amoli',
  tagline: 'Ready-to-use apps for schools and traders, and custom websites and ERP for growing businesses. Built in India, priced for Indian businesses.',
  city: 'Delhi, India',
  founder: 'Amit Tiwari',
  founderRole: 'Founder · .NET & Angular developer',

  // Contact
  phoneDisplay: '+91 9161495113',
  /** country code + number, digits only, e.g. 919876543210 */
  whatsapp: '919161495113',
  email: 'amt9105@gmail.com',
  linkedin: 'https://linkedin.com/in/amit9105',         //(leave empty to hide)
  github: '',            // e.g. 'https://github.com/your-username' (leave empty to hide)

  /** reply time promise shown near the contact form */
  replyTime: 'We usually reply within a few hours.',

  about: [
    'Amoli Technologies builds software that small and growing Indian businesses actually use every day. We make our own products, ClassKendra for coaching centres and schools and QuoteKaro for traders and suppliers, and we build custom websites and ERP for companies whose work doesn\'t fit an off-the-shelf app.',
    'The company was founded by Amit Tiwari, a developer with 4+ years of experience building ERP systems on .NET Core, SQL Server and Angular: purchase, inventory, approvals, bookings and reports. He has delivered 8+ ERP modules and made critical reports up to 90% faster.',
    'Everything we build works on a phone first, speaks the language of the business (GST, fee heads, WhatsApp) and comes with clear pricing and support after launch.'
  ],
  skills: ['.NET Core', 'C#', 'SQL Server', 'Web API', 'Angular', 'TypeScript', 'WordPress', 'WhatsApp & UPI integrations', 'AI chat assistants', 'Mobile-first design']
};

// -----------------------------------------------------------------------------
//  PRODUCTS (each gets a card on the home page and its own page: /classkendra, /quotekaro)
// -----------------------------------------------------------------------------
export interface ProductPlan {
  name: string;
  price: number;
  /** what the price buys, e.g. "Up to 100 students" */
  limit: string;
  features: string[];
  popular?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  logo: string;
  /** one line under the name */
  category: string;
  /** big headline on the product page */
  headline: string;
  pitch: string;
  audience: string[];
  cardPoints: string[];
  startPrice: number;
  priceUnit: string;
  demoUrl: string;
  demoLabel: string;
  demoNote: string;
  cover: string;
  phone: string;
  stats: { value: string; label: string }[];
  problems: string[];
  features: { icon: string; title: string; text: string }[];
  steps: { title: string; text: string }[];
  screens: { src: string; caption: string; phone?: boolean }[];
  planGroups: { title: string; note: string; plans: ProductPlan[] }[];
  /** yearly price = monthly × this number (e.g. 10 = 2 months free); leave out for monthly only */
  yearlyMonths?: number;
  /** plan buttons: 'demo' opens the sign-up / demo link, 'whatsapp' sends a WhatsApp message */
  planAction: 'demo' | 'whatsapp';
  pricingNotes: string[];
  faq: { q: string; a: string }[];
  /** browser tab title and Google description for the product page */
  metaTitle: string;
  metaDescription: string;
}

export const PRODUCTS: Product[] = [
  {
    slug: 'classkendra',
    name: 'ClassKendra',
    logo: 'assets/products/classkendra-mark.svg',
    category: 'Fees & attendance app for coaching centres and schools',
    headline: 'Collect fees on time, without chasing parents.',
    pitch: 'ClassKendra sends fee reminders to parents on WhatsApp with a payment link, marks attendance in a few taps and shows who has paid and who hasn\'t. It runs on your phone and is set up in about 5 minutes.',
    audience: ['Coaching & tuition centres', 'Schools', 'JEE / NEET institutes', 'Computer & spoken English classes'],
    cardPoints: [
      'Automatic fee reminders on WhatsApp',
      'Parents pay online from the reminder link',
      'Attendance with absent alerts to parents',
      'Receipts, collection reports and Excel'
    ],
    startPrice: 999,
    priceUnit: '/ month',
    demoUrl: 'https://jacksparrow9105.github.io/classkendra-web/',
    demoLabel: 'Start free trial',
    demoNote: 'Sign up with your mobile number. No card needed.',
    cover: 'assets/products/classkendra-desktop.webp',
    phone: 'assets/products/classkendra-phone.webp',
    stats: [
      { value: '5 min', label: 'to set up' },
      { value: '0', label: 'apps for parents to install' },
      { value: '2', label: 'languages: English & Hindi' }
    ],
    problems: [
      'Fee records in registers and Excel sheets',
      'Calling and messaging parents one by one every month',
      'No clear picture of who has paid and how much is pending',
      'Attendance on paper that parents never see'
    ],
    features: [
      { icon: 'whatsapp', title: 'WhatsApp fee reminders', text: 'Reminders go out on their own when fees fall due, in English or Hindi, with a link parents can pay from. Remind every late family with one tap.' },
      { icon: 'card', title: 'Online fee payment', text: 'The reminder opens a simple page showing the student\'s unpaid fees. Parents pick what to pay and pay online, with no login and no app.' },
      { icon: 'check', title: 'Attendance in a few taps', text: 'Everyone starts as present; tap the students who are absent and save. Parents of absent students get an alert on WhatsApp.' },
      { icon: 'fees', title: 'Fees the way you charge them', text: 'Monthly, quarterly, term-wise, yearly and one-time fee heads, opt-in transport fee, sibling and scholarship concessions, and part payments.' },
      { icon: 'receipt', title: 'Receipts and reports', text: 'Every payment gets a numbered receipt you can print or share on WhatsApp. Monthly collection reports by batch or class, with Excel download.' },
      { icon: 'users', title: 'Staff and teacher logins', text: 'Owner, office staff and teachers each sign in with their own number and see only what they need. An app PIN keeps fee data private.' },
      { icon: 'upgrade', title: 'Promote to next class', text: 'Move a whole school up a class in one go at session end. Students kept back stay where they are and unpaid fees stay with the student.' },
      { icon: 'phone', title: 'Works like an app', text: 'Install it on any Android phone or iPhone from the browser. Works on a laptop too, with a bigger dashboard.' }
    ],
    steps: [
      { title: 'Sign up', text: 'Enter your mobile number and the code we send. Add your centre or school name.' },
      { title: 'Add batches and students', text: 'Create batches or classes, then add students one by one or import them from Excel.' },
      { title: 'Set fees', text: 'Add your fee heads and due dates once. ClassKendra raises the bills every month.' },
      { title: 'Let reminders work', text: 'Parents get reminders with a payment link; you see collections come in on the dashboard.' }
    ],
    screens: [
      { src: 'assets/products/classkendra-fees-desktop.webp', caption: 'Pending fees with one-tap WhatsApp reminders' },
      { src: 'assets/products/classkendra-messages-desktop.webp', caption: 'Every WhatsApp message with its delivery status' },
      { src: 'assets/products/classkendra-students-desktop.webp', caption: 'Students by batch, with parent numbers' },
      { src: 'assets/products/classkendra-fees-phone.webp', caption: 'Fees on the phone', phone: true },
      { src: 'assets/products/classkendra-attendance-phone.webp', caption: 'Attendance in a few taps', phone: true },
      { src: 'assets/products/classkendra-messages-phone.webp', caption: 'WhatsApp message log', phone: true },
      { src: 'assets/products/classkendra-reports-phone.webp', caption: 'Monthly collection report', phone: true }
    ],
    planGroups: [
      {
        title: 'Coaching & tuition centres',
        note: 'Batches with monthly fees',
        plans: [
          { name: 'Starter', price: 999, limit: 'Up to 100 students', features: ['1,000 WhatsApp messages a month', 'Fees, attendance and receipts', 'Owner, office and teacher logins'] },
          { name: 'Growth', price: 1999, limit: 'Up to 300 students', features: ['3,000 WhatsApp messages a month', 'Everything in Starter', 'Collection reports with Excel'], popular: true },
          { name: 'Pro', price: 3499, limit: 'Up to 600 students', features: ['6,000 WhatsApp messages a month', 'Everything in Growth', 'Priority WhatsApp support'] }
        ]
      },
      {
        title: 'Schools',
        note: 'Classes, sections and several fee heads',
        plans: [
          { name: 'School', price: 2999, limit: 'Up to 500 students', features: ['5,000 WhatsApp messages a month', 'Fee heads, transport and concessions', 'Promote to next class'] },
          { name: 'School Plus', price: 5999, limit: 'Up to 1,500 students', features: ['15,000 WhatsApp messages a month', 'Everything in School', 'Priority WhatsApp support'], popular: true }
        ]
      }
    ],
    yearlyMonths: 10,
    planAction: 'demo',
    pricingNotes: [
      'Pay yearly and get 2 months free.',
      'Every plan starts with a free trial.',
      'Prices are per centre or school, per month.'
    ],
    faq: [
      { q: 'Do parents need to install an app?', a: 'No. Parents get WhatsApp messages and a payment link that opens in their browser. Only you and your staff use the app.' },
      { q: 'Can I try it before paying?', a: 'Yes. Sign up with your mobile number and use it free during the trial. Tap "Fill with sample data" on the dashboard to see a busy centre straight away.' },
      { q: 'Does it work for schools as well as coaching centres?', a: 'Yes. Coaching centres use batches with monthly fees; schools use classes with sections and several fee heads such as tuition, transport, annual and exam fees.' },
      { q: 'Is it available in Hindi?', a: 'Yes. Switch to Hindi on the sign-in screen or in Settings, and send parent messages in Hindi too.' },
      { q: 'Can my teachers use it?', a: 'Yes. Add teachers under Settings. They sign in with their own number and can mark attendance for their batches without seeing fee details.' },
      { q: 'What if I have my students in Excel?', a: 'Import them in one go. If your list is messy, send it to us on WhatsApp and we will help.' }
    ],
    metaTitle: 'ClassKendra | Fees, attendance & WhatsApp reminders for coaching centres and schools',
    metaDescription: 'Collect fees on time with automatic WhatsApp reminders and online payment, mark attendance in a few taps, and see who has paid. For coaching centres and schools. Free trial.'
  },
  {
    slug: 'quotekaro',
    name: 'QuoteKaro',
    logo: 'assets/products/quotekaro-icon.png',
    category: 'GST quotations and invoices for traders and suppliers',
    headline: 'GST quotations in 2 minutes. Shared on WhatsApp.',
    pitch: 'QuoteKaro makes professional GST quotations, proforma invoices, tax invoices and delivery challans from your phone or laptop, shares them on WhatsApp as PDFs and tracks every deal until it\'s paid.',
    audience: ['Traders & distributors', 'Manufacturers & suppliers', 'Contractors & installers', 'Service businesses'],
    cardPoints: [
      'GST quotes with HSN and auto CGST / SGST / IGST',
      'Quote → proforma → tax invoice in one tap',
      'PDF on WhatsApp with UPI QR for payment',
      'Won / lost tracking, follow-ups and stock'
    ],
    startPrice: 199,
    priceUnit: '/ month',
    demoUrl: 'https://jacksparrow9105.github.io/quotekaro/',
    demoLabel: 'Try the live demo',
    demoNote: 'Opens with sample quotes, customers and products. No sign-up.',
    cover: 'assets/products/quotekaro-desktop.webp',
    phone: 'assets/products/quotekaro-phone.webp',
    stats: [
      { value: '2 min', label: 'to make a GST quote' },
      { value: '4', label: 'PDF layouts' },
      { value: '∞', label: 'quotes on every plan' }
    ],
    problems: [
      'Quotations typed in Word or Excel, with GST worked out by hand',
      'No record of which quotes were won, lost or still waiting',
      'Retyping the same items again for the proforma and invoice',
      'Forgetting to follow up and to chase payments'
    ],
    features: [
      { icon: 'doc', title: 'GST quotations', text: 'Pick a customer and products; HSN, discounts and GST are filled in. CGST + SGST or IGST is chosen from the customer\'s state automatically.' },
      { icon: 'whatsapp', title: 'Share on WhatsApp as PDF', text: 'Send a clean PDF straight to the customer\'s WhatsApp, or download it. Choose from four layouts: Classic, Modern, GST / ERP and Elegant.' },
      { icon: 'flow', title: 'Quote to proforma to invoice', text: 'Convert a won quote into a proforma invoice and then a final GST tax invoice without retyping anything. Invoice numbers restart every financial year.' },
      { icon: 'upi', title: 'UPI QR for faster payment', text: 'Your UPI ID is printed as a QR code on the proforma, so customers can pay the advance from any UPI app.' },
      { icon: 'chart', title: 'Track every deal', text: 'Draft, sent, won or lost, with follow-up reminders, revisions, loss reasons, win rate and the value of your open pipeline.' },
      { icon: 'box', title: 'Inventory and barcodes', text: 'Stock for every product, low-stock alerts, and stock reserved when a quote becomes a proforma. Scan barcodes to add items.' },
      { icon: 'truck', title: 'Delivery challans', text: 'Make a delivery challan for goods that leave your godown, ready to print or share with the customer.' },
      { icon: 'users', title: 'Customers and payments due', text: 'Customers with GSTIN check, their full history, payments due and a one-tap WhatsApp payment reminder. Export to CSV any time.' }
    ],
    steps: [
      { title: 'Add your business', text: 'Your company name, GSTIN, bank details, UPI ID and logo, once.' },
      { title: 'Add products and customers', text: 'With HSN, rate and GST. Or add them as you make your first quote.' },
      { title: 'Make and share quotes', text: 'Build a quote in a couple of minutes and send it as a PDF on WhatsApp.' },
      { title: 'Win, invoice and get paid', text: 'Mark it won, convert to proforma and invoice, and track the payment.' }
    ],
    screens: [
      { src: 'assets/products/quotekaro-quote-desktop.webp', caption: 'A GST quotation, ready to share as PDF' },
      { src: 'assets/products/quotekaro-quotes-desktop.webp', caption: 'All quotes with draft, sent, won and lost status' },
      { src: 'assets/products/quotekaro-inventory-desktop.webp', caption: 'Inventory with stock value and low-stock alerts' },
      { src: 'assets/products/quotekaro-quote-phone.webp', caption: 'Share on WhatsApp from the phone', phone: true },
      { src: 'assets/products/quotekaro-quotes-phone.webp', caption: 'Quotes list on the phone', phone: true },
      { src: 'assets/products/quotekaro-inventory-phone.webp', caption: 'Stock on the go', phone: true }
    ],
    planGroups: [
      {
        title: 'Plans',
        note: 'Unlimited quotes, proformas and invoices on every plan',
        plans: [
          { name: 'Starter', price: 199, limit: 'Up to 3 users', features: ['Unlimited quotes and invoices', 'All 4 PDF layouts', 'Inventory and customers'] },
          { name: 'Team', price: 499, limit: 'Up to 6 users', features: ['Everything in Starter', 'For a growing sales team', 'Reports and win rate'], popular: true },
          { name: 'Business', price: 999, limit: 'Unlimited users', features: ['Everything in Team', 'Any number of users', 'Priority WhatsApp support'] }
        ]
      }
    ],
    planAction: 'whatsapp',
    pricingNotes: [
      'Prices are per business, per month.',
      'Unlimited quotes on every plan.'
    ],
    faq: [
      { q: 'Can I try it before buying?', a: 'Yes. Open the live demo: it comes with sample customers, products and quotes, so you can make a quote and share it straight away.' },
      { q: 'Does it handle GST correctly?', a: 'Each product carries its HSN code and GST rate. QuoteKaro applies CGST + SGST for customers in your state and IGST for other states, and shows an HSN-wise tax summary on the GST layout.' },
      { q: 'Can I use my own logo and terms?', a: 'Yes. Add your logo, bank details, UPI ID and terms and conditions once in Settings; they appear on every document.' },
      { q: 'Does it work on a phone?', a: 'Yes. QuoteKaro is built phone-first, with a bottom menu and big buttons, and it also works on a laptop.' },
      { q: 'What is a user?', a: 'Anyone in your team who makes quotes, such as a salesperson or an office executive. Each quote shows who prepared it.' }
    ],
    metaTitle: 'QuoteKaro | GST quotations, proforma & tax invoices on WhatsApp',
    metaDescription: 'Make GST quotations, proforma invoices, tax invoices and delivery challans, share them on WhatsApp as PDFs, and track won and lost deals. Plans from ₹199 a month.'
  }
];

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
//  Change the three numbers in TIER_PRICE: the price cards AND the estimate
//  tool both update from them.
// -----------------------------------------------------------------------------
export const TIER_PRICE = { simple: 15000, standard: 30000, advanced: 55000 };
export type Tier = keyof typeof TIER_PRICE;
const inr = (n: number) => '₹' + n.toLocaleString('en-IN');

/** Modules shown in the "Build your ERP estimate" tool. Pick a tier for each. */
export const ERP_MODULES: { name: string; tier: Tier; price: number }[] = ([
  { name: 'Visitor Management', tier: 'simple' },
  { name: 'Room / Conference Booking', tier: 'simple' },
  { name: 'Ticketing', tier: 'simple' },
  { name: 'Supplier', tier: 'standard' },
  { name: 'Customer', tier: 'standard' },
  { name: 'HR Requisition', tier: 'standard' },
  { name: 'Inventory', tier: 'standard' },
  { name: 'Purchase Order', tier: 'advanced' },
  { name: 'Bill of Material', tier: 'advanced' },
  { name: 'Job Bag', tier: 'advanced' },
  { name: 'Artwork Approval', tier: 'advanced' },
  { name: 'Goods Receipt (MRN)', tier: 'advanced' }
] as { name: string; tier: Tier }[]).map(m => ({ ...m, price: TIER_PRICE[m.tier] }));

export const ERP_PRICING = [
  {
    name: 'Simple Module',
    type: 'ERP Module',
    price: inr(TIER_PRICE.simple),
    note: 'per module',
    for: 'Visitor management, room booking, asset register, gate pass',
    features: ['Master data and entry screens', 'Search, filters and Excel export', 'Role-based login', '2 reports', 'Works on phone and desktop'],
    highlight: false
  },
  {
    name: 'Standard Module',
    type: 'ERP Module',
    price: inr(TIER_PRICE.standard),
    note: 'per module',
    for: 'Supplier, customer, HR requisition, inventory',
    features: ['Everything in Simple', 'Up to 2-level approval flow', 'Email alerts', 'Up to 5 reports and dashboard cards', 'Fast stored-procedure backend'],
    highlight: true
  },
  {
    name: 'Advanced Module',
    type: 'ERP Module',
    price: inr(TIER_PRICE.advanced),
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
  { step: '02', title: 'Plan & Build', text: 'Websites: we share progress links as we build. ERP: we map your workflow first, then build and demo module by module.' },
  { step: '03', title: 'Launch', text: 'Websites: domain, hosting, speed and Google setup. ERP: testing with your team, data import and go-live.' },
  { step: '04', title: 'Support', text: 'Help after launch, with optional monthly support for updates and changes.' }
];

export const FAQ = [
  { q: 'What does Amoli Technologies make?', a: 'Two ready-to-use products, ClassKendra for coaching centres and schools and QuoteKaro for traders and suppliers, plus custom websites and ERP software built around how your business works.' },
  { q: 'Can I try your products before paying?', a: 'Yes. ClassKendra has a free trial and QuoteKaro has a live demo with sample data. Open them from the Products section or the product pages.' },
  { q: 'How long does a website take?', a: 'A portfolio website usually takes 1–2 weeks and a business website 2–4 weeks, depending on how quickly content (text, photos, logo) is ready.' },
  { q: 'Do I need to buy hosting?', a: 'For websites, usually not. Most sites we build run on free, fast hosting. You only pay for your domain name (around ₹800–1,000 a year).' },
  { q: 'Can I update the website myself?', a: 'Yes. Prices, products and text are kept in simple files, or we can make updates for you under a monthly support plan.' },
  { q: 'Will it work well on mobile?', a: 'Yes. Websites are designed for phones first, and ERP screens are built to work on phones too, so approvals, bookings and reports can be used on the go.' },
  { q: 'How is ERP work priced?', a: 'Per module, by how complex it is: simple, standard or advanced (see the Pricing section). You get an exact quote after a free call about your workflow.' },
  { q: 'Can I start with just one ERP module?', a: 'Yes. Most clients start with the module that hurts the most, such as purchase or approvals, and add more later. Each module is built to share the same login and master data.' },
  { q: 'How long does an ERP module take?', a: 'A simple module usually takes 1–2 weeks, a standard one 2–4 weeks and an advanced one 4–8 weeks, depending on how clear the process is and how quickly your team gives feedback.' },
  { q: 'What do you need from me to start?', a: 'For a website: your logo, business details, product or service list and any photos. For ERP: a walkthrough of how the work is done today, plus any Excel sheets or forms you use. We can help with the rest.' },
  { q: 'How do payments work?', a: '50% advance to start, and 50% before the website goes live or the module is delivered. Monthly support is optional.' }
];
