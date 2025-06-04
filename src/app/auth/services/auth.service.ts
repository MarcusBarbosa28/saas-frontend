import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private API_URL = 'http://localhost:5000/api/usuarios/autenticar';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post<any>(this.API_URL, { email, senha }).pipe(
      tap(res => localStorage.setItem('token', res.data.token))
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
