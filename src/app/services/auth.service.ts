import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private userType: string = '';
  hasRoles: any;
  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }
  getUserType(): string {
    return this.userType;
  }
  setAuthenticationStatus(status: boolean): void{
    this.isAuthenticated = status;
  }
  // Método para obter o status de autenticação
  constructor(private http: HttpClient,
    private router: Router,
    private userService: UserService) { }

    login(login: string, password: string): Observable<any> {
      // Simula uma chamada HTTP para verificar o login e senha
      const fakeUrl = 'http://localhost:8089/auth/login';
      const loginData = { login, password };

      return this.http.post(fakeUrl, loginData).pipe(
        tap((response: any) => {
          // Se a autenticação for bem-sucedida, o servidor pode retornar informações adicionais, como o tipo de usuário
          this.userType = response.userType || 'USER';
          this.isAuthenticated = true;
          if (this.userType === 'ADMIN') {
            this.router.navigate(['/admin-dashboard']);
          } else {
            this.router.navigate(['/dashboard']);
            console.log('Redirecionado para /admin-dashboard');

          }

          // Retorne o valor que desejar (ou undefined/null se não houver valor específico a ser retornado)
          return null;
        }),
        catchError((error) => {
          // Lógica de tratamento de erro (por exemplo, redirecionar para uma página de erro)
          console.error('Erro durante o login', error);
          this.router.navigate(['/error']);
          return of(null); // Retornando um Observable vazio ou um valor padrão em caso de erro
        })
      );
    }

    logout(): void {
      // Lógica de logout
      this.isAuthenticated = false;
      this.userType = '';
    }

}
