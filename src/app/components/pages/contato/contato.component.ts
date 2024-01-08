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

    this.router.navigateByUrl('');
    // this.router.navigate(['']);
  }
}
