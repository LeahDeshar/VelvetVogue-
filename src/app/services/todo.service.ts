import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  fetch() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
