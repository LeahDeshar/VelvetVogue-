import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  constructor() {}

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
  login(data: any) {
    localStorage.setItem('token', data.token);
  }

  // register
  register(data: any) {
    localStorage.setItem('token', data.token);
  }
}
