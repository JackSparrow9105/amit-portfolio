import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  // Product pages: content comes from PRODUCTS in site-config.ts (slug must match)
  { path: 'classkendra', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent), data: { slug: 'classkendra' } },
  { path: 'quotekaro', loadComponent: () => import('./product/product.component').then(m => m.ProductComponent), data: { slug: 'quotekaro' } },
  { path: '**', redirectTo: '' }
];
