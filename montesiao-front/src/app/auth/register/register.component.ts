import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialModule } from '../../shared/module/material.module';
import { SharedModule } from '../../shared/module/shared.module';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { SnackbarService } from '../../shared/services/snackbar.service';
import { LocalStorageService } from '../../shared/services/local-storage.service';
import { AdministradorService } from '../../core/services/administrador.service';
import { Administrador } from '../../core/models/administrador.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MaterialModule, SharedModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  styles: ``,
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  id?: number;
  hide = true;
  hideConfirmacao = true;

  titulo: string = 'Cadastro de Administrador';
  localStorageKey: string = 'login';
  errorMessage = '';
  email = new FormControl('', [Validators.required, Validators.email]);
  public get frmRegister() {
    return this.form!.controls;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _administradorService: AdministradorService,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private _localStorageService: LocalStorageService
  ) {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(150)]],
      email: ['', [Validators.required, Validators.email]],
      senha: [
        '',
        [Validators.required, Validators.minLength(8), this.senhaValidator],
      ],
      confirmacao: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.id = undefined;
    this.form.reset();
  }

  senhaValidator(control: AbstractControl) {
    const senha = control.value;
    const hasNumber = /\d/.test(senha);
    const hasUpper = /[A-Z]/.test(senha);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(senha);
    const valid = hasNumber && hasUpper && hasSpecial;
    if (!valid) {
      return { invalidsenha: true };
    }
    return null;
  }

  get senha() {
    return this.form.get('senha');
  }

  guardarForm() {
    console.log('guardarForm chamado');
    const { nome, sobrenome, email, senha, confirmacao } =
      this.form.value;
    const admin: Administrador = {
      id: this.id!,
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      senha: senha,
    };

    if (senha !== confirmacao) {
      this._snackBarService.showErrorSnackbar(
        'Erro! a Senhas não são iguais!'
      );
      return;
    }
    this.createAdministrador(admin);
  }

  createAdministrador(admin: Administrador) {
    this._administradorService.postAdministrador(admin).subscribe({
      next: (res) => {
        const admininstrador = { ...res } as Administrador;
        this._snackBarService.showSuccessSnackbar('Registrado com sucesso!');
        if (admininstrador && admininstrador.id) {
          this._localStorageService.removeItem(this.localStorageKey);
          this._localStorageService.setItem(this.localStorageKey, {
            idAdministrador: admininstrador.id,
            nome:
              admininstrador.nome?.trim() +
              ' ' +
              admininstrador.sobrenome?.trim(),
          });

          this._router.navigateByUrl('/dashboard');
        }
      },
      error: (error) => {
        this._snackBarService.showErrorSnackbar(
          'Erro ao criar administrador!'
        );
        console.log(error);
      },
    });
  }

  redireccionar() {
    this._router.navigate(['']);
  }
}
