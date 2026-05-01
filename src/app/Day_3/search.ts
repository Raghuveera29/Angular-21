import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Products } from './models/products';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private apiUrl = 'products.json';

  constructor(private http: HttpClient) {}

  searchProducts(term: string): Observable<Products[]> {
    return this.http.get<Products[]>(this.apiUrl).pipe(
      // transform response
      map((products) => products.filter((p) => p.name.toLowerCase().includes(term.toLowerCase()))),
    );
  }
}

// Understand Every Line
// private apiUrl = 'assets/products.json';

// Path to fake API file.

// http.get<Product[]>(this.apiUrl)

// Meaning:

// fetch JSON → expect array of Product

// TypeScript now knows shape.

// .pipe(...)

// We transform API response stream.

// map(products => ...)

// RxJS map transforms emitted value.

// Input: products: Product[]
// Output: filtered Product[]

// products.filter(...)

// Normal JS array filtering.

// p.name.toLowerCase().includes(term.toLowerCase())

// Case-insensitive search.
