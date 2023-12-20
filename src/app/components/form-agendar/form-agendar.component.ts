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

  constructor(private agendarService: AgendarService, private router: Router){

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
        alert('Agendamento  realizado com sucesso! Enviaremos para seu e-mail todas as informações.Antes  da coleta, você receberá o contato do nosso funcionário responsável pela coleta,através do seu telefone cadastrado. Todas as informações do seu agendamento estão na sua conta de usuário. Em caso de cancelamento, por gentileza, realizar com um dia de antecedência!');

        // Redireciona para a página do perfil do usuário
        this.router.navigate(['/perfilUsuario']);
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
  redirecionarParaDashboard() {
    // Utilize o método navigateByUrl ou navigate para redirecionar para a home
    this.router.navigateByUrl('');
    // Ou
    // this.router.navigate(['']);
  }
}

