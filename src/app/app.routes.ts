import { Routes } from '@angular/router';
import { ProductList } from './Day_1/product-list/product-list';
import { TypeaheadComponent } from './Day_3/typeahead/typeahead';
import { RegisterForm } from './Day_4/register-form/register-form';
import { Products } from './Day_5/products/products';
import { Performance } from './Day_8/performance/performance';
import { ProductListState } from './Day_9/state/product-list.component';
import { ProductListComponent } from './Day_10/components/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'search',
    component: TypeaheadComponent,
  },
  {
    path: 'registerForm',
    component: RegisterForm,
  },
  {
    path: 'http5',
    component: Products,
  },
  {
    path: 'lazyproduct',
    loadChildren: () => import('./Day_6/products/products.routes').then((m) => m.productsRoutes),
  },
  {
    path: 'performance',
    component: Performance,
  },
  {
    path: 'state9',
    component: ProductListState,
  },
  {
    path: 'ng10',
    component: ProductListComponent,
  },
];
