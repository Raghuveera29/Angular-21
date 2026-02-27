export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

//can be used as
// ApiResponse<Product[]>
// ApiResponse<Product>
