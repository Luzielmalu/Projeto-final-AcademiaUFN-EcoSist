import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "login": "",
    "password": ""
  }
  constructor(private http: HttpClient, private router: Router, private authService: AuthService){}

  onLogin() {
    this.http.post('http://localhost:8089/auth/login', this.loginObj).subscribe(
      (res: any) => {
        if (res.token) {
          alert('Login bem-sucedido!');
          localStorage.setItem('loginToken', res.token);

          const decodedToken = this.authService.decodeToken(res.token);
          const userRole = decodedToken?.role?.toUpperCase();

          if (userRole === 'ADMIN') {
            console.log('Usuário é um ADMIN. Redirecionando para /admin-dashboard');
            this.router.navigateByUrl('/admin-dashboard');
          } else if (userRole === 'USER') {
            console.log('Usuário é um USER. Redirecionando para /dashboard');
            this.router.navigateByUrl('/dashboard');
          } else {
            alert('Usuário não reconhecido');
            console.log('Papel do usuário não reconhecido:', userRole);
          }
        } else {
          alert('Token não recebido no login.');
          console.log('Token não recebido no login.');
        }
      },
      (error) => {
        console.error('Um erro ocorreu durante o login:', error);

        if (error.status === 401) {
          alert('Usuário não encontrado ou senha incorreta.');
        } else {
          alert('Um erro ocorreu durante o login. Por favor, tente novamente.');
        }
      }
    );
  }

}




