import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../module/material.module';
import { Router, RouterLink } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MaterialModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  nome?: string;
  idAdministrador?: number;
  localStorageKey: string = 'login';
  constructor(
    private _localStorageService: LocalStorageService,
    private _router: Router
  ) {}
  ngOnInit(): void {
    this.getDadosLogin();
  }

  getDadosLogin() {
    if (
      this._localStorageService.getItem(this.localStorageKey)?.nome &&
      this._localStorageService.getItem(this.localStorageKey)?.idAdministrador
    ) {
      this.nome = this._localStorageService.getItem(
        this.localStorageKey
      )?.nome;
      this.idAdministrador = this._localStorageService.getItem(
        this.localStorageKey
      )?.id;
    }
  }

  createSession() {
    this._localStorageService.removeItem(this.localStorageKey);
    this.nome = undefined;
    this.idAdministrador = 0;
    this._router.navigate(['']);
  }
}
