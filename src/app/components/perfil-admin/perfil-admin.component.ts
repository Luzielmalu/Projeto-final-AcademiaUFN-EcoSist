import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-perfil-admin',
  templateUrl: './perfil-admin.component.html',
  styleUrls:[ './perfil-admin.component.css'],


})
export class PerfilAdminComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  isLoggedIn(): boolean {
    return this.authService.getAuthenticationStatus();
  }
    logout(): void {
      this.authService.logout();
    }
}
