import { Component, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, takeUntil, tap } from 'rxjs/operators';
import { SearchService } from '../search';
import { Products } from '../models/products';

@Component({
  selector: 'app-typeahead',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './typeahead.html',
})
export class TypeaheadComponent implements OnDestroy {
  searchControl = new FormControl('');
  results$!: Observable<Products[]>;

  private destroy$ = new Subject<void>();

  loading = false;

  constructor(private searchService: SearchService) {
    this.results$ = this.searchControl.valueChanges.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      tap(() => (this.loading = true)),

      switchMap((term) => this.searchService.searchProducts(term || '')),

      tap(() => (this.loading = false)),

      takeUntil(this.destroy$),
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}

// valueChanges emits "lap"
// → debounceTime waits 300ms
// → distinctUntilChanged passes
// → switchMap calls searchProducts("lap")
// → HttpClient loads JSON
// → map filters ["Laptop"]
// → results$ emits
// → async pipe updates UI
