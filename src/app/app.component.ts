import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  SITE, SERVICES, PROJECTS, PRICING, SUPPORT_PLAN, PRICING_NOTES, PROCESS, FAQ
} from './site-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly site = SITE;
  readonly services = SERVICES;
  readonly projects = PROJECTS;
  readonly pricing = PRICING;
  readonly support = SUPPORT_PLAN;
  readonly pricingNotes = PRICING_NOTES;
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

  menuOpen = false;
  scrolled = false;
  openFaq = 0;
  lightbox: { src: string; caption: string } | null = null;

  // ---------------- Contact form ----------------
  readonly projectTypes = ['Starter Website', 'Business Website', 'AI Assistant', 'Custom Business Tool', 'Redesign / Speed fix', 'Not sure yet'];
  readonly budgets = ['Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000', 'Above ₹60,000', 'Not sure'];
  form = { name: '', phone: '', business: '', type: 'Business Website', budget: 'Not sure', message: '' };
  errors: { [k: string]: string } = {};
  submitted = false;
  toast = '';
  private toastTimer: any;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 20;
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

  choosePlan(plan: string): void {
    const match = this.projectTypes.find(t => plan.toLowerCase().includes(t.split(' ')[0].toLowerCase()));
    if (match) this.form.type = match;
    if (plan.startsWith('AI')) this.form.type = 'AI Assistant';
    if (plan.startsWith('Custom')) this.form.type = 'Custom Business Tool';
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
  web: 'M3 5h18v14H3z M3 9h18 M7 7h.01 M10 7h.01',
  catalog: 'M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z',
  ai: 'M12 3v3 M12 18v3 M3 12h3 M18 12h3 M7 7h10v10H7z M10 10h4v4h-4z',
  speed: 'M12 14l4-4 M4 18a8 8 0 1 1 16 0 M12 6v2',
  tools: 'M14 7l3-3 3 3-3 3 M4 20l9-9 M7 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18'
};
