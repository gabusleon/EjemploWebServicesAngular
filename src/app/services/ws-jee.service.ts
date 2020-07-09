import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WsJeeService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get('http://localhost:8080/EjemploREST/rest/cliente/list');
  }
}
