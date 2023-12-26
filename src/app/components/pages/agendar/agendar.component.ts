import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Agendar } from '../../../models/agendar';
import { AgendarService } from '../../../services/agendar.service';
@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrl: './agendar.component.css'
})
export class AgendarComponent {
  @Input() btnText: any='Enviar'

  title = 'Agendar'
  agendar = {} as Agendar;
  agendamentos: Agendar[] = [];

  constructor(private agendarService: AgendarService){}

  ngOnInit(){
    this.getAgendamentos();
    }

    getAgendamentos(){
      this.agendarService.getAgendamentos().subscribe(
        (agendar: Agendar[]) => {
        this.agendamentos = agendar;
      });
    }
    createAgendamento(novoAgendamento: Agendar): void {
      this.agendarService.createAgendamento(novoAgendamento).subscribe(() => {
        this.getAgendamentos(); // Atualiza a lista após a criação

      });
    }

    addAgendamento(){
      this.agendar.dia = "19/12/2023";
      this.agendar.horario = "9h00";
      this.agendar.cpfCnpj = "05543104418";
      this.agendar.enderecoColeta = "rua";
      this.agendar.quantOleo = 10;
      this.agendar.statusColeta = "a realizar";
      this.agendarService.saveAgendamento(this.agendar).subscribe(() => {
    });
    }
    saverAgendamento(form: NgForm){
      if (form.valid) {
      if(this.agendar.id !== undefined){
        this.agendarService.updateAgendamento(this.agendar).subscribe(() => {
          this.cleanForm(form);
        });
        }else{
          this.agendarService.saveAgendamento(this.agendar).subscribe(() =>{
            this.cleanForm(form);
          });
      }
    }
  }
    deleteAgendamento(agendamento: Agendar){
    this.agendarService.deleteAgendamento(agendamento).subscribe(() => {
      this.getAgendamentos();
    });
    }
    editAgendamento(agendamento: Agendar){
      this.agendar = { ...agendamento };
    }

    cleanForm(form: NgForm){
    this.getAgendamentos();
    form.resetForm();
    this.agendar = {} as Agendar;
    }

}






