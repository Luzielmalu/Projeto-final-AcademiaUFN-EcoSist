import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:[ './login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() btnText: any='Enviar'

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder, private loginService:LoginService, private route:Router, private toast:ToastrService) {
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
  }
  public criarFormLogin():FormGroup{
    return this.fb.group({
      login:["", [Validators.required, Validators.minLength(6)]],
      password:["", [Validators.required, Validators.minLength(6)]]
    })
  }
  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }


  public submitForm(){
    const {login, password} = this.formLogin.value;
    this.formLogin.reset;

    this.loginService.login(login, password).subscribe(
      res => {
        this.toast.success("Login efetuado com sucesso");
        this.route.navigate(['']);
      },
      err =>{
        this.toast.error(err);
      }
    )
  }
}
