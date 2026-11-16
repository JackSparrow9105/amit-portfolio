import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PRODUCTS, SITE } from './site-config';

/**
 * Site shell: top bar, footer, back-to-top and floating WhatsApp button.
 * Pages (home, /classkendra, /quotekaro) render in the router outlet.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent {
  readonly site = SITE;
  readonly products = PRODUCTS;
  readonly year = new Date().getFullYear();

  readonly navLinks = [
    { id: 'products', label: 'Products' },
    { id: 'services', label: 'Custom software' },
    { id: 'work', label: 'Work' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  menuOpen = false;
  scrolled = false;
  showTop = false;
  progress = 0;
  activeId = '';
  /** slug of the product page being shown, or '' on the home page */
  productSlug = '';

  constructor(private router: Router) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const path = this.router.url.split(/[?#]/)[0].replace(/^\//, '');
      this.productSlug = PRODUCTS.some(p => p.slug === path) ? path : '';
      this.menuOpen = false;
      setTimeout(() => this.onScroll());
    });
  }

  get onHome(): boolean {
    return !this.productSlug;
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const y = window.scrollY;
    this.scrolled = y > 20;
    this.showTop = y > 700;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = max > 0 ? Math.min(1, y / max) : 0;

    // highlight the nav link of the home-page section currently on screen
    let current = '';
    if (this.onHome) {
      for (const l of this.navLinks) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= 140) current = l.id;
      }
    }
    this.activeId = current;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.menuOpen = false;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  /** Scroll to a home-page section, or go to the home page first when on a product page. */
  go(id: string, e?: Event): void {
    e?.preventDefault();
    this.menuOpen = false;
    if (this.onHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      this.router.navigate(['/'], { fragment: id });
    }
  }

  toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  whatsappLink(): string {
    const p = PRODUCTS.find(x => x.slug === this.productSlug);
    const text = p
      ? `Hi Amoli Technologies, I'm interested in ${p.name}. Can you tell me more?`
      : 'Hi Amoli Technologies, I saw your website and would like to discuss my requirement.';
    return `https://wa.me/${this.site.whatsapp}?text=${encodeURIComponent(text)}`;
  }
}
