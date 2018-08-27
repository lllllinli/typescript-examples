import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mif-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() initialCounter: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  private counter: number;
  constructor() { }

  ngOnInit(): void {
    this.counter = this.initialCounter;
  }

  onAdd1Click() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  onMinus1Click() {
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
