import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecopontos',
  templateUrl: './ecopontos.component.html',
  styleUrl: './ecopontos.component.css'
})
export class EcopontosComponent {
  constructor(private router: Router) {}

  redirecionarParaHome() {

    this.router.navigateByUrl('');
    // this.router.navigate(['']);
  }

}
