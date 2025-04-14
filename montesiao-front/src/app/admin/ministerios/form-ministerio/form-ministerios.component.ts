import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { MinisterioService } from '../../../core/services/ministerio.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MaterialModule } from '../../../shared/module/material.module';
import { SharedModule } from '../../../shared/module/shared.module';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import moment from 'moment';
import { Ministerio } from '../../../core/models/ministerio.model';
@Component({
  selector: 'app-form-ministerio',
  standalone: true,
  imports: [MaterialModule, SharedModule, NavbarComponent],
  templateUrl: './form-ministerios.component.html',
  styleUrl: `./form-ministerios.component.css`,
  providers: [provideNativeDateAdapter()],
})
export class FormMinisteriosComponent implements OnInit {
  form: FormGroup;
  id?: number;
  hide = true;
  titulo: string = 'Criação de Ministério';
  Atual: boolean = false;

  public get frmdados() {
    return this.form!.controls;
  }
  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private _ministerioService: MinisterioService
  ) {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      horario: ['', [Validators.required, Validators.maxLength(150)]],
      data_inicio: ['', [Validators.required]],
      data_fim: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
    });
  }
  
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((data) => {
      const { idMinisterio } = data;

      if (idMinisterio) {
        this.id = idMinisterio;
        if (this.id && this.id > 0) {
          this._ministerioService.getMinisterioById(this.id).subscribe({
            next: (res) => {
              this.titulo = `Editando Ministério - ${this.id} ${res.nome} ${res.horario}`;
              const dato = { ...res } as Ministerio;
              console.log(dato);
              dato.data_inicio = new Date(dato.data_inicio as Date);

              dato.data_fim = new Date(dato.data_fim as Date);
              this.form.patchValue(dato);
              this.frmdados['id'].disable();
            },
            error: (error) => {
              this._snackBarService.showErrorSnackbar(
                'Erro ao carregar Ministério'
              );
              console.log(error);
            },
          });
        } else {
          this.id = undefined;
          this.titulo = 'Criando Ministério';
          this.form.reset();
        }
      }
    });
  }

  guardarForm() {
    const { nome, horario, data_inicio, data_fim, tipo } = this.form.value;
    const dados: Ministerio = {
      id: this.id!,
      nome: nome,
      horario: horario,
      data_inicio: data_inicio,
      data_fim: data_fim,
      tipo: tipo,
    };
    dados.data_inicio = moment(dados.data_inicio as Date).format(
      'YYYY-MM-DD'
    );

    dados.data_fim = moment(dados.data_fim as Date).format('YYYY-MM-DD');

    if (this.id && this.id > 0) {
      this.editMinisterio(dados);
    } else {
      this.createMinisterio(dados);
    }
  }

  createMinisterio(dados: Ministerio) {
    this._ministerioService.postMinisterio(dados).subscribe({
      next: (res: any) => {
        this._snackBarService.showSuccessSnackbar('Ministério criado com sucesso!');
        this.redireccionarGrid();
      },
      error: (error: any) => {
        this._snackBarService.showErrorSnackbar(
          'Erro ao criar o Ministério!'
        );
        console.log(error);
      },
    });
  }

  editMinisterio(dados: Ministerio) {
    this._ministerioService.putMinisterio(dados.id, dados).subscribe({
      next: (res: any) => {
        this._snackBarService.showSuccessSnackbar('Ministério editado com sucesso!');
        this.redireccionarGrid();
      },
      error: (error: any) => {
        this._snackBarService.showErrorSnackbar(
          'Erro ao atualizar o Ministério!'
        );
        console.log(error);
      },
    });
  }

  toggleDataFim() {
    if (this.Atual) {
      this.form.get('data_fim')?.disable(); 
      this.form.get('data_fim')?.setValue('Atual'); 
    } else {
      this.form.get('data_fim')?.enable();
      this.form.get('data_fim')?.reset();
    }
  }

  redireccionarGrid() {
    this._router.navigate(['/admin/ministerios']);
  }
}
