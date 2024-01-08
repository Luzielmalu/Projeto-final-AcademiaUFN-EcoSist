import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrl: './atualizar-cadastro.component.css',
  providers: [AuthService]
})
export class AtualizarCadastroComponent implements OnInit {
  cadastro: any = {};
  campo: any;
  id: number =0;
  novoValor: string = '';


  constructor(
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.campo = params['campo'];
      if (!isNaN(this.id) && this.campo) {
        this.getCadastroField();
      }
    });
  }
  getCadastroField(): void {
    this.cadastroService.getCadastroField(this.id, this.campo).subscribe(novoValor => {
      // Popula o campo específico no objeto cadastro
      this.cadastro[this.campo] = novoValor;
    });
  }

  salvarAtualizacao(): void {
    const campo: string = this.campo;
    const id: number = this.id;
    const novoValor: string = this.novoValor || '';

    this.cadastroService.updateCampoCadastro(id, campo , this.novoValor).subscribe(() => {
      console.log(`Salvar atualização para o campo ${this.campo} do cadastro ID ${id}`);
      this.router.navigate(['/admin-lista-cadastros']);
    });
  }
}

