import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const requiredRoles = next.data['roles'] as Array<string>;

    if (this.userService.hasRequiredRoles(requiredRoles)) {
      return true;
    } else {
      // Se não tiver os papéis necessários, redirecione para uma página de acesso não autorizado
      this.router.navigate(['/unauthorized']);
      return false;
    }
  }
}
