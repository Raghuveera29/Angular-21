//Product service file
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
export interface Product {
  id: number;
  name: string;
  price: number;
}
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(retry(2), catchError(this.handleError));
  }

  getProductDetail(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  private handleError(error: any) {
    console.error('API Error:', error);
    return throwError(() => new Error('Something went wrong'));
  }
}
