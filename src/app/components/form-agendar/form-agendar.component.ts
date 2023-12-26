import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Agendar } from '../../models/agendar';
import { AgendarService } from '../../services/agendar.service';

@Component({
  selector: 'app-form-agendar',
  templateUrl: './form-agendar.component.html',
  styleUrl: './form-agendar.component.css',


})
export class FormAgendarComponent {
  @Input() btnText: any;
  isSubmitting: boolean | undefined;

  constructor(private agendarService: AgendarService, private router: Router, private location: Location){

  }

 @Output() agendar = new EventEmitter<Agendar>();
  novoAgendamento: Agendar = {
    id: '',
    dia: '',
    horario:'',
    cpfCnpj: '',
    enderecoColeta:'',
    quantOleo: 0,
    statusColeta: '',

  };

  onSubmit(): void {
    this.isSubmitting = true;

    this.agendarService.agendamentoUsuario(this.novoAgendamento).subscribe(
      (usuarioAgendado) => {
        // Exibe um alerta de sucesso
        alert('Agendamento  realizado com sucesso! Antes  da coleta, você receberá o contato do nosso funcionário responsável para confirmação,através do seu telefone cadastrado. Todas as informações do seu agendamento estão na sua conta de usuário.');

        // Redireciona para a página do perfil do usuário
        //this.router.navigate(['/perfilUsuario']);
        this.location.back();
      },
      (error) => {
        // Lógica de tratamento de erro, se necessário
        console.error('Erro durante o cadastro', error);
      }
      ).add(() => {
        // Reativa o botão após a conclusão da requisição (com sucesso ou erro)
        this.isSubmitting = false;
     });


    this.novoAgendamento = {
    id: '',
    dia: '',
    horario:'',
    cpfCnpj: '',
    enderecoColeta:'',
    quantOleo: 0,
    statusColeta: '',
    } // Limpa os campos do novo cadastro

  }

}

