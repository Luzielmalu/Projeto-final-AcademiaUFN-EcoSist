import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Agendar } from '../models/agendar';

@Injectable({
  providedIn: 'root'
})
export class AgendarService {

  private url = 'http://localhost:8089/agendamento';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'Application/json'})
  }
  agendamentoUsuario(agendamento: Agendar): Observable<Agendar> {
    const url = `${this.url}`;
    return this.httpClient.post<Agendar>(url, agendamento);
  }
  getAgendamentos(): Observable<Agendar[]>{
    return this.httpClient.get<Agendar[]>(this.url)
    .pipe(
      retry(2),
      catchError(this.handleError))
  }
  getAgendarById(id: number): Observable<Agendar> {
    return this.httpClient.get<Agendar>(`${this.url}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
  createAgendar(agendar: Agendar): Observable<Agendar> {
    return this.httpClient.post<Agendar>(this.url, agendar);
  }
  saveAgendar(agendar: Agendar): Observable<Agendar>{
    return this.httpClient.post<Agendar>(this.url, JSON.stringify(agendar), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError))

  }
  updateAgendar(agendar: Agendar): Observable<Agendar>{
    return this.httpClient.put<Agendar>(this.url +'/'+ agendar.id, JSON.stringify(agendar), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }
  deleteAgendar(agendar: Agendar){
    return this.httpClient.delete<Agendar>(this.url +'/'+ agendar.id)
    .pipe(
      retry(1),
      catchError(this.handleError))
  }
  adicionarAgendar(agendar: Agendar): Observable<Agendar>{
    console.log(this.url, JSON.stringify(agendar))
    try {
      // Verifica se o localStorage está disponível
      if (localStorage) {
        // Se estiver disponível, continue com o código original
        return this.httpClient.post<Agendar>(this.url, JSON.stringify(agendar), this.httpOptions)
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


