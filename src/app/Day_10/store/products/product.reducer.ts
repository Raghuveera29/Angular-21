import { createReducer, on } from '@ngrx/store';
import { initialState } from './product.state';
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure
} from './product.actions';

export const productReducer = createReducer(

  initialState,

  on(loadProducts, state => ({
    ...state,
    loading: true
  })),

  on(loadProductsSuccess, (state, action) => ({
    ...state,
    loading: false,
    products: action.products
  })),

  on(loadProductsFailure, (state, action) => ({
    ...state,
    loading: false,
    error: action.error
  }))

);