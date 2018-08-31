import { Component, OnInit } from '@angular/core';
import { TestHttpClientService } from './test-http-client.service';
import { Observable } from 'rxjs/index';
import { tap } from 'rxjs/operators';

import { Todo } from './todo.interface';

@Component({
  selector: 'mif-test-http-client',
  templateUrl: './test-http-client.component.html',
  styleUrls: ['./test-http-client.component.scss'],
  providers: [
    TestHttpClientService
  ]
})
export class TestHttpClientComponent implements OnInit {
  title = 'Test http client';
  todoTitle = [
    { title: 'user id' },
    { title: 'id'},
    { title: 'title'},
    { title: 'completed'}
  ];
  todos: Observable<Todo[]>;
  constructor(private httpService: TestHttpClientService) {
  }
  ngOnInit() {
    this.todos = this.httpService.getTodos();
    this.todos.pipe(tap(console.log));
  }

}
