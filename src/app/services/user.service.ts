import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  hasRequiredRoles(requiredRoles: string[]) {
    throw new Error('Method not implemented.');
  }
  private userType: string = '';
  constructor(private http: HttpClient) {}

  getUserType(): string {
    return this.userType;
  }
  fetchUserType(): Observable<string> {

    return this.http.get<string>('http://localhost:8089/auth/login');
  }
  setUserType(userType: string): void {
      this.userType = userType;
    }
}
