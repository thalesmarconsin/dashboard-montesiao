import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { MatIcon } from '@angular/material/icon';
import { MaterialModule } from '../../../shared/module/material.module';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { Membro } from '../../../core/models/membro.model';
import { MembroService } from '../../../core/services/membro.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {
  DialgoCursosAsociadosParams,
  DialogCursosAsociadosComponent,
} from '../dialog-ministerios/dialog-cursos-asociados.component';
@Component({
  selector: 'app-grid-membros',
  standalone: true,
  imports: [ CommonModule, MaterialModule, NavbarComponent, MatPaginator, MatSort],
  templateUrl: './grid-membros.component.html',
  styles: ``,
})
export class GridMembroComponent implements OnInit {
  membros: Membro[] = [];
  dataSource!: MatTableDataSource<Membro>;
  idClienteLogin?: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  colunasAMostrar = [
    'id',
    'nome',
    'sobrenome',
    'idade',
    'email',
    'cpf',
    'telefone',
    'ministerio',
    'acoes'
  ];
  private _ministerioService: any;

  constructor(
    private _membroService: MembroService,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMembros();
  }

  getMembros(): void {
    this._membroService.getMembros().subscribe({
      next: (res: any) => {
        console.log('Resposta da API:', res);
        this.membros = res.membros; // adaptado para pegar a chave correta
        this.dataSource = new MatTableDataSource(this.membros);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        console.error('Erro ao carregar membros:', err);
      }
    });
  }

  filtrarGrid(event: Event): void {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createMembro() {
    this._router.navigate(['membrosForm'], {
      relativeTo: this.activatedRoute,
    });
  }

  editMembro(id: number) {
    const idMember = id;

    this._router.navigate(['membrosForm'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        idMember,
      },
    });
  }

  deleteMembro(id: number) {
    this._membroService.deleteMembro(id).subscribe({
      next: () => {
        this._snackBarService.showSuccessSnackbar('Ministério deletado com sucesso!');
        this.getMembros(); // Recarrega a lista
      },
      error: (error: any) => {
        console.error('Erro ao deletar ministério:', error);
        this._snackBarService.showErrorSnackbar('Erro ao deletar ministério!');
      },
    });
  }

  limparFiltro() {
    this.dataSource.filter = '';
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  //asignarCursos(id: number, nombre: string, apellido: string, cedula: string) {
    //let dialogConfig = new MatDialogConfig();

    //dialogConfig.disableClose = true;
    //dialogConfig.autoFocus = true;
    //dialogConfig.height = '80 %';
    //dialogConfig.width = '100%';

    //const data: DialgoCursosAsociadosParams = {
      //idEstudiante: id,
      //nombreEstudiante: nombre + ' ' + apellido,
      //cedula: cedula,
    //};

    //dialogConfig.data = data;

    //dialogConfig = { ...dialogConfig };

    //const dialogRef = this.dialog.open(
      //DialogCursosAsociadosComponent,
      //dialogConfig
    //);
    //dialogRef.afterClosed().subscribe((cursos) => {
      //console.log(cursos);
    //});
  //}
}
