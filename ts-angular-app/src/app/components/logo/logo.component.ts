import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mif-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  imageUrl: string;
  constructor() {
    this.imageUrl = 'assets/images/icons8-idea.svg';
  }

  ngOnInit() {
  }

}
