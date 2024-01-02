import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Registrar } from '../../models/registrar';
import { RegistrarService } from '../../services/registrar.service';

@Component({
  selector: 'app-form-registrar',
  templateUrl: './form-registrar.component.html',
  styleUrl: './form-registrar.component.css'
})

export class FormRegistrarComponent {
@Input() btnText: any;
  isSubmitting: boolean | undefined;

constructor(private registrarService: RegistrarService, private router: Router){}

 @Output() registrar = new EventEmitter<Registrar>();
  novoRegistro: Registrar = {
    id: 0,
    nome: '',
    login: '',
    password:'',
    role: '',

  };

  onSubmit(): void {
    this.isSubmitting = true;
    this.registrarService.registrarUsuario(this.novoRegistro).subscribe(
      (usuarioRegistrado) =>{
        alert('Registro realizado com sucesso!');
        this.router.navigate(['/login']);
      },
      (error) => {
        // Lógica de tratamento de erro, se necessário
        console.error('Erro durante o registro', error);
      }
      ).add(() => {
        // Reativa o botão após a conclusão da requisição (com sucesso ou erro)
        this.isSubmitting = false;
      });
    this.novoRegistro = {
      id: 0,
      nome:'',
      login: '',
      password:'',
      role: '',
    }; // Limpa os campos do novo cadastro
  }
}




