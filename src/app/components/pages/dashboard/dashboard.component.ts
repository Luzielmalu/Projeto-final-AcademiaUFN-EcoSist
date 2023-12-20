import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

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
