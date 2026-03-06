import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  template: `<a [routerLink]="['/lazyproduct', 10]"> Product 10 </a>`,
})
export class ProductsComponent {}
