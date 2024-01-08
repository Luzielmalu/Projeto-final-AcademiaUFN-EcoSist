import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  isAuthenticated!: boolean;
  constructor(private authService: AuthService) {}



  ngOnInit(): void {}
  getAuthenticationStatus(): boolean {
    return this.isAuthenticated;
  }


  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }
  login() {

    console.log('Usuário está tentando fazer login');
  }
  onLinkClick(): void {
    console.log('Verificando autenticação:', this.authService.isAuthenticated());

  }
}

