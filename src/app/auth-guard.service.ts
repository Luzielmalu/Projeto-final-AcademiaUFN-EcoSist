import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {

    if (this.authService.isAuthenticated()) {
      return true; // Permite a navegação se autenticado
    } else {
      // Redireciona para a página de login se não autenticado
      this.router.navigate(['/login']);
      return false;
    }
  }
}
