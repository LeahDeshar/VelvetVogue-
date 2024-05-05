import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {}

  fetch(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        const errorMessage = `Error fetching todos: ${error.message}`;
        return throwError(() => errorMessage);
      })
    );
  }
}
