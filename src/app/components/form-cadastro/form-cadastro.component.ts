import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cadastro } from '../../models/cadastro';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-form-cadastro',
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent  {
  @Input()
  btnText: any;
  router: any;
  constructor(private cadastroService: CadastroService) {}

  checkEmailAvailability(email: string): void {
    this.cadastroService.checkEmailExists(email).subscribe((exists) => {
      if (exists) {
        alert('E-mail já cadastrado. Por favor, escolha outro.');
      }
    });
  }
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
    this.cadastroService.cadastroUsuario(this.novoCadastro).subscribe(
      (usuarioCadastrado) => {
        // Exibe um alerta de sucesso
        alert('Seus dados foram cadastrados com sucesso! Agora, efetue seu login para realizaro agendamento da sua coleta!');

        // Redireciona para a página do perfil do usuário
        this.router.navigate(['/perfilUsuario']);
      },
      (error) => {
        // Lógica de tratamento de erro, se necessário
        console.error('Erro durante o cadastro', error);
      }
    );
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

  }



}

