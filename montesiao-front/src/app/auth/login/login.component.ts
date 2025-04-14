import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../shared/module/material.module';
import { SharedModule } from '../../shared/module/shared.module';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { AdministradorService } from '../../core/services/administrador.service';
import { Administrador } from '../../core/models/administrador.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule, SharedModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public get snackBarService(): SnackbarService {
    return this._snackBarService;
  }
  public set snackBarService(value: SnackbarService) {
    this._snackBarService = value;
  }
  form: FormGroup;
  logo = '/assets/img/login1.jpeg';
  public get frmCliente() {
    return this.form!.controls;
  }
  localStorageKey: string = 'login';
  hide = true;


  constructor(
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private _localStorageService: LocalStorageService,
    private _adminsitradorService: AdministradorService
  ) {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  entrar() {
    const { email, password } = this.form.value;
    if (!email || !password) {
      this._snackBarService.showErrorSnackbar('Entre com email e senha');
      return;
    }
    this._adminsitradorService.getLlogin(email, password).subscribe({
      next: (res) => {
        const usuarios = [...res] as Administrador[];

        if (usuarios.length == 1) {
          this._localStorageService.removeItem(this.localStorageKey);
          this._localStorageService.setItem(this.localStorageKey, {
            idAdministrador: usuarios[0].id,
            nome:
              usuarios[0].nome?.trim() + ' ' + usuarios[0].sobrenome?.trim(),
          });

          this._router.navigateByUrl('/dashboard');
        } else {
          this._snackBarService.showErrorSnackbar(
            'Email ou senha incorretas!'
          );
        }
      },
      error: (error) => {
        this._snackBarService.showErrorSnackbar(
          'Email ou senha incorretas!'
        );
      },
    });
  }
}
