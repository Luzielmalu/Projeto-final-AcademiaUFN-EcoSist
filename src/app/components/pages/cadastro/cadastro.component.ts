import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cadastro } from '../../../models/cadastro';
import { CadastroService } from '../../../services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  @Input() btnText: any='Enviar'


  title = 'Cadastro'
  cadastro = {} as Cadastro;
  cadastros: Cadastro[] = [];

  constructor(private cadastroService: CadastroService){}

  ngOnInit(){
    this.getCadastros();
    }

    getCadastros(){
      this.cadastroService.getCadastros().subscribe(
        (cadastro: Cadastro[]) => {
        this.cadastros = cadastro;
      });
    }
    createCadastro(novoCadastro: Cadastro): void {
      this.cadastroService.createCadastro(novoCadastro).subscribe(() => {
        this.getCadastros(); // Atualiza a lista após a criação
      });
    }
    addCadastro(){
      this.cadastro.nomeCompleto = "Luzielma";
      this.cadastro.dataNascimento = "16/02/86";
      this.cadastro.cpfCnpj = "07596801404";
      this.cadastro.telefone = "(81)999005248";
      this.cadastro.email = "luzielma.silva@yahoo.com.br";
      this.cadastro.cep = "534311125";
      this.cadastro.enderecoCompleto = "Rua Alemanha Ocidental,782";
      this.cadastro.bairroCidEst = "Pau Amarelo, Paulista/PE";
      this.cadastro.tipoEndereco = "Residencial";
      this.cadastro.pontoReferencia = "não tem";
      this.cadastro.observacao = "sem";
      this.cadastroService.saveCadastro(this.cadastro).subscribe(() => {

    });
    }
    saveCadastro(form: NgForm){
      if (form.valid) {
      if(this.cadastro.id !== undefined){
        this.cadastroService.updateCadastro(this.cadastro).subscribe(() => {
          this.cleanForm(form);
        });
        }else{
          this.cadastroService.saveCadastro(this.cadastro).subscribe(() =>{
            this.cleanForm(form);
          });
      }
    }
  }
    saveCadastroNomeCompleto(n: string){
      this.cadastro.nomeCompleto = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroDataNascimento(n: string){
      this.cadastro.dataNascimento = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroCpfCnpj(n: string){
      this.cadastro.cpfCnpj = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroTelefonej(n: string){
      this.cadastro.telefone = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroEmail(n: string){
      this.cadastro.email = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroCep(n: string){
      this.cadastro.cep = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroEnderecoCompleto(n: string){
      this.cadastro.enderecoCompleto = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroBairroCidEst(n: string){
      this.cadastro.bairroCidEst = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroTipoEndereco(n: string){
      this.cadastro.tipoEndereco = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroPontoReferencia(n: string){
      this.cadastro.pontoReferencia = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    saveCadastroObservacao(n: string){
      this.cadastro.observacao = n;
      this.cadastroService.saveCadastro(this.cadastro);
    }
    deleteCadastro(cadastro: Cadastro){
    this.cadastroService.deleteCadastro(cadastro).subscribe(() => {
      this.getCadastros();
    });
    }
    editCadastro(cadastro: Cadastro){
      this.cadastro = { ...cadastro };
    }

    cleanForm(form: NgForm){
    this.getCadastros();
    form.resetForm();
    this.cadastro = {} as Cadastro;
    }
}


