import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register, Login } from '../util/features';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private baseUrl = 'http://localhost:8080/api/v1/user';
  constructor(private http: HttpClient) {}

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  // Log the user out
  logout() {
    localStorage.removeItem('token');
  }
  // Save the token in the local storage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // login
  // login(data: Login): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/login`, data).pipe(
  //     catchError((error) => {
  //       throw error;
  //     })
  //   );
  //   // localStorage.setItem('token', data.token);
  // }

  // register
  register(data: Register): Observable<any> {
    console.log(data);
    return this.http.post(`${this.baseUrl}/register`, data).pipe(
      catchError((error) => {
        throw error;
      })
    );
    // localStorage.setItem('token', data.token);
  }
}
