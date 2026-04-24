import { Component } from '@angular/core';
import { computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.scss',
})
export class Signal {
  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  constructor() {
    effect(() => {
      console.log('count changed', this.count());
    });
  }

  increment() {
    this.count.update((value) => value + 1);
  }
}
