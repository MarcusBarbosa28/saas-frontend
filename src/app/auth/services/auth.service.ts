import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../../environments/environment';

interface AuthResponse {
  token: string;
  usuarioId: number;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly API_URL = `${environment.apiUrl}/api/Usuarios/autenticar`;

  constructor(private http: HttpClient) {}

  login(email: string, senha: string) {
    return this.http.post<AuthResponse>(this.API_URL, { email, senha }).pipe(
      tap(res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('usuario', JSON.stringify({
          id: res.usuarioId,
          nome: res.nome,
          email: res.email
        }));
      }),
      catchError(err => {
        console.error('Erro de autenticação:', err);
        return of(null); // Retorna null para o componente tratar falhas
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsuario(): any {
    const data = localStorage.getItem('usuario');
    return data ? JSON.parse(data) : null;
  }
}
