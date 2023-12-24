import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrl: './perfil-usuario.component.css'
})
export class PerfilUsuarioComponent implements OnInit{
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
    logout(): void {
      this.authService.logout();
    }
}
