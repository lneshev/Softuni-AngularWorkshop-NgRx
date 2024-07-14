import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IAppState } from '../store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnDestroy {
  counter: number;
  subscription: Subscription

  constructor(private store: Store<IAppState>) {
    this.subscription = store.select((state) => state.app.counter).subscribe(counterValue => {
      this.counter = counterValue;
    });
  }

  increment() {
    this.store.dispatch({ type: 'INC' })
  }

  decrement() {
    this.store.dispatch({ type: 'DEC' })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}