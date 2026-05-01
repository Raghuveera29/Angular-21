import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Performance } from './performance';

describe('Performance', () => {
  let component: Performance;
  let fixture: ComponentFixture<Performance>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Performance],
      providers: [provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Performance);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
