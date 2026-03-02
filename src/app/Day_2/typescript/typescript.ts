import { Component } from '@angular/core';
import { Product } from '../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typescript',
  imports: [CommonModule],
  templateUrl: './typescript.html',
  styleUrl: './typescript.scss',
})
export class Typescript {
  //-------Earlier
  //products:any[]=[]

  //--------Now
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 50000, stock: true, category: 'electronics' },
    { id: 2, name: 'Mobile', price: 20000, stock: false, category: 'electronics' },
  ];

  //----------Earlier
  // selectProduct(p: any) {
  //     console.log('selected', p.name);
  //   }

  //----------Now
  selectProduct(p: Product) {
    console.log('selected', p.name);
  }
}
