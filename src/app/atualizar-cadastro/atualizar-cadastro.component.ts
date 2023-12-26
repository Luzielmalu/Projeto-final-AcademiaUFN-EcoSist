import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from '../services/cadastro.service';

@Component({
  selector: 'app-atualizar-cadastro',
  templateUrl: './atualizar-cadastro.component.html',
  styleUrl: './atualizar-cadastro.component.css'
})
export class AtualizarCadastroComponent implements OnInit {
  id!: number;
  updateForm!: FormGroup;

  constructor(private route: ActivatedRoute,private router: Router,private cadastroService: CadastroService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const routeSnapshot = this.route.snapshot;
      // Acessa o paramMap apenas se ActivatedRoute.snapshot não for null
      if (routeSnapshot && routeSnapshot.paramMap) {
        const idParam = routeSnapshot.paramMap.get('id');
        if (idParam !== null) {
          this.id = +idParam;   }
  this.initializeForm();
}
}
  initializeForm(): void {
    // Criar um FormControl para cada campo que você deseja atualizar
    // Neste exemplo, estou usando apenas um campo "novoValor"
    this.updateForm = new FormGroup({
      novoValor: new FormControl('', Validators.required)

    });
  }

  atualizarCampo(): void {
    const campoSelecionado = ''; // Substitua pelo campo real escolhido

    if (this.updateForm && this.updateForm.get('novoValor')) {
      const novoValor = this.updateForm.get('novoValor')!.value;
      if (novoValor !== null && novoValor !== undefined) {
        this.cadastroService.updateCampoCadastro(this.id, campoSelecionado, novoValor).subscribe(
          () => {
            console.log('Cadastro atualizado com sucesso!');
            this.router.navigate(['/admin-dashboard', this.id]);
          },
          (error) => {
            console.error('Erro ao atualizar cadastro:', error);
            // Lógica de tratamento de erro
          }
        );
      }
    }
}
}
