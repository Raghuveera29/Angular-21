import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../../Day_3/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  private productSubject = new BehaviorSubject<Products[]>([]);
  products$ = this.productSubject.asObservable();

  // Line-by-Line Explanation
  // -----------------------
  // BehaviorSubject<Products[]>([])
  // meaning:
  // state type -> Products[]
  // initial state -> empty Array

  // private productsSubject
  // internal state container
  // Components should not access FileSystemDirectoryHandle

  // products$
  // Observable exposed to components

  // .asObservable()
  // Prevents external code from calling
  // next()
  // This protects State

  loadProducts(products: Products[]) {
    this.productSubject.next(products);
  }

  // Explanation:
  // next() → update state
  // All subscribers receive new state

  addProduct(product: Products) {
    const current = this.productSubject.value;
    const updated = [...current, product];
    this.productSubject.next(updated);
  }

  // this.productsSubject.value
  // Gets current state.
  // Example:
  // [
  //  {id:1, name:'Laptop'}
  // ]
  // [...current, product]
  // Spread operator.
  // Creates new array reference.
  // Important for change detection.
  // ext(updated)
  // Updates store.
  // Subscribers receive updated state.
}
