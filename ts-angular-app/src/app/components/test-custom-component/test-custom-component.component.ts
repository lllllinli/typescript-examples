import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mif-test-custom-component',
  templateUrl: './test-custom-component.component.html',
  styleUrls: ['./test-custom-component.component.scss']
})
export class TestCustomComponentComponent implements OnInit {
  title = 'Test Custom Component';
  initialCounter = 3;
  counter: number = this.initialCounter;

  constructor() { }

  ngOnInit() {}

  onCounterChange(counter: number) {
    this.counter = counter;
  }

}
