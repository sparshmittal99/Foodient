import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class JwtUtilService {
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  clearToken() {
    localStorage.removeItem('token');
  }
}