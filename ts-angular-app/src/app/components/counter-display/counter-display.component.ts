import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mif-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent implements OnInit {
  @Input() initialCounter;
  counter: number;
  constructor() { }

  ngOnInit() {
    this.counter = this.initialCounter;
  }

  add1() {
    this.counter++;
  }

  minus1() {
    this.counter--;
  }

}
