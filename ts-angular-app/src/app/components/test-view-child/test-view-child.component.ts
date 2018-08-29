import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CounterDisplayComponent} from '../counter-display/counter-display.component';


@Component({
  selector: 'mif-test-view-child',
  templateUrl: './test-view-child.component.html',
  styleUrls: ['./test-view-child.component.scss']
})
export class TestViewChildComponent implements AfterViewInit {
  title = 'Test View Child';
  initialCounter = 3;
  @ViewChild(CounterDisplayComponent) counterDisplayComponent: CounterDisplayComponent;
  ngAfterViewInit() {}

  onAdd1Click() {
    this.counterDisplayComponent.add1();
  }

  onMinus1Click() {
    this.counterDisplayComponent.minus1();
  }

}
