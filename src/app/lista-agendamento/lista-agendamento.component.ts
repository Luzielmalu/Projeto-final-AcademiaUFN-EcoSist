import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AgendarService } from '../services/agendar.service';
@Component({
  selector: 'app-lista-agendamento',
  templateUrl: './lista-agendamento.component.html',
  styleUrl: './lista-agendamento.component.css'
})
export class ListaAgendamentoComponent {
  dataSource = new MatTableDataSource<any>();

  cpfParaBuscar = '';
  dadosUsuario: any;
  displayedColumns: string[] = ['id','nome','data','horario','cpfCnpj','enderecoColeta','quantOleo','statusColeta', 'acoes'];
  constructor(private agendarService: AgendarService, private router: Router) {}


  ngOnInit(): void {
  }

  buscarPorCpfOuCnpj(): void {
    this.buscarPorCpfCnpj();
  }
  buscarPorCpfCnpj() {
    if (this.cpfParaBuscar) {
      const cpfCnpj = this.cpfParaBuscar.replace(/\D/g, ''); // Remover caracteres não numéricos do CPF/CNPJ
      this.agendarService.getAgendamentoByCpfCnpj(this.cpfParaBuscar)
          .subscribe(
              (dados) => {
                console.log('Dados recebidos:', dados);
                  this.dadosUsuario = dados;
                  this.dataSource.data = dados; // Adiciona os dados ao dataSource
              },
              (erro) => {
                  console.error('Erro ao buscar por CPF', erro);
              }
          );
  }
  }

  sair(): void {
    console.log('Botão Sair clicado');
    this.router.navigate(['/dashboard']);
  }


}




