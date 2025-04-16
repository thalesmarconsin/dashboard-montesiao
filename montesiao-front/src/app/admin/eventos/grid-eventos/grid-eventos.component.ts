import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Evento } from '../../../core/models/evento.model';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { MatIcon } from '@angular/material/icon';
import { MaterialModule } from '../../../shared/module/material.module';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { EventoService } from '../../../core/services/evento.service';

@Component({
  selector: 'app-grid-eventos',
  standalone: true,
  imports: [
    MatIcon,
    MaterialModule,
    NavbarComponent,
    MatPaginator,
    MatSort,
    CommonModule,
  ],
  templateUrl: './grid-eventos.component.html',
  styles: ``,
})
export class GridEventosComponent implements OnInit {
  eventos: Evento[] = [];
  dataSource!: MatTableDataSource<Evento>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  colunasAMostrar = [
    'id',
    'titulo',
    'descricao',
    'horario',
    'data_inicio',
    'data_fim',
    'tipo',
    'acoes',
  ];

  constructor(
    private _eventosService: EventoService,
    private _router: Router,
    private _snackBarService: SnackbarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getEventos();
  }

  getEventos() {
    this._eventosService.getEventos().subscribe({
      next: (res: any) => {
        console.log('Dados recebidos:', res);

        this.eventos = res.eventos || [];

        this.dataSource = new MatTableDataSource(this.eventos);

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

  createEvento() {
    this._router.navigate(['eventosForm'], {
      relativeTo: this.activatedRoute,
    });
  }

  editEvento(id: number) {
    this._router.navigate(['eventosForm'], {
      relativeTo: this.activatedRoute,
      queryParams: { idEvento: id },
    });
  }

  deleteEvento(id: number) {
    this._eventosService.deleteEvento(id).subscribe({
      next: () => {
        this._snackBarService.showSuccessSnackbar('Ministério deletado com sucesso!');
        this.getEventos(); // Recarrega a lista
      },
      error: (error: any) => {
        console.error('Erro ao deletar ministério:', error);
        this._snackBarService.showErrorSnackbar('Erro ao deletar ministério!');
      },
    });
  }
}