import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { Membro } from '../../../core/models/membro.model';
import { MembroService } from '../../../core/services/membro.service';
import { MinisterioService } from '../../../core/services/ministerio.service';
import { MaterialModule } from '../../../shared/module/material.module';
import { SharedModule } from '../../../shared/module/shared.module';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Ministerio } from '../../../core/models/ministerio.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-form-membro',
  standalone: true,
  imports: [MaterialModule, SharedModule, NavbarComponent, CommonModule, MatFormFieldModule, MatButtonToggleModule, MatRadioModule],
  templateUrl: './form-membros.component.html',
  styleUrl: './form-membros.component.css',
})
export class FormMembroComponent implements OnInit {
  form: FormGroup;
  id?: number;
  titulo: string = 'Cadastro de Membro';
  ministerios: Ministerio[] = [];

  dataSource!: MatTableDataSource<Ministerio>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

  public get frmDados() {
    return this.form!.controls;
  }

  constructor(
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private _membroService: MembroService,
    private _ministerioService: MinisterioService
  ) {
    this.form = this._formBuilder.group({
      id: [''],
      nome: ['', [Validators.required, Validators.maxLength(150)]],
      sobrenome: ['', [Validators.required, Validators.maxLength(150)]],
      idade: ['', [Validators.required]],
      cpf: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: [''],
      ministerio_id: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getMinisterios();

    console.log(this.ministerios);

    this._activatedRoute.queryParams.subscribe((data) => {
      const { idMembro } = data;

      if (idMembro) {
        this.id = +idMembro;
        if (this.id && this.id > 0) {
          this._membroService.getMembroById(this.id).subscribe({
            next: (res: Membro) => {
              this.titulo = `Editando Membro - ${this.id} ${res.nome} ${res.sobrenome}`;
              this.form.patchValue(res);
              this.frmDados['id'].disable();
            },
            error: () => {
              this._snackBarService.showErrorSnackbar('Erro ao carregar dados do membro');
            },
          });
        } else {
          this.titulo = 'Criando Membro';
          this.form.reset();
        }
      }
    });
  }

  getMinisterios() {
    this._ministerioService.getMinisterios().subscribe({
      next: (res: any) => {
        console.log('Dados recebidos:', res);

        this.ministerios = res.ministerios || [];

        this.dataSource = new MatTableDataSource(this.ministerios);

        setTimeout(() => {
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
      },
      error: (error: any) => {
        console.error('Erro ao recuperar dados:', error);
        this._snackBarService.showErrorSnackbar('Erro ao recuperar dados!');
      },
    });
  }

  guardarForm() {
    const { nome, sobrenome, idade, cpf, email, telefone, ministerio_id } = this.form.value;
    const dados: Membro = {
    id: this.id!,
    nome,
    sobrenome,
    email,
    idade,
    telefone,
    cpf,
    ministerio_id,
  };

    console.log(dados)
    
    if (this.id && this.id > 0) {
      this.editMembro(dados);
    } else {
      this.createMembro(dados);
    }
  }

  createMembro(dados: any) {
    this._membroService.postMembro(dados).subscribe({
      next: () => {
        this._snackBarService.showSuccessSnackbar('Membro criado com sucesso!');
        this.redireccionarGrid();
      },
      error: (err) => {
        console.error('Erro detalhado:', err.error);
        this._snackBarService.showErrorSnackbar('Erro ao criar o Membro!');
      },
    });
  }

  editMembro(dados: Membro) {
    this._membroService.updateMembro(dados.id, dados).subscribe({
      next: () => {
        this._snackBarService.showSuccessSnackbar('Membro atualizado com sucesso!');
        this.redireccionarGrid();
      },
      error: () => {
        this._snackBarService.showErrorSnackbar('Erro ao editar o membro!');
      },
    });
  }

  redireccionarGrid() {
    this._router.navigate(['/admin/membros']);
  }
}
