import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.model';

export const loadProducts =
  createAction('[Product] Load Products');

export const loadProductsSuccess =
  createAction(
    '[Product] Load Products Success',
    props<{ products: Product[] }>()
  );

export const loadProductsFailure =
  createAction(
    '[Product] Load Products Failure',
    props<{ error: string }>()
  );
// Explanation
// createAction()

// Creates action object.

// Action Types
// [Feature] Event

// Example:

// [Product] Load Products

// This makes debugging easier.

// props

// Defines payload structure.

// Example:

// products: Product[]
