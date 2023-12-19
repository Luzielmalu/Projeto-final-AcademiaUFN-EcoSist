import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  isLoggedIn(): boolean {
    return this.authService.getAuthenticationStatus();
  }

  logout(): void {
    this.authService.logout();
  }
  login() {
    // Lógica de login aqui
    console.log('Usuário está tentando fazer login');
  }
}
