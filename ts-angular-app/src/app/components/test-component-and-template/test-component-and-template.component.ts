import { Component, OnInit } from '@angular/core';

class Hero {
  constructor(
    public id: number,
    public name:string
  ) {}
}


@Component({
  selector: 'mif-test-component-and-template',
  templateUrl: './test-component-and-template.component.html',
  styleUrls: ['./test-component-and-template.component.scss']
})
export class TestComponentAndTemplateComponent implements OnInit {
  title = 'test component and template';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];
  constructor() { }

  ngOnInit() {
  }

}
