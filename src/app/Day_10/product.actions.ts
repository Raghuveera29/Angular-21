import { createAction, props } from '@ngrx/store';

export const loadProducts = createAction('[Product] Load Products');

export const loadProductsSuccess = createAction(
  '[product] Load Products Success',
  props<{ products: Product[] }>(),
);

export const loadProductsFailure = createAction(
  '[product] Load Products Failure',
  props<{ error: string }>(),
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
