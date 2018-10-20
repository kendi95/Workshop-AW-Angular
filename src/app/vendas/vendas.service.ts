import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  private api = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>(`${this.api}/api/vendas`);
  }

  listarCliente(): Observable<any> {
    return this.http.get<any>(`${this.api}/api/clientes`);
  }

  listarProduto(): Observable<any> {
    return this.http.get<any>(`${this.api}/api/produtos`);
  }

  adicionar(venda: any): Observable<any> {
    return this.http.post<any>(`${this.api}/api/vendas`, venda);
  }

}
