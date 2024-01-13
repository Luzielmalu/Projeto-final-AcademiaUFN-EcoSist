import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  roles: any;
  getUserRoles(): any{
    return this.roles || [];
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  hasRequiredRoles(requiredRoles: string[]): boolean {
    const userRoles = this.getUserRoles(); //Método para obter os papéis do usuário
    return requiredRoles.every(role => userRoles.includes(role));
  }

  getUserType(): Observable<UserTypeResponse> {
    if (this.authService.isAuthenticated()) {
      const userType = this.authService.getUserType();
      const userRoles = this.authService.getUserRoles();
      return of({ userType, roles: userRoles });
    } else {
      return this.http.get<UserTypeResponse>('http://localhost:8089/auth/login');
    }
  }
}

interface UserTypeResponse {
  userType: string;
  roles: string[];
}
