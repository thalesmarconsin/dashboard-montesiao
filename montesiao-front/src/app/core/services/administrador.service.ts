import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AdministradorService {
  adminAddress: string = environment.apiRoot + 'administradores';

  constructor(private _http: HttpClient) {}

  getLlogin(email: string, pwd: string): Observable<Administrador[]> {
    return this._http.get(
      `${this.adminAddress}/${email}/${pwd}`
    ) as Observable<Administrador[]>;
  }

  postAdministrador(admin: Administrador): Observable<Administrador> {
    return this._http.post(
      this.adminAddress,
      admin
    ) as Observable<Administrador>;
  }
}
