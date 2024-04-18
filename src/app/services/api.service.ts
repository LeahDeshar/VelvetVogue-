import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../type';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // step_1
  // inject the HttpClient service into the constructor
  constructor(private httpClient: HttpClient) {}

  // step_2
  // define a method that makes an HTTP GET request
  // to the API endpoint
  public get<T>(url: string, options: Options): Observable<T> {
    return this.httpClient.get<T>(url, options) as Observable<T>;
  }
}
