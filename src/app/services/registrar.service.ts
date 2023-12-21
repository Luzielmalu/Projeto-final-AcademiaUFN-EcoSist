import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Registrar } from '../models/registrar';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  //registrarUsuario(novoRegistro: Registrar) {
   // throw new Error('Method not implemented.');
  //}

  private url = 'http://localhost:8089/auth/register';

  constructor(private httpClient: HttpClient) { }

  registrarUsuario(novoRegistro: Registrar): Observable<any> {
    // Faça a chamada HTTP para registrar o usuário
    // Substitua 'sua-url-de-registro' pela URL real do seu endpoint de registro
    return this.httpClient.post<any>('http://localhost:8089/auth/register', novoRegistro);
  }

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }
  getRegistros(): Observable<Registrar[]>{
    return this.httpClient.get<Registrar[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }
  getRegistrarById(id: number): Observable<Registrar> {
    return this.httpClient.get<Registrar>(`${this.url}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  createRegistrar(registrar: Registrar): Observable<Registrar> {
    return this.httpClient.post<Registrar>(this.url, registrar);
  }
  saveRegistrar(registrar: Registrar): Observable<Registrar>{
    return this.httpClient.post<Registrar>(this.url, JSON.stringify(registrar), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))

  }
  updateRegistrar(registrar: Registrar): Observable<Registrar>{
    return this.httpClient.put<Registrar>(this.url +'/'+ registrar.id, JSON.stringify(registrar), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }
  deleteRegistrar(registrar: Registrar){
    return this.httpClient.delete<Registrar>(this.url +'/'+ registrar.id)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }
  adicionarRegistrar(registrar: Registrar): Observable<Registrar>{
    console.log(this.url, JSON.stringify(registrar))
    try {
      // Verifica se o localStorage está disponível
      if (localStorage) {
        // Se estiver disponível, continue com o código original
        return this.httpClient.post<Registrar>(this.url, JSON.stringify(registrar), this.httpOptions)
          .pipe(
            retry(1),
            catchError((error: HttpErrorResponse) => this.handleError(error)) // Adicionado tipo de parâmetro
          );
      } else {
        // Se não estiver disponível, lida com o erro de maneira apropriada
        const errorMessage = 'O localStorage não está disponível neste ambiente.';
        console.error(errorMessage);
        return throwError(errorMessage);
      }
    } catch (error) {
      // Captura exceções relacionadas ao localStorage (por exemplo, bloqueio de cookies no navegador)
      const errorMessage = 'Erro ao acessar o localStorage: ' + (error instanceof Error ? error.message : 'Desconhecido');
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  }
  handleError(error: HttpErrorResponse): Observable<never>{
    let errorMessage = '';
    if(error.error && error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Código do erro: ${error.status},` +`mensagem: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
