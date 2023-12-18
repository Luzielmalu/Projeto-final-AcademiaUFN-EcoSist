import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cadastro } from '../../models/cadastro';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent  {
  @Input()
  btnText: any;
  constructor(){}

 @Output() cadastrar = new EventEmitter<Cadastro>();
  novoCadastro: Cadastro = {
    id: '',
    nomeCompleto: '',
    dataNascimento: '',
    cpfCnpj: '',
    telefone: '',
    email: '',
    cep: '',
    enderecoCompleto: '',
    bairroCidEst: '',
    tipoEndereco: '',
    pontoReferencia: '',
    observacao: '',

  };

  onSubmit(): void {
    this.cadastrar.emit(this.novoCadastro);
    this.novoCadastro = {
      id: '',
    nomeCompleto: '',
    dataNascimento: '',
    cpfCnpj: '',
    telefone: '',
    email: '',
    cep: '',
    enderecoCompleto: '',
    bairroCidEst: '',
    tipoEndereco: '',
    pontoReferencia: '',
    observacao: '',
    }; // Limpa os campos do novo cadastro
    console.log('Cadastro realizado com sucesso!');
  }

 /*ngOnInit(): void{
  this.cadastro = new FormGroup({
    id: new FormControl(''),
    dataNascimento: new FormControl(''),
    cpfCnpj: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    cep: new FormControl(''),
    enderecoCompleto: new FormControl(''),
    bairroCidEst: new FormControl(''),
    tipoEndereco: new FormControl(''),
    pontoReferencia: new FormControl(''),
    observacao: new FormControl(''),


  });
 }*/



}

