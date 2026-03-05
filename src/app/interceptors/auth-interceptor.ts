import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = 'my-demo-token';

  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
  return next(clonedRequest);
};

//Day 5
//HttpInterceptorFn
//New angular 16+ functional interceptor
// cleaner than class interceptor

//req
//---
// Original request
//Eg - GET/products.json

//req.clone()
//HttpRequest objects are immutable
//cannot modify directly
//so we clone request with changes

//setHeaders
//Add HTTP headers
//Result request
//Authorization: Bearer my-demo-token

//next(clonedRequest)
//pass request to next interceptor or backend
