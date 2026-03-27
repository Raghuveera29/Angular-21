import { Product } from '../../models/product.model';

export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProductState = {
  products: [],

  loading: false,

  error: null,
};

export interface AppState {
  products: ProductState;
}

// Explanation

// This interface describes store state structure.

// Example state:

// {
//  products: [],
//  loading: false,
//  error: null
// }
