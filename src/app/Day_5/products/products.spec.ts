import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { Products } from './products';

describe('Products', () => {
  let component: Products;
  let fixture: ComponentFixture<Products>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Products],
      providers: [provideHttpClientTesting()], // ✅ FIXED (call function)
    }).compileComponents();

    fixture = TestBed.createComponent(Products);
    component = fixture.componentInstance;

    httpMock = TestBed.inject(HttpTestingController); // ✅ ADD THIS
    fixture.detectChanges(); // ✅ IMPORTANT (triggers API call)
  });

  it('should create', () => {
    // ✅ MOCK the HTTP request
    const req = httpMock.expectOne('products.json');
    req.flush([]); // fake response

    expect(component).toBeTruthy();
  });
});
