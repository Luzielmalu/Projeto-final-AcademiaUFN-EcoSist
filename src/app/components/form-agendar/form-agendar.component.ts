import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Agendar } from '../../models/agendar';

@Component({
  selector: 'app-form-agendar',
  templateUrl: './form-agendar.component.html',
  styleUrl: './form-agendar.component.css',


})
export class FormAgendarComponent {
  @Input() btnText: any;

  constructor(){

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

