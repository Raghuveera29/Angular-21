export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

// Explanation

// This interface describes store state structure.

// Example state:

// {
//  products: [],
//  loading: false,
//  error: null
// }
