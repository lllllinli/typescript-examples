import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InitialCounterInterface } from '../interface/initial-counter.interface';
import { ChangeCounterInterface } from '../interface/change.counter.interface';

@Injectable()
export class CounterService implements InitialCounterInterface, ChangeCounterInterface {

  private counterStore$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  counter$: Observable<number> = this.counterStore$;

  setInitialCounter(initialCounter: number) {
    this.counterStore$.next(initialCounter);
  }

  add1() {
    this.counterStore$.next(this.counterStore$.getValue() + 1);
  }

  minus1() {
    this.counterStore$.next(this.counterStore$.getValue() - 1);
  }
}
