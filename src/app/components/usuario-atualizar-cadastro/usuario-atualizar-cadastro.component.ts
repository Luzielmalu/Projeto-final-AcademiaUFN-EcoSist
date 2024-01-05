import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../../services/cadastro.service';

@Component({
  selector: 'app-usuario-atualizar-cadastro',
  templateUrl: './usuario-atualizar-cadastro.component.html',
  styleUrl: './usuario-atualizar-cadastro.component.css'
})
export class UsuarioAtualizarCadastroComponent {
  cadastro: any = {};
  campo: any;
  id: number =0;
  novoValor: string = '';


  constructor(
    private route: ActivatedRoute,
    private cadastroService: CadastroService,
    private router: Router,
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
      this.router.navigate(['/lista-cadastro']);
    });
  }
}
