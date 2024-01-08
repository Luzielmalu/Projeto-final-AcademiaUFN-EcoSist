import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendarService } from '../services/agendar.service';

@Component({
  selector: 'app-atualizar-agendamento',
  templateUrl: './atualizar-agendamento.component.html',
  styleUrl: './atualizar-agendamento.component.css'
})
export class AtualizarAgendamentoComponent implements OnInit {

  agendamento: any = {};
  campo: any;
  id: number =0;
  novoValor: string = '';

  constructor(
    private route: ActivatedRoute,
    private agendarService: AgendarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.campo = params['campo'];
      if (!isNaN(this.id) && this.campo) {
        this.getAgendamentoField();
      }
    });
  }
  getAgendamentoField(): void {
    this.agendarService.getAgendamentoField(this.id, this.campo).subscribe(novoValor => {
      // Popula o campo específico no objeto agendamento
      this.agendamento[this.campo] = novoValor;
    });
  }

  salvarAtualizacao(): void {
    const campo: string = this.campo;
    const id: number = this.id;
    const novoValor: string = this.novoValor || '';

    this.agendarService.updateCampoAgendamento(id, campo , this.novoValor).subscribe(() => {
      console.log(`Salvar atualização para o campo ${this.campo} do agendamento ID ${this.id}`);
      this.router.navigate(['/admin-lista-agendamento']);
    });
  }
}
