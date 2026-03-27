import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../../services/product.service';

import { loadProducts, loadProductsSuccess, loadProductsFailure } from './product.actions';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductService);

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),

      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => loadProductsSuccess({ products })),

          catchError((error) => of(loadProductsFailure({ error: error.message }))),
        ),
      ),
    ),
  );
}
