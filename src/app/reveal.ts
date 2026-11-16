/**
 * Scroll-reveal and count-up numbers, shared by the home page and the product pages.
 * Elements matching `selector` fade/slide in when they scroll into view;
 * numbers inside `.results` / `.stats` count up from 0.
 */
export function setupReveal(root: HTMLElement, selector: string): () => void {
  if (typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  const targets = Array.from(root.querySelectorAll<HTMLElement>(selector));
  const io = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const el = e.target as HTMLElement;
      el.classList.add('in');
      io.unobserve(el);
      if (el.classList.contains('results') || el.classList.contains('stats')) {
        el.querySelectorAll<HTMLElement>('strong').forEach(countUp);
      }
    }
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

  for (const el of targets) {
    // stagger siblings a little so grids cascade in
    const sibs = Array.from(el.parentElement?.children ?? []).filter(c => targets.includes(c as HTMLElement));
    el.style.setProperty('--d', Math.min(sibs.indexOf(el), 5) * 70 + 'ms');
    el.classList.add('reveal');
    io.observe(el);
  }
  return () => io.disconnect();
}

function countUp(n: HTMLElement): void {
  const m = /^(\d+)([%+]?)$/.exec((n.textContent || '').trim());
  if (!m) return; // e.g. "24/7" or "5 min" stays as it is
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

/** Simple line icons (24×24, stroke = currentColor) */
export const ICONS: { [k: string]: string } = {
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M4 21c0-4 3.6-7 8-7s8 3 8 7',
  users: 'M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M2 21c0-3.9 3.1-7 7-7s7 3.1 7 7 M16 3.5a4 4 0 0 1 0 7.5 M18.5 14.5c2 .9 3.5 3.3 3.5 6.5',
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
  globe: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z M3 12h18 M12 3c3 3 3 15 0 18 M12 3c-3 3-3 15 0 18',
  whatsapp: 'M4 20l1.4-4.2A8 8 0 1 1 8.4 18.7z M9 9.5c.3 2.3 2.2 4.4 4.7 5 l1.3-1.3 2 1-.4 1.5c-3.6.4-8-3.6-7.8-7.6L10.2 7.6l1 2z',
  card: 'M3 6h18v12H3z M3 10h18 M7 15h4',
  check: 'M4 12l5 5L20 6',
  fees: 'M7 4h10 M7 8h10 M7 4c3 0 5 1.5 5 4s-2 4-5 4h-.5L14 20',
  receipt: 'M6 3h12v18l-3-2-3 2-3-2-3 2z M9 8h6 M9 12h6',
  phone: 'M7 2h10v20H7z M11 18h2',
  doc: 'M6 3h8l4 4v14H6z M14 3v4h4 M9 12h6 M9 16h6',
  upi: 'M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h2v2h-2z M18 14h2 M14 18h2v2 M18 18h2v2h-2',
  box: 'M12 3l8 4.5v9L12 21l-8-4.5v-9z M4 7.5l8 4.5 8-4.5 M12 12v9',
  truck: 'M2 6h12v10H2z M14 10h4l3 3v3h-7z M6 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'
};

export function icon(name: string): string {
  return ICONS[name] ?? ICONS['web'];
}
