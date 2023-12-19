import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private http: HttpClient, private router: Router){}

  onLogin() {
    this.http.post('http://localhost:8089/auth/login', this.loginObj).subscribe((res:any)=>{
      if(res.token) {
        alert('login Success');
        localStorage.setItem('loginToken', res.token);/*salva o token no localstorage*/
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message);
      }
    })
  }
}

