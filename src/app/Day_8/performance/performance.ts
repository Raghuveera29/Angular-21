import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService } from '../../Day_5/product';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-performance',
  imports: [CommonModule],
  templateUrl: './performance.html',
  styleUrl: './performance.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Performance {
  product$!: Observable<Product[]>;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product$ = this.productService.getProducts();
  }
  ngDoCheck() {
    console.log('change detection running');
  }
}

// ngDoCheck() Behavior
//--------------------
// Your code:
// ngDoCheck() {
//   console.log('change detection running');
// }

// This is useful for learning.
// But with OnPush, it will run less frequently than default change detection.
// Example behavior:

// App loads
// ↓
// ngDoCheck runs
// ↓
// Observable emits
// ↓
// ngDoCheck runs

// But it will NOT run repeatedly like Default strategy.

// Async Pipe With OnPush (Best Practice)
//----------------------------------------
// This combination is actually the recommended Angular architecture.
// Flow:

// ProductService
//      ↓
// Observable<Product[]>
//      ↓
// Async Pipe
//      ↓
// OnPush Change Detection
//      ↓
// DOM Update

// No manual subscription needed.

// When product$ emits:
//---------------------

// HTTP request completes
//       ↓
// Observable emits value
//       ↓
// async pipe receives value
//       ↓
// Angular marks component for check
//       ↓
// OnPush change detection runs
//       ↓
// DOM updated

// What Would Break OnPush?
// ------------------------

// Example that would NOT update UI:

// this.products.push(newProduct);

// Because reference didn't change.

// Correct:

// this.products = [...this.products, newProduct];

// Now Angular detects change.
