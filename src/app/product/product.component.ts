import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Product, ProductPlan, PRODUCTS, SITE } from '../site-config';
import { icon, setupReveal } from '../reveal';

const REVEAL = [
  '.head', '.stats', '.problem', '.service', '.screen', '.process li', '.plan-group', '.price-notes', '.faq-item', '.cta-band', '.also'
].join(',');

/** One page per product: /classkendra and /quotekaro. Content comes from PRODUCTS in site-config.ts. */
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html'
})
export class ProductComponent implements AfterViewInit, OnDestroy {
  readonly p: Product;
  readonly others: Product[];
  readonly icon = icon;
  billing: 'monthly' | 'yearly' = 'monthly';
  openFaq = 0;
  lightbox: { src: string; caption: string } | null = null;
  private stopReveal = () => {};

  constructor(private host: ElementRef<HTMLElement>, route: ActivatedRoute, router: Router, title: Title, meta: Meta) {
    const slug = route.snapshot.data['slug'] as string;
    const found = PRODUCTS.find(x => x.slug === slug);
    if (!found) { router.navigate(['/']); }
    this.p = found ?? PRODUCTS[0];
    this.others = PRODUCTS.filter(x => x.slug !== this.p.slug);
    title.setTitle(this.p.metaTitle);
    meta.updateTag({ name: 'description', content: this.p.metaDescription });
  }

  get desktopScreens() { return this.p.screens.filter(s => !s.phone); }
  get phoneScreens() { return this.p.screens.filter(s => s.phone); }

  ngAfterViewInit(): void {
    this.stopReveal = setupReveal(this.host.nativeElement, REVEAL);
  }

  ngOnDestroy(): void {
    this.stopReveal();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.lightbox = null;
  }

  go(id: string, e?: Event): void {
    e?.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  inr(n: number): string {
    return '₹' + n.toLocaleString('en-IN');
  }

  shownPrice(plan: ProductPlan): string {
    return this.billing === 'yearly' && this.p.yearlyMonths
      ? this.inr(plan.price * this.p.yearlyMonths)
      : this.inr(plan.price);
  }

  get period(): string {
    return this.billing === 'yearly' && this.p.yearlyMonths ? '/ year' : this.p.priceUnit;
  }

  whatsappLink(text = `Hi Amoli Technologies, I'm interested in ${this.p.name}. Can you tell me more?`): string {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  planLink(plan: ProductPlan): string {
    if (this.p.planAction === 'demo') return this.p.demoUrl;
    return this.whatsappLink(
      `Hi Amoli Technologies, I'd like to start ${this.p.name} on the ${plan.name} plan (${this.shownPrice(plan)} ${this.period}, ${plan.limit.toLowerCase()}).`
    );
  }

  planLabel(plan: ProductPlan): string {
    return this.p.planAction === 'demo' ? 'Start free trial' : `Get ${plan.name}`;
  }

  toggleFaq(i: number): void {
    this.openFaq = this.openFaq === i ? -1 : i;
  }
}
