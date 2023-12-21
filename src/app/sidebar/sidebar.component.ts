import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
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
