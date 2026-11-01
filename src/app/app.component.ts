import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SITE, SERVICES, ERP_SERVICES, PROJECTS, PRICING, SUPPORT_PLAN, PRICING_NOTES,
  ERP_PRICING, ERP_EXTRAS, ERP_SUPPORT_PLAN, ERP_PRICING_NOTES, ERP_MODULES, PROCESS, FAQ
} from './site-config';

/** Elements that fade/slide in when they scroll into view */
const REVEAL = [
  '.head', '.group-title', '.service', '.case', '.results', '.next-project', '.process li',
  '.tabs', '.plan', '.support', '.price-notes', '.about > *', '.faq-item', '.contact-info', '.contact-form'
].join(',');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnDestroy {
  readonly site = SITE;
  readonly serviceGroups = [
    { title: 'Websites', items: SERVICES },
    { title: 'ERP & business software', items: ERP_SERVICES }
  ];
  readonly projects = PROJECTS;
  readonly erpExtras = ERP_EXTRAS;
  readonly erpModules = ERP_MODULES;

  // ---------------- Interactive estimate tool ----------------
  selected = new Set<string>();
  /** the number shown on screen; it counts up/down toward the real total */
  estimate = 0;
  private tweenId = 0;

  get estimateTarget(): number {
    return ERP_MODULES.filter(m => this.selected.has(m.name)).reduce((sum, m) => sum + m.price, 0);
  }

  toggleModule(name: string): void {
    if (this.selected.has(name)) this.selected.delete(name); else this.selected.add(name);
    this.tweenEstimate();
  }

  clearModules(): void {
    this.selected.clear();
    this.tweenEstimate();
  }

  formatInr(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
  }

  short(n: number): string {
    return '₹' + n / 1000 + 'k';
  }

  estimateLink(): string {
    const names = ERP_MODULES.filter(m => this.selected.has(m.name)).map(m => m.name);
    if (!names.length) return this.whatsappLink('Hi, I saw your portfolio and would like an ERP quote.');
    return this.whatsappLink(
      `Hi ${this.site.name}, I'd like a quote for ${names.length} ERP module${names.length > 1 ? 's' : ''}: ${names.join(', ')}. ` +
      `The website shows a starting estimate of ${this.formatInr(this.estimateTarget)}. Can we discuss?`
    );
  }

  private tweenEstimate(): void {
    cancelAnimationFrame(this.tweenId);
    const from = this.estimate;
    const to = this.estimateTarget;
    const t0 = performance.now();
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / 450);
      this.estimate = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) this.tweenId = requestAnimationFrame(step);
    };
    this.tweenId = requestAnimationFrame(step);
  }
  readonly process = PROCESS;
  readonly faq = FAQ;
  readonly year = new Date().getFullYear();

  readonly navLinks = [
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Work' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  /** which price list is shown: websites or ERP modules */
  pricingTab: 'web' | 'erp' = 'web';

  get pricing() { return this.pricingTab === 'erp' ? ERP_PRICING : PRICING; }
  get support() { return this.pricingTab === 'erp' ? ERP_SUPPORT_PLAN : SUPPORT_PLAN; }
  get pricingNotes() { return this.pricingTab === 'erp' ? ERP_PRICING_NOTES : PRICING_NOTES; }

  menuOpen = false;
  scrolled = false;
  showTop = false;
  progress = 0;
  activeId = '';
  tabChanged = false;
  private io?: IntersectionObserver;
  openFaq = 0;
  lightbox: { src: string; caption: string } | null = null;

  // ---------------- Contact form ----------------
  readonly projectTypes = ['Portfolio Website', 'Business Website', 'AI Assistant', 'Redesign / Speed fix', 'ERP Module', 'Multi-module ERP', 'ERP speed-up / migration', 'Not sure yet'];
  readonly budgets = ['Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000', '₹60,000 – ₹1,50,000', 'Above ₹1,50,000', 'Not sure'];
  form = { name: '', phone: '', business: '', type: 'Business Website', budget: 'Not sure', message: '' };
  errors: { [k: string]: string } = {};
  submitted = false;
  toast = '';
  private toastTimer: any;

  constructor(private host: ElementRef<HTMLElement>) {}

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled = y > 20;
    this.showTop = y > 700;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = max > 0 ? Math.min(1, y / max) : 0;

    // highlight the nav link of the section currently on screen
    let current = '';
    for (const l of this.navLinks) {
      const el = document.getElementById(l.id);
      if (el && el.getBoundingClientRect().top <= 140) current = l.id;
    }
    this.activeId = current;
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /** subtle 3D tilt on the hero mockup (mouse only) */
  tilt(e: PointerEvent): void {
    if (e.pointerType !== 'mouse') return;
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', (x * 8).toFixed(2) + 'deg');
    el.style.setProperty('--rx', (-y * 8).toFixed(2) + 'deg');
  }

  untilt(e: PointerEvent): void {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  }

  // ---------------- Scroll-reveal + count-up numbers ----------------
  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined' ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = Array.from(this.host.nativeElement.querySelectorAll<HTMLElement>(REVEAL));
    this.io = new IntersectionObserver(entries => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add('in');
        this.io?.unobserve(el);
        if (el.classList.contains('results')) {
          el.querySelectorAll<HTMLElement>('strong').forEach(n => this.countUp(n));
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    for (const el of targets) {
      // stagger siblings a little so grids cascade in
      const sibs = Array.from(el.parentElement?.children ?? []).filter(c => targets.includes(c as HTMLElement));
      el.style.setProperty('--d', Math.min(sibs.indexOf(el), 5) * 70 + 'ms');
      el.classList.add('reveal');
      this.io.observe(el);
    }
    this.onScroll();
  }

  ngOnDestroy(): void {
    this.io?.disconnect();
    cancelAnimationFrame(this.tweenId);
  }

  private countUp(n: HTMLElement): void {
    const m = /^(\d+)([%+]?)$/.exec((n.textContent || '').trim());
    if (!m) return; // e.g. "24/7" stays as it is
    const end = +m[1];
    const suffix = m[2];
    const t0 = performance.now();
    n.textContent = '0' + suffix;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / 1100);
      n.textContent = Math.round(end * (1 - Math.pow(1 - k, 3))) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen = false;
    this.lightbox = null;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  go(id: string): void {
    this.menuOpen = false;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  setTab(tab: 'web' | 'erp'): void {
    if (tab !== this.pricingTab) this.tabChanged = true;
    this.pricingTab = tab;
  }

  choosePlan(type: string): void {
    if (this.projectTypes.includes(type)) this.form.type = type;
    this.go('contact');
  }

  toggleFaq(i: number): void {
    this.openFaq = this.openFaq === i ? -1 : i;
  }

  whatsappLink(text = 'Hi, I saw your portfolio and would like to discuss a website.'): string {
    return `https://wa.me/${this.site.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  onPhoneInput(v: string): void {
    let d = (v || '').replace(/\D/g, '');
    if (d.length > 10 && d.startsWith('91')) d = d.slice(2);
    if (d.length > 10 && d.startsWith('0')) d = d.slice(1);
    this.form.phone = d.slice(0, 10);
    if (this.submitted) this.validate();
  }

  validate(): boolean {
    const e: { [k: string]: string } = {};
    if (this.form.name.trim().length < 2) e['name'] = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(this.form.phone)) e['phone'] = 'Enter a valid 10-digit mobile number.';
    if (this.form.message.length > 600) e['message'] = 'Please keep the message under 600 characters.';
    this.errors = e;
    return Object.keys(e).length === 0;
  }

  private enquiryText(): string {
    const f = this.form;
    return [
      `Hi ${this.site.name}, I'd like to discuss a project.`,
      '',
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone}`,
      f.business.trim() ? `Business: ${f.business.trim()}` : '',
      `Looking for: ${f.type}`,
      `Budget: ${f.budget}`,
      f.message.trim() ? `\nDetails:\n${f.message.trim()}` : ''
    ].filter(l => l !== '').join('\n');
  }

  sendWhatsApp(): void {
    this.submitted = true;
    if (!this.validate()) { this.focusFirstError(); return; }
    window.open(this.whatsappLink(this.enquiryText()), '_blank', 'noopener');
    this.showToast('Opening WhatsApp… just press Send there.');
  }

  sendEmail(): void {
    this.submitted = true;
    if (!this.validate()) { this.focusFirstError(); return; }
    const subject = encodeURIComponent(`Website enquiry from ${this.form.name.trim()}`);
    window.location.href = `mailto:${this.site.email}?subject=${subject}&body=${encodeURIComponent(this.enquiryText())}`;
    this.showToast('Opening your email app…');
  }

  private focusFirstError(): void {
    const first = Object.keys(this.errors)[0];
    if (first) document.getElementById('f-' + first)?.focus();
  }

  private showToast(msg: string): void {
    clearTimeout(this.toastTimer);
    this.toast = msg;
    this.toastTimer = setTimeout(() => (this.toast = ''), 3500);
  }

  icon(name: string): string {
    return ICONS[name] ?? ICONS['web'];
  }
}

// Simple line icons (24×24, stroke = currentColor)
const ICONS: { [k: string]: string } = {
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c0-4 3.6-7 8-7s8 3 8 7',
  erp: 'M4 4h7v7H4z M13 4h7v4h-7z M13 11h7v9h-7z M4 14h7v6H4z',
  flow: 'M4 5h6v5H4z M14 14h6v5h-6z M10 7.5h4a2 2 0 0 1 2 2V14',
  chart: 'M4 20V10 M10 20V4 M16 20v-8 M22 20H2',
  db: 'M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  upgrade: 'M12 20V8 M6 14l6-6 6 6 M5 4h14',
  api: 'M8 8l-4 4 4 4 M16 8l4 4-4 4 M14 5l-4 14',
  web: 'M3 5h18v14H3z M3 9h18 M7 7h.01 M10 7h.01',
  catalog: 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z',
  ai: 'M12 3v3 M12 18v3 M3 12h3 M18 12h3 M7 7h10v10H7z M10 10h4v4h-4z',
  speed: 'M12 14l4-4 M4 18a8 8 0 1 1 16 0 M12 6v2',
  tools: 'M14 7l3-3 3 3-3 3 M4 20l9-9 M7 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18'
};
