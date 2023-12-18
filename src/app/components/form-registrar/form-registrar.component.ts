import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Registrar } from '../../models/registrar';

@Component({
  selector: 'app-form-registrar',
  templateUrl: './form-registrar.component.html',
  styleUrl: './form-registrar.component.css'
})
export class FormRegistrarComponent {
@Input() btnText: any;

constructor(){}

 @Output() registrar = new EventEmitter<Registrar>();
  novoRegistro: Registrar = {
    id: '',
    login: '',
    password:'',
    role: '',

  };

  onSubmit(): void {
    this.registrar.emit(this.novoRegistro);
    this.novoRegistro = {
      id: '',
      login: '',
      password:'',
      role: '',
    }; // Limpa os campos do novo cadastro
    console.log('Cadastro realizado com sucesso!');
  }


}
