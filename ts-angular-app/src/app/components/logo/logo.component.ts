import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mif-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  imageUrl: string;
  @Input() name: string;
  constructor() {
    this.imageUrl = 'assets/images/icons8-idea.svg';
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

}
