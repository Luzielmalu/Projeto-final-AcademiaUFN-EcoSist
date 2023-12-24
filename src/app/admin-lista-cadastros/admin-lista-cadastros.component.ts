import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-admin-lista-cadastros',
  templateUrl: './admin-lista-cadastros.component.html',
  styleUrl: './admin-lista-cadastros.component.css'
})
export class AdminListaCadastrosComponent implements OnInit{
  dataSource: any[] = [];
  displayedColumns: string[] = [
    'id',
    'nomeCompleto',
    'dataNascimento',
    'cpfCnpj',
    'telefone',
    'email',
    'cep',
    'enderecoCompleto',
    'bairroCidEst',
    'tipoEndereco',
    'pontoReferencia',
    'observacao',
    'actions',
  ];

  constructor(private cadastroService: CadastroService, private router: Router) {}

  ngOnInit(): void {
    this.getCadastros();
  }

  getCadastros(): void {
    this.cadastroService.getCadastros().subscribe(
      (dados) => {
        this.dataSource = dados;
      },
      (erro) => {
        console.error('Erro ao buscar cadastros', erro);
      }
    );
  }
  atualizarCadastro(cadastro: any): void {
    // Lógica para atualizar o cadastro
  }
  deleteCadastro(cadastro: any): void {
    if (confirm('Tem certeza que deseja excluir este cadastro?')) {
      this.cadastroService.deleteCadastro(cadastro.id).subscribe(
        () => {
          // Atualiza a lista após a exclusão
          this.getCadastros();
        },
        (erro) => {
          console.error('Erro ao excluir cadastro', erro);
        }
      );
    }
  }
  sair(): void {
    console.log('Botão Sair clicado');
    this.router.navigate(['/admin-dashboard']);
  }

}





