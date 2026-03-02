import { Routes } from '@angular/router';
import { ProductList } from './Day_1/product-list/product-list';
import { TypeaheadComponent } from './Day_3/typeahead/typeahead';

export const routes: Routes = [
  {
    path: '',
    component: ProductList,
  },
  {
    path: 'search',
    component: TypeaheadComponent,
  },
];
