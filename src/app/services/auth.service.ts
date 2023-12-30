import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userType: string = '';
  getUserRoles: any;

  getUserType(): string {
    return this.userType;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  login(login: string, password: string): Observable<any> {
    const fakeUrl = 'http://localhost:8089/auth/login';
    const loginData = { login, password };

    return this.http.post(fakeUrl, loginData).pipe(
      tap((response: any) => {
        const token = response.token;
        const tokenPayload = this.decodeTokenPayload(token);
        this.userType = tokenPayload?.role || 'USER';

        if (this.userType === 'ADMIN') {
          console.log('Tipo de usuário' + this.userType);
          this.router.navigate(['admin-dashboard']);

        } else {
          console.log('Tipo de usuário' + this.userType);
          this.router.navigate(['dashboard']);

        }

        return null;
      }),
      catchError((error) => {
        console.error('Erro durante o login', error);
        this.router.navigate(['/error']);
        return of(null);
      })
    );
  }
  decodeToken(token: string): any {
    try {
      const decodedToken = jwtDecode(token);
      console.log(decodedToken); // Mova esta linha para dentro do bloco try
      return decodedToken;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  logout(): void {
    localStorage.removeItem('loginToken');
    this.router.navigate(['/login']);
  }

  private getToken(): string | null {
    return localStorage.getItem('loginToken');
  }

  private decodeTokenPayload(token: string): any {
    try {
      const payloadBase64 = token.split('.')[1];
      const payload = atob(payloadBase64);
      return JSON.parse(payload);
    } catch (error) {
      console.error('Erro ao decodificar o token', error);
      return null;
    }
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
}
