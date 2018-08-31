import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Todo } from './todo.interface';
import { tap, map } from 'rxjs/operators';

const params = new HttpParams()
  .set('_page', '1')
  .set('_limit', '10');

@Injectable()
export class TestHttpClientService {
  path = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private http: HttpClient) {}
  getTodos() {
    return this.http
      .get<Todo[]>(this.path, { params });
  }
}
