import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ministerio } from '../models/ministerio.model';

@Injectable({
  providedIn: 'root',
})
export class MinisterioService {

  private ministerioAddress: string = environment.apiRoot + 'ministries';

  constructor(private http: HttpClient) {}

  getMinisterios(): Observable<Ministerio[]> {
    return this.http.get(this.ministerioAddress) as Observable<Ministerio[]>;
  }

  getMinisterioById(id: number): Observable<Ministerio> {
    return this.http.get(`${this.ministerioAddress}/${id}`) as Observable<Ministerio>;
  }

  postMinisterio(data: Ministerio): Observable<Ministerio> {
    return this.http.post(this.ministerioAddress, data) as Observable<Ministerio>;
  }
  
  putMinisterio(id: number, data: Ministerio): Observable<Ministerio> {
    return this.http.put(`${this.ministerioAddress}/${id}`, data) as Observable<Ministerio>;
  }

  createMinisterio(ministerio: Ministerio): Observable<Ministerio> {
    return this.http.post(this.ministerioAddress, ministerio) as Observable<Ministerio>;
  }

  updateMinisterio(id: number, ministerio: Ministerio): Observable<Ministerio> {
    return this.http.put(`${this.ministerioAddress}/${id}`, ministerio) as Observable<Ministerio>;
  }

  deleteMinisterio(id: number): Observable<Ministerio> {
    return this.http.delete(`${this.ministerioAddress}/${id}`) as Observable<Ministerio>;
  }
}
