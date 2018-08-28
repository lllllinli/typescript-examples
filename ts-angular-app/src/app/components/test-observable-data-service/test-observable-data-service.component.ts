import { Component } from '@angular/core';
import { ChangeCounterInterface } from '../../interface/change.counter.interface';

@Component({
  selector: 'mif-test-observable-data-service',
  templateUrl: './test-observable-data-service.component.html',
  styleUrls: ['./test-observable-data-service.component.scss']
})
export class TestObservableDataServiceComponent {
  title = 'Test Obserable Data Service';
  initialCounter = 3;
  constructor(private counterService: ChangeCounterInterface ) { }

  onAdd1Click() {
    this.counterService.add1();
  }

  onMinus1Click() {
    this.counterService.minus1();
  }

}
