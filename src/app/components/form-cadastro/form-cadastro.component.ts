import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent  {
  @Input()
  btnText: any;

  onCadastro() {
    // Lógica para enviar dados para o banco de dados
    console.log('Cadastro realizado com sucesso!');
  }
}
