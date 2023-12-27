import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrl: './atualizar-cadastro.component.css'
})
export class AtualizarCadastroComponent {
  cadastro: any = {};
  cadastros: any;

  constructor(
    private route: ActivatedRoute,
    private cadastroService: CadastroService, private router: Router
  ) { this.route.queryParams.subscribe(params => {
    const id = +params['id'];
    if (!isNaN(id)) {
      this.cadastroService.getCadastroById(id).subscribe(cadastro => {
        this.cadastro = cadastro;
      });
  }
});
}

  salvarAtualizacao(): void {
    this.cadastroService.updateCadastro(this.cadastro).subscribe(() => {
      // Lógica após a atualização bem-sucedida
      console.log('Salvar atualização para o cadastro:', this.cadastro);

      this.router.navigate(['/admin-lista-cadastro']);
    });
  }

}
