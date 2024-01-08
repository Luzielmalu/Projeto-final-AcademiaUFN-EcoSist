import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgendarService } from '../services/agendar.service';

@Component({
  selector: 'app-admin-lista-agendamentos',
  templateUrl: './admin-lista-agendamentos.component.html',
  styleUrl: './admin-lista-agendamentos.component.css'
})
export class AdminListaAgendamentosComponent implements OnInit{

  dataSource: any[] = [];
  displayedColumns: string[] = ['id','data','horario','cpfCnpj','enderecoColeta','quantOleo', 'statusColeta', 'acoes'];
  constructor(private agendarService: AgendarService, private router: Router) {}
  ngOnInit(): void {
    this.getAgendamentos();
  }

  getAgendamentos(): void {
    this.agendarService.getAgendamentos().subscribe(
      (dados) => {
        this.dataSource = dados;
      },
      (erro) => {
        console.error('Erro ao buscar cadastros', erro);
      }
    );
  }

  deleteAgendamento(agendamento: any): void {
    if (confirm('Tem certeza que deseja excluir este agendamento?')) {
      if (agendamento && agendamento.id){
      this.agendarService.deleteAgendamento(agendamento.id).subscribe(
        () => {
          // Atualiza a lista após a exclusão
          this.getAgendamentos();
          this.router.navigate(['/admin-lista-agendamento']);

        },
        (erro) => {
          console.error('Erro ao excluir cadastro', erro);
        }
      );
    }
  }
}
  sair(): void {
    console.log('Botão Sair clicado');
    this.router.navigate(['/admin-dashboard']);
  }
  irParaAtualizacao(id: number): void {
    this.router.navigate(['/atualizar-agendamento', id]);
  }
  atualizarAgendamento(id: number): void {
    this.router.navigate(['/atualizar-agendamento', id], {
      queryParams: {
        id: id,
        dia: '',
        horario: '',
        cpfCnpj: '',
        enderecoColeta: '',
        quantOleo:'',
        statusColeta:'',
      }
    });
  }
}
