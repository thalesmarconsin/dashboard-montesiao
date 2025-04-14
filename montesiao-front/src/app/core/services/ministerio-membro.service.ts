import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ministerio } from '../models/ministerio.model';

@Injectable({
  providedIn: 'root',
})
export class MinisterioMembroService {
  private baseUrl: string = environment.apiRoot + 'ministerios-membro';

  constructor(private http: HttpClient) {}

  // Buscar todos os ministérios e marcar quais o membro participa
  get(idMembro: number): Observable<Ministerio[]> {
    return this.http.get(`${this.baseUrl}/${idMembro}`) as Observable<Ministerio[]>;
  }

  // Atualizar os ministérios do membro
  putMinisterios(idMembro: number, ministerios: Ministerio[]): Observable<Ministerio[]> {
    return this.http.put(`${this.baseUrl}/${idMembro}`, ministerios) as Observable<Ministerio[]>;
  }
}
