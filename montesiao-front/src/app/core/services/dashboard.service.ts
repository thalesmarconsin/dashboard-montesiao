import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../models/administrador.model';
import { environment } from '../../../environments/environment';
import { Dashboard } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  adminAddress: string = environment.apiRoot + 'dashboard';

  constructor(private _http: HttpClient) {}

  getTopCursos(): Observable<Dashboard[]> {
    return this._http.get(`${this.adminAddress}/top-cursos`) as Observable<
      Dashboard[]
    >;
  }

  getTopEstudiantes(): Observable<Dashboard[]> {
    return this._http.get(`${this.adminAddress}/top-estudiantes`) as Observable<
      Dashboard[]
    >;
  }
}
