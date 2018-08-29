import { Injectable } from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Injectable()
export class SimpleService {
  private name = 'linli';
  private user: User = {
    name: 'linli',
    age: 40
  };
  getName() {
    return this.name;
  }
  setName(otherName: string) {
    this.name = otherName;
  }
  getUser() {
    return this.user;
  }
}
