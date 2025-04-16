import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Evento } from '../models/evento.model';

@Injectable({
  providedIn: 'root',
})
export class EventoService {

  private eventoAddress: string = environment.apiRoot + 'eventos';

  constructor(private http: HttpClient) {}

  getEventos(): Observable<Evento[]> {
    return this.http.get(this.eventoAddress) as Observable<Evento[]>;
  }

  getEventoById(id: number): Observable<Evento> {
    return this.http.get(`${this.eventoAddress}/${id}`) as Observable<Evento>;
  }

  postEvento(data: Evento): Observable<Evento> {
    return this.http.post(this.eventoAddress, data) as Observable<Evento>;
  }
  
  putEvento(id: number, data: Evento): Observable<Evento> {
    return this.http.put(`${this.eventoAddress}/${id}`, data) as Observable<Evento>;
  }

  createEvento(Evento: Evento): Observable<Evento> {
    return this.http.post(this.eventoAddress, Evento) as Observable<Evento>;
  }

  updateEvento(id: number, Evento: Evento): Observable<Evento> {
    return this.http.put(`${this.eventoAddress}/${id}`, Evento) as Observable<Evento>;
  }

  deleteEvento(id: number): Observable<Evento> {
    return this.http.delete(`${this.eventoAddress}/${id}`) as Observable<Evento>;
  }
}
