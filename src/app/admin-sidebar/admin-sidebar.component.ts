import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.css'
})
export class AdminSidebarComponent {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  logout(): void {
    this.authService.logout();
  }

shouldShowSidebar(): boolean {
  // Verifica se o usuário está autenticado
  return this.authService.getAuthenticationStatus();
}
}
