import { ProductState } from './product.state';

export const selectProducts =
  (state: { products: ProductState }) =>
    state.products.products;

export const selectLoading =
  (state: { products: ProductState }) =>
    state.products.loading;

export const selectError =
  (state: { products: ProductState }) =>
    state.products.error;