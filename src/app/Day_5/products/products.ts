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
}

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
