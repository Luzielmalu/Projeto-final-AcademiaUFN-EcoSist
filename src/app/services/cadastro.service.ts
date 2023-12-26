import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Cadastro } from '../models/cadastro';



@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private url = 'http://localhost:8089/cadastro';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }
  cadastroUsuario(cadastro: Cadastro): Observable<Cadastro> {
    const url = `${this.url}`;
    return this.httpClient.post<Cadastro>(url, cadastro);
  }
  getCadastros(): Observable<Cadastro[]>{
    return this.httpClient.get<Cadastro[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }
  checkEmailExists(email: string): Observable<boolean> {
    const url = `${this.url}/exists?email=${email}`;
    return this.httpClient.get<boolean>(url);
  }
  getCadastroById(id: number): Observable<Cadastro> {
    return this.httpClient.get<Cadastro>(`${this.url}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  getCadastroByCpfCnpj(cpfCnpj: string): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/cpfCnpj?cpfCnpj=${cpfCnpj}`);
}

  createCadastro(cadastro: Cadastro): Observable<Cadastro> {
    return this.httpClient.post<Cadastro>(this.url, cadastro);
  }
  saveCadastro(cadastro: Cadastro): Observable<Cadastro>{
    return this.httpClient.post<Cadastro>(this.url, JSON.stringify(cadastro), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))

  }
  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    return this.httpClient.put<Cadastro>(this.url +'/cadastro'+ cadastro.id, JSON.stringify(cadastro), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }
  updateCampoCadastro(id: number, campo: string, novoValor: string): Observable<any> {
    const url = `${this.url}/{id}/{campo}/${id}/${campo}`;

    return this.httpClient.put(url, { valor: novoValor }, this.httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Cadastro não encontrado', error);
        } else {
          console.error('Erro ao atualizar cadastro', error);
        }
        return throwError(error);
      })
    );
  }
  deleteCadastro(cadastro: Cadastro){
    return this.httpClient.delete<Cadastro>(this.url +'/'+ cadastro.id)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }
  adicionarCadastro(cadastro: Cadastro): Observable<Cadastro>{
    console.log(this.url, JSON.stringify(cadastro))
    try {
      // Verifica se o localStorage está disponível
      if (localStorage) {
        // Se estiver disponível, continue com o código original
        return this.httpClient.post<Cadastro>(this.url, JSON.stringify(cadastro), this.httpOptions)
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
