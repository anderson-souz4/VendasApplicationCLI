import {Injectable} from '@angular/core';
import {Cliente} from './clientes/cliente'
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiURL: string = environment.apiURLBase + '/api/clientes';

  constructor(private http: HttpClient) {
  }

  salvar(cliente: Cliente): Observable<any> {
    return this.http.post(`${this.apiURL}`, cliente);
  }

  atualizar(cliente: Cliente): Observable<any> {
    return this.http.put(`${this.apiURL}/${cliente.id}`, cliente);
  }

  getCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiURL);
  }

  getClienteById(id: number): Observable<Cliente> {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }

  deletarCliente(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }
}
