import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls:[ './contato.component.css']
})
export class ContatoComponent {
  constructor(private router: Router) {}

  redirecionarParaHome() {
    // Utilize o método navigateByUrl ou navigate para redirecionar para a home
    this.router.navigateByUrl('');
    // Ou
    // this.router.navigate(['']);
  }
}
