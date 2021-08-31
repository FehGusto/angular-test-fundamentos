import { Transferencia } from './../models/tranferencia.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listatransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

constructor(private httpClient: HttpClient) {
  this.listatransferencia = [];
}

get transferencias() {
  return this.listatransferencia;
}

todas(): Observable<Transferencia[]> {
  return this.httpClient.get<Transferencia[]>(this.url);
}

adicionar(transferencia: Transferencia): Observable<Transferencia>{
  this.hidatrar(transferencia);

  return this.httpClient.post<Transferencia>(this.url, transferencia)
}


private hidatrar(transferencia: any){
  transferencia.data = new Date();
}
}
