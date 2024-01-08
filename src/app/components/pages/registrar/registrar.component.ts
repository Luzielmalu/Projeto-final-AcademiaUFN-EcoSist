import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Registrar } from '../../../models/registrar';
import { RegistrarService } from '../../../services/registrar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
@Input() btnText ="Enviar"

title = 'Registrar'
  registrar = {} as Registrar;
  registros: Registrar[] = [];

  constructor(private registrarService: RegistrarService){}

  ngOnInit(){
    this.getRegistros();
    }

    getRegistros(){
      this.registrarService.getRegistros().subscribe(
        (registrar: Registrar[]) => {
        this.registros = registrar;
      });
    }
    createRegistrar(novoRegistro: Registrar): void {
      this.registrarService.createRegistrar(novoRegistro).subscribe(() => {
        this.getRegistros(); // Atualiza a lista após a criação
      });
    }
    addRegistrar(){
      this.registrar.nome = "Luzielma";
      this.registrar.login = "LuzielmaSilva";
      this.registrar.password = "123456";
      this.registrar.role = "USER";
      this.registrarService.saveRegistrar(this.registrar).subscribe(() => {

    });
    }
    saverRegistrar(form: NgForm){
      if (form.valid) {
      if(this.registrar.id !== undefined){
        this.registrarService.updateRegistrar(this.registrar).subscribe(() => {
          this.cleanForm(form);
        });
        }else{
          this.registrarService.saveRegistrar(this.registrar).subscribe(() =>{
            this.cleanForm(form);
          });
      }
    }
  }
    deleteRegistrar(registrar: Registrar){
    this.registrarService.deleteRegistrar(registrar).subscribe(() => {
      this.getRegistros();
    });
    }
    editRegistrar(registrar: Registrar){
      this.registrar = { ...registrar };
    }

    cleanForm(form: NgForm){
    this.getRegistros();
    form.resetForm();
    this.registrar = {} as Registrar;
    }
}




