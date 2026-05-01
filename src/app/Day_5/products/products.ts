import { Component } from '@angular/core';
import { ProductService } from '../product';
import { CommonModule } from '@angular/common';
interface Product {
  id: number;
  name: string;
  price: number;
}
@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.loadProducts();
  }
  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products, 'see');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  detailproduct() {
    this.productService.getProductDetail().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error('error fetching products:', err);
      },
      complete: () => {
        console.log('request complete');
      },
    });
  }
}

//****using Async pipe */
// import { Component } from '@angular/core';
// import { ProductService } from '../product';
// import { CommonModule } from '@angular/common';
// import { Observable } from 'rxjs';

// interface Product {
//   id: number;
//   name: string;
//   price: number;
// }

// @Component({
//   selector: 'app-products',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './products.html',
//   styleUrl: './products.scss',
// })
// export class Products {

//   product$!: Observable<Product[]>;

//   constructor(private productService: ProductService) {}

//   ngOnInit() {
//     this.product$ = this.productService.getProducts();
//   }

// }

// Component
//  ↓
// ProductService
//  ↓
// Interceptor
//  ↓
// Backend
//  ↓
// Response
//  ↓
// Interceptor
//  ↓
// Component
