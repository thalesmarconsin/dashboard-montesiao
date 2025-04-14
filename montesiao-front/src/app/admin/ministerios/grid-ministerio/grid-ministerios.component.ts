import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Ministerio } from '../../../core/models/ministerio.model';
import { MinisterioService } from '../../../core/services/ministerio.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { MatIcon } from '@angular/material/icon';
import { MaterialModule } from '../../../shared/module/material.module';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid-ministerios',
  standalone: true,
  imports: [
    MatIcon,
    MaterialModule,
    NavbarComponent,
    MatPaginator,
    MatSort,
    CommonModule,
  ],
  templateUrl: './grid-ministerios.component.html',
  styles: ``,
})
export class GridMinisteriosComponent implements OnInit {
  ministerios: Ministerio[] = [];
  dataSource!: MatTableDataSource<Ministerio>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  colunasAMostrar = [
    'id',
    'nome',
    'horario',
    'data_inicio',
    'data_fim',
    'tipo',
    'acoes',
  ];

  constructor(
    private _ministerioService: MinisterioService,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getMinisterios();
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

  filtrarGrid(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createMinisterio() {
    this._router.navigate(['ministeriosForm'], {
      relativeTo: this.activatedRoute,
    });
  }

  editMinisterio(id: number) {
    this._router.navigate(['ministeriosForm'], {
      relativeTo: this.activatedRoute,
      queryParams: { idMinisterio: id },
    });
  }

  deleteMinisterio(id: number) {
    this._ministerioService.deleteMinisterio(id).subscribe({
      next: () => {
        this._snackBarService.showSuccessSnackbar('Ministério deletado com sucesso!');
        this.getMinisterios(); // Recarrega a lista
      },
      error: (error: any) => {
        console.error('Erro ao deletar ministério:', error);
        this._snackBarService.showErrorSnackbar('Erro ao deletar ministério!');
      },
    });
  }
}