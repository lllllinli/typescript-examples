import { Component, OnInit } from '@angular/core';

interface User {
  name:string;
  age:number;
}

@Component({
  selector: 'mif-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  user:User;
  constructor() {
    this.user = {
      name: 'linli',
      age: 40
    }
    console.log('user:', this.user);
  }

  ngOnInit() {
  }

}
