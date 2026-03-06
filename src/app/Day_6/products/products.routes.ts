import { Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail.component';
import { authGuard } from '../../guards/auth-guard';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },

  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [authGuard],
  },
];
