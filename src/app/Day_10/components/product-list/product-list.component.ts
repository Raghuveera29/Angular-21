import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProducts } from '../../store/products/product.actions';
import { selectProducts, selectLoading } from '../../store/products/product.selectors';
import { CommonModule } from '@angular/common';
import { AppState } from '../../store/products/product.state';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [CommonModule],
})
export class ProductListComponent implements OnInit {
  products$!: any;
  loading$!: any;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.products$ = this.store.select(selectProducts);

    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadProducts());
  }
}
