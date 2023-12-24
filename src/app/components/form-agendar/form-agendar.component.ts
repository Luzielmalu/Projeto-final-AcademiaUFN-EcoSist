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

  };

  onSubmit(): void {
    this.agendar.emit(this.novoAgendamento);
    this.agendarService.agendamentoUsuario(this.novoAgendamento).subscribe(
      (usuarioAgendado) => {
        // Exibe um alerta de sucesso
        alert('Agendamento  realizado com sucesso! Antes  da coleta, você receberá o contato do nosso funcionário responsável para confirmação,através do seu telefone cadastrado. Todas as informações do seu agendamento estão na sua conta de usuário. Em caso de cancelamento, por gentileza, realizar com um dia de antecedência!');

        // Redireciona para a página do perfil do usuário
        //this.router.navigate(['/perfilUsuario']);
        this.location.back();
      },
      (error) => {
        // Lógica de tratamento de erro, se necessário
        console.error('Erro durante o cadastro', error);
      }
    );
    this.novoAgendamento = {
    id: '',
    dia: '',
    horario:'',
    cpfCnpj: '',
    enderecoColeta:'',
    quantOleo: 0,
    } // Limpa os campos do novo cadastro

  }

}

