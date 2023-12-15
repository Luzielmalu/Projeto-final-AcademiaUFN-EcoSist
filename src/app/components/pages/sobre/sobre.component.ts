import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css'
})
export class SobreComponent {
  constructor(private router: Router) {}

  redirecionarParaHome() {
    // Utilize o método navigateByUrl ou navigate para redirecionar para a home
    this.router.navigateByUrl('');
    // Ou
    // this.router.navigate(['']);
  }
}
