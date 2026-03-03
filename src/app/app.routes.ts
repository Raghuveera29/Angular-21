import { Routes } from '@angular/router';
import { ProductList } from './Day_1/product-list/product-list';
import { TypeaheadComponent } from './Day_3/typeahead/typeahead';
import { RegisterForm } from './Day_4/register-form/register-form';

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
];
