import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../../shared/services/snackbar.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { EventoService } from '../../../../core/services/evento.service';
import { MaterialModule } from '../../../../shared/module/material.module';
import { SharedModule } from '../../../../shared/module/shared.module';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import moment from 'moment';
import { Evento } from '../../../../core/models/evento.model';

@Component({
  selector: 'app-form-eventos',
  standalone: true,
  imports: [MaterialModule, SharedModule, NavbarComponent],
  templateUrl: './form-eventos.component.html',
  styleUrl: `./form-eventos.component.css`,
  providers: [provideNativeDateAdapter()],
})
export class FormEventosComponent implements OnInit {
  form: FormGroup;
  id?: number;
  hide = true;
  titulo: string = 'Criação de Evento';
  eventos: Evento[] = [];

  public get frmdados() {
    return this.form!.controls;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private _eventosService: EventoService
  ) {
    this.form = this._formBuilder.group({
      id: [''],
      titulo: ['', [Validators.required, Validators.maxLength(150)]],
      descricao: ['', [Validators.required, Validators.maxLength(150)]],
      horario: ['', [Validators.required, Validators.maxLength(150)]],
      data_inicio: ['', [Validators.required]],
      data_fim: ['', [Validators.required]],
      local: ['', [Validators.required, Validators.maxLength(150)]],
      tipo: ['', [Validators.required]],
    });
  }
  
  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((data) => {
      const { idEvento } = data;

      console.log(this.eventos);

      if (idEvento) {
        this.id = idEvento;
        if (this.id && this.id > 0) {
          this._eventosService.getEventoById(this.id).subscribe({
            next: (res) => {
              this.titulo = `Editando Evento - ${this.id} ${res.titulo} ${res.horario}`;
              const dato = { ...res } as Evento;
              console.log(dato);
              dato.data_inicio = new Date(dato.data_inicio as Date);

              dato.data_fim = new Date(dato.data_fim as Date);
              this.form.patchValue(dato);
              this.frmdados['id'].disable();
            },
            error: (error) => {
              this._snackBarService.showErrorSnackbar(
                'Erro ao carregar Evento'
              );
              console.log(error);
            },
          });
        } else {
          this.id = undefined;
          this.titulo = 'Criando Evento';
          this.form.reset();
        }
      }
    });
  }

  guardarForm() {
    const { titulo, descricao, horario, data_inicio, data_fim, local, tipo} = this.form.value;
    const dados: Evento = {
      id: this.id!,
      titulo: titulo,
      descricao: descricao,
      horario: horario,
      data_inicio: data_inicio,
      data_fim: data_fim,
      local: local,
      tipo: tipo,
    };
    dados.data_inicio = moment(dados.data_inicio as Date).format(
      'YYYY-MM-DD'
    );

    dados.data_fim = moment(dados.data_fim as Date).format('YYYY-MM-DD');

    if (this.id && this.id > 0) {
      this.editEvento(dados);
    } else {
      this.createMinisterio(dados);
    }
  }

  createMinisterio(dados: Evento) {
    this._eventosService.postEvento(dados).subscribe({
      next: (res: any) => {
        this._snackBarService.showSuccessSnackbar('Evento criado com sucesso!');
        this.redireccionarGrid();
      },
      error: (error: any) => {
        this._snackBarService.showErrorSnackbar(
          'Erro ao criar o Evento!'
        );
        console.log(error);
      },
    });
  }

  editEvento(dados: Evento) {
      this._eventosService.putEvento(dados.id!, dados).subscribe({
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

  redireccionarGrid() {
    this._router.navigate(['/admin/eventos']);
  }
}
