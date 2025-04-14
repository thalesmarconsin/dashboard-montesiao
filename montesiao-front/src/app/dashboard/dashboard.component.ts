import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatLabel } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SnackbarService } from '../shared/services/snackbar.service';
import { Membro } from '../core/models/membro.model';
import { Ministerio } from '../core/models/ministerio.model';
import { MembroService } from '../core/services/membro.service';
import { MinisterioService } from '../core/services/ministerio.service';
import { CommonModule } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  membros: Membro[] = [];
  ministerios: Ministerio[] = [];
  dataSource!: MatTableDataSource<Ministerio>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _membroService: MembroService,
    private _ministerioService: MinisterioService,
    private _snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getMembros();
    this.getMinisterios();
  }

  getMembros() {
    this._membroService.getMembros().subscribe({
      next: (res) => {
        console.log('Membros recebidos:', res);
        this.membros   = [...res]; 
      },
      error: (error) => {
        this._snackBarService.showErrorSnackbar(
          'Erro ao obter os dados dos membros'
        );
        console.log(error);
      },
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

    filtrarMinisterio(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}
