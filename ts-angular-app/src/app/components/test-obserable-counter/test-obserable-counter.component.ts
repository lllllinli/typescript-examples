import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { InitialCounterInterface } from '../../interface/initial-counter.interface';

@Component({
  selector: 'mif-test-obserable-counter',
  templateUrl: './test-obserable-counter.component.html',
  styleUrls: ['./test-obserable-counter.component.scss']
})
export class TestObserableCounterComponent implements OnInit {
  @Input() initialCounter;
  counter$: Observable<number> = this.counterService.counter$;

  constructor(private counterService: InitialCounterInterface) {}

  ngOnInit() {
    this.counterService.setInitialCounter(this.initialCounter);
  }

}
