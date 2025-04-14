import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { MinisterioMembro } from '../../../core/models/ministerio-membro.model';
import { Ministerio } from '../../../core/models/ministerio.model';
import { MinisterioService } from '../../../core/services/ministerio.service';
import { MatIcon } from '@angular/material/icon';
import { MaterialModule } from '../../../shared/module/material.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { MinisterioMembroService } from '../../../core/services/ministerio-membro.service';

export interface DialgoCursosAsociadosParams {
  idEstudiante: number;
  nombreEstudiante: string;
  cedula: string;
}

@Component({
  selector: 'app-dialog-ministerios-asociados',
  standalone: true,
  imports: [MaterialModule, MatSort, MatDialogModule],
  templateUrl: './dialog-cursos-asociados.component.html',
  styleUrl: './dialog-cursos-asociados.component.css',
})
export class DialogCursosAsociadosComponent implements OnInit {
  fileInputFormGroup = new FormGroup({
    fileInput: new FormControl(),
  });
  ministerios: Ministerio[] = [];
  titulo: string = '';
  dataSource!: MatTableDataSource<Ministerio>;
  selection = new SelectionModel<Ministerio>(true, []); // Instancia de SelectionModel para manejar la selección de cursos

  idClienteLogin?: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columnasAMostrar = ['id', 'nombre', 'horario', 'tipo', 'fecha', 'checkbox'];
  constructor(
    private _snackBarService: SnackbarService,
    private _ministerioService: MinisterioMembroService,

    private dialogRef: MatDialogRef<DialogCursosAsociadosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialgoCursosAsociadosParams
  ) {}

  ngOnInit(): void {
    this.titulo = `${this.data.cedula} - ${this.data.nombreEstudiante}  `;
    this.obtenerDatos();
  }

  obtenerDatos() {
    this._ministerioService.get(this.data.idEstudiante).subscribe({
      next: (res) => {
        this.ministerios = [...res];
        this.dataSource = new MatTableDataSource(this.ministerios);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        const ministeriosSel = this.ministerios.filter((x) => x.checkbox == 'S');
        ministeriosSel.forEach((row) => this.selection.select(row));
      },
      error: (error) => {
        this._snackBarService.showErrorSnackbar(
          'Error la recuperar los datos de cursos'
        );
        console.log(error);
      },
    });
  }

  onSubmit() {
    const ministeriosGuardar: Ministerio[] = [...this.selection.selected] as Ministerio[];
    console.log(ministeriosGuardar);
    this._ministerioService
      .putMinisterios(this.data.idEstudiante, ministeriosGuardar)
      .subscribe({
        next: (res) => {
          this._snackBarService.showSuccessSnackbar(
            'Datos Guardados con exito!'
          );
          this.dialogRef.close(this.data.cedula);
        },
        error: (error) => {
          this._snackBarService.showErrorSnackbar(
            'Error la recuperar los datos de cursos'
          );
          console.log(error);
        },
      });
  }

  onClose() {
    this.dialogRef.close();
  }

  // Método para verificar si todos los cursos están seleccionados
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  // Método para alternar la selección de todos los cursos
  toggleAllSelection() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  // Método para alternar la selección de un curso individual
  toggleSelection(ministerio: Ministerio) {
    this.selection.toggle(ministerio);
  }
}
