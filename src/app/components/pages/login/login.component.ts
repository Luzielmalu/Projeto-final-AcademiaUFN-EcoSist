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
    this.http.post('http://localhost:8089/auth/login', this.loginObj).subscribe((res:any)=>{
      if(res.token) {
        alert('login feito com sucesso!');
        localStorage.setItem('loginToken', res.token);/*salva o token no localstorage*/

        this.authService.login(this.loginObj.login, this.loginObj.password).subscribe(
          (res: any) => {
            console.log(res);

            if (res.token) {
              //res.token é a resposta no caso o token recebido
              localStorage.setItem('loginToken', res.token); //aqui eu salvo o token no localStorage

              const decodedToken = this.authService.decodeToken(res.token);

              if (decodedToken && decodedToken.roles && decodedToken.roles.includes) {
              if (decodedToken.roles.includes('ROLE_ADMIN')) {
                this.router.navigateByUrl('/admin-dashboard');
              } else if (decodedToken.roles.includes('ROLE_USER')) {
                this.router.navigateByUrl('/dashboard');
              } else {
                alert('Usuário não reconhecido');
              }
            //} else {
              //console.log('This is the log message: ' + res.message);
              //alert('Login failed: ' + res.message);
              //}
            }
          }
        },


          (error) => {
            console.error('Um erro ocorreu durante o login:', error);
            alert('Um erro ocorreu durante o login. Por favor, tente novamente.');
          }
        );
        this.router.navigateByUrl('dashboard');
      } else {
        alert(res.message);
      }
    })


  }


}

