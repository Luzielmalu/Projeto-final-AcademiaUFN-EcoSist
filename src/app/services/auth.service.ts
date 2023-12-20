import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators'; // Adicione esta linha para importar catchError diretamente
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }
  setAuthenticationStatus(status: true) {
    this.isAuthenticated = status;
  }
  // Método para obter o status de autenticação
  constructor(private http: HttpClient,
    private router: Router,
    private userService: UserService) { }

    login(login: string, password: string): Observable<any> {
      // Simula uma chamada HTTP para verificar o login e senha
      const fakeApiUrl = 'http://localhost:8089/auth/login';
      const loginData = { login, password };

      return this.http.post(fakeApiUrl, loginData).pipe(
        map((response: any) => {
          // Se a autenticação for bem-sucedida, o servidor pode retornar informações adicionais, como o tipo de usuário
          const userType = response.userType || 'USER';

          if (userType === 'ADMIN') {
            this.router.navigate(['/adminDashboard']);
          } else {
            this.router.navigate(['/dashboard']);
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

    logout() {
      // Realize as operações de logout, se necessário
      // Por exemplo, limpar tokens de autenticação, redefinir o estado, etc.
      this.setAuthenticationStatus(true);
      // Navegue para a página de login ou outra página adequada
      this.router.navigate(['/']);
    }


}
