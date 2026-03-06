import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `<h3>Product ID: {{ productId }}</h3>`,
})
export class ProductDetailComponent {
  productId!: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
    });
  }
}

//products/10
//router extracts
//id=10
//Accessible through ActivatedRoute
