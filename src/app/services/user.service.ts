import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

    getUserType(username: string): Observable<string> {
        // Implemente a lógica para obter o tipo de usuário do backend ou de onde for necessário
        // Pode ser uma chamada HTTP para um endpoint específico no seu backend
        // ...

        // Exemplo simplificado: se o username contiver "admin", consideramos um administrador
        return new Observable<string>((observer) => {
            observer.next(username.includes('admin') ? 'admin' : 'user');
            observer.complete();
        });
    }
}
