//Day 6 - routing
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('token');
  if (isLoggedIn) {
    return true;
  }

  alert('Login required');
  return false;
};

//CanActivateFn
//Functional guard introduced in Angular 15+.
//Cleaner than class guard.

//localStorage.getItem('token')
//Simulates authentication

//return true
//navigation allowed

//return false
//Navigation blocked
