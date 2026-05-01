import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductStore } from './product.store';

@Component({
  selector: 'app-productList',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
})
export class ProductListState {
  products$: any;

  constructor(private productStore: ProductStore) {
    this.products$ = this.productStore.products$;
  }

  ngOnInit() {
    const initialProducts = [
      { id: 1, name: 'laptop', price: 20000 },
      { id: 2, name: 'mobile', price: 15000 },
    ];
    this.productStore.loadProducts(initialProducts);
  }
  add() {
    const newProduct = {
      id: 3,
      name: 'Tablet',
      price: 30000,
    };

    this.productStore.addProduct(newProduct);
  }
}

// What Happens Now (State Flow)
//----------------------------
// When app loads:
// ngOnInit()
// ↓
// loadProducts()
// ↓
// BehaviorSubject.next()
// ↓
// products$ emits value
// ↓
// async pipe updates UI

// When button clicked:
//--------------------
// add()
// ↓
// addProduct()
// ↓
// BehaviorSubject.next(updatedArray)
// ↓
// products$ emits
// ↓
// UI updates automatically
