import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  // Angular Signals counter
  count = signal(0);

  incrementSignal() {
    this.count.update(n => n + 1);
  }

  decrementSignal() {
    this.count.update(n => n - 1);
  }

  // RxJS counter
  rxCount$ = new BehaviorSubject<number>(0);

  incrementRx() {
    this.rxCount$.next(this.rxCount$.value + 1);
  }

  decrementRx() {
    this.rxCount$.next(this.rxCount$.value - 1);
  }
}
