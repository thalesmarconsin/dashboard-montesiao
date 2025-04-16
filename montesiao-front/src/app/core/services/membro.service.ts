import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Membro } from '../models/membro.model';
import { Ministerio } from '../models/ministerio.model';

@Injectable({
  providedIn: 'root',
})
export class MembroService {

  private membroAddress: string = environment.apiRoot + 'members';
  private ministerioAddress: string = environment.apiRoot + 'ministries';

  constructor(private http: HttpClient) {}

  getMembros(): Observable<Membro[]> {
      return this.http.get(this.membroAddress) as Observable<Membro[]>;
    }

  getMinisterios(): Observable<Ministerio[]> {
      return this.http.get(this.ministerioAddress) as Observable<Ministerio[]>;
  }

  getMembroById(id: number): Observable<Membro> {
    return this.http.get(`${this.membroAddress}/${id}`) as Observable<Membro>;
  }

  createMembro(membro: Membro): Observable<Membro> {
    return this.http.post(this.membroAddress, membro) as Observable<Membro>;
  }

  updateMembro(id: number, membro: Membro): Observable<Membro> {
    return this.http.put(`${this.membroAddress}/${id}`, membro) as Observable<Membro>;
  }

  deleteMembro(id: number): Observable<Membro> {
    return this.http.delete(`${this.membroAddress}/${id}`) as Observable<Membro>;
  }
}
