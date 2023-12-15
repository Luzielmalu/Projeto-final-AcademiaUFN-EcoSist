import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls:['./form-login.component.css']
})
export class FormLoginComponent implements OnInit{
  @Input() btnText: any

  public formLogin:FormGroup;

  constructor(private fb:FormBuilder) {
    this.formLogin = this.criarFormLogin();
  }

  ngOnInit(): void {
  }
  public criarFormLogin():FormGroup{
    return this.fb.group({
      login:["", [Validators.required, Validators.minLength(6), Validators.maxLength(25)]],
      password:["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    })
  }
  public isFormControlInvalid(controlName:string):boolean{
    return !!(this.formLogin.get(controlName)?.invalid && this.formLogin.get(controlName)?.touched)
  }


  public submitForm(){
    const {login, password} = this.formLogin.value;
    this.formLogin.reset;


  }
}

