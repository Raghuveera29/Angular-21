import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList {
  products = [
    { id: 1, name: 'laptop', price: 3000, stock: true, category: 'electronics' },
    { id: 2, name: 'computer', price: 10000, stock: false, category: 'elecronics' },
    { id: 3, name: 'T-Shirt', price: 800, stock: true, category: 'fashion' },
    { id: 4, name: 'Book', price: 500, stock: true, category: 'books' },
  ];

  selectProduct(p: any) {
    console.log('selected', p.name);
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  addProduct() {
    this.products.push({
      id: Date.now(),
      name: 'macbook',
      price: 7000,
      stock: true,
      category: 'others',
    });
  }
}
