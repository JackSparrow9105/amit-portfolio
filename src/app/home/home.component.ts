import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import {
  SITE, SERVICES, ERP_SERVICES, PROJECTS, PRODUCTS, PRICING, SUPPORT_PLAN, PRICING_NOTES,
  ERP_PRICING, ERP_EXTRAS, ERP_SUPPORT_PLAN, ERP_PRICING_NOTES, ERP_MODULES, PROCESS, FAQ
} from '../site-config';
import { icon, setupReveal } from '../reveal';

/** Elements that fade/slide in when they scroll into view */
const REVEAL = [
  '.head', '.product-card', '.group-title', '.service', '.case', '.results', '.next-project', '.process li',
  '.tabs', '.plan', '.support', '.price-notes', '.about > *', '.faq-item', '.contact-info', '.contact-form'
].join(',');

export const HOME_TITLE = 'Amoli Technologies | Software for schools, traders and growing businesses';
export const HOME_DESCRIPTION = 'Amoli Technologies makes ClassKendra (fees & attendance for coaching centres and schools) and QuoteKaro (GST quotations & invoices), and builds custom websites and ERP for Indian businesses.';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly site = SITE;
  readonly products = PRODUCTS;
  readonly serviceGroups = [
    { title: 'Websites', items: SERVICES },
    { title: 'ERP & business software', items: ERP_SERVICES }
  ];
  readonly projects = PROJECTS;
  readonly erpExtras = ERP_EXTRAS;
  readonly erpModules = ERP_MODULES;
  readonly process = PROCESS;
  readonly faq = FAQ;
  readonly icon = icon;

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
    if (!names.length) return this.whatsappLink('Hi Amoli Technologies, I would like an ERP quote.');
    return this.whatsappLink(
      `Hi Amoli Technologies, I'd like a quote for ${names.length} ERP module${names.length > 1 ? 's' : ''}: ${names.join(', ')}. ` +
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

  /** which price list is shown: websites or ERP modules */
  pricingTab: 'web' | 'erp' = 'web';

  get pricing() { return this.pricingTab === 'erp' ? ERP_PRICING : PRICING; }
  get support() { return this.pricingTab === 'erp' ? ERP_SUPPORT_PLAN : SUPPORT_PLAN; }
  get pricingNotes() { return this.pricingTab === 'erp' ? ERP_PRICING_NOTES : PRICING_NOTES; }

  tabChanged = false;
  openFaq = 0;
  lightbox: { src: string; caption: string } | null = null;
  private stopReveal = () => {};

  // ---------------- Contact form ----------------
  readonly projectTypes = [
    ...PRODUCTS.map(p => p.name),
    'Portfolio Website', 'Business Website', 'AI Assistant', 'Redesign / Speed fix',
    'ERP Module', 'Multi-module ERP', 'ERP speed-up / migration', 'Not sure yet'
  ];
  readonly budgets = ['Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000', '₹60,000 – ₹1,50,000', 'Above ₹1,50,000', 'Not sure'];
  form = { name: '', phone: '', business: '', type: 'Business Website', budget: 'Not sure', message: '' };
  errors: { [k: string]: string } = {};
  submitted = false;
  toast = '';
  private toastTimer: any;

  constructor(private host: ElementRef<HTMLElement>, private route: ActivatedRoute, title: Title, meta: Meta) {
    title.setTitle(HOME_TITLE);
    meta.updateTag({ name: 'description', content: HOME_DESCRIPTION });
    // "Ask about this product" links from the product pages pre-select the product
    const interest = this.route.snapshot.queryParamMap.get('interest');
    if (interest && this.projectTypes.includes(interest)) {
      this.form.type = interest;
      this.form.budget = 'Not sure';
    }
  }

  ngAfterViewInit(): void {
    this.stopReveal = setupReveal(this.host.nativeElement, REVEAL);
    // arriving from another page with #section in the address
    const frag = this.route.snapshot.fragment;
    if (frag) setTimeout(() => document.getElementById(frag)?.scrollIntoView({ block: 'start' }), 60);
  }

  ngOnDestroy(): void {
    this.stopReveal();
    cancelAnimationFrame(this.tweenId);
    clearTimeout(this.toastTimer);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.lightbox = null;
  }

  go(id: string, e?: Event): void {
    e?.preventDefault();
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

  whatsappLink(text = 'Hi Amoli Technologies, I saw your website and would like to discuss my requirement.'): string {
    return `https://wa.me/${this.site.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  get isProductEnquiry(): boolean {
    return PRODUCTS.some(p => p.name === this.form.type);
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
      this.isProductEnquiry ? `Hi Amoli Technologies, I'm interested in ${f.type}.` : `Hi Amoli Technologies, I'd like to discuss a project.`,
      '',
      `Name: ${f.name.trim()}`,
      `Phone: ${f.phone}`,
      f.business.trim() ? `Business: ${f.business.trim()}` : '',
      `Interested in: ${f.type}`,
      this.isProductEnquiry ? '' : `Budget: ${f.budget}`,
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
    const subject = encodeURIComponent(`Enquiry from ${this.form.name.trim()}: ${this.form.type}`);
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

  /** "₹1,999" */
  inr(n: number): string {
    return this.formatInr(n);
  }
}
