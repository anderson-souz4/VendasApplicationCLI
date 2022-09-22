import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Usuario} from "./login/usuario";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiURL: string = environment.apiURLBase + '/api/usuarios';
  tokenURL: string = environment.apiURLBase + environment.obterTokenUrl;
  clienteID: string = environment.clientId;
  clienteSecret: string = environment.clienteSecret;
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) {
  }

  obterToken() {
    const tokenString = localStorage.getItem('access-token');
    if (tokenString) {
      const token = JSON.parse(tokenString);
      return token;
    }
    return null;
  }

  isAutenthicated(): boolean {
    const token = this.obterToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  encerrarSessao(){
    localStorage.removeItem('access_token');
  }

  getUsuarioAutenticado(){
    const token = this.obterToken();
    if (token){
      const usuario = this.jwtHelper.decodeToken(token).username;
      return usuario;
    }
    return null;
  }


  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>(this.apiURL, usuario);
  }

  tentarLogar(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clienteID}:${this.clienteSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return this.http.post(this.tokenURL, params.toString(), {headers});
  }

}
