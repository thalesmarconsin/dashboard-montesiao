import { Component, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatPaginator } from '@angular/material/paginator';
import { MatCardHeader } from '@angular/material/card';
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
  imports: [NavbarComponent, CommonModule, MatCard, MatCardHeader, MatCardTitle, MatCardContent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  membros: Membro[] = [];
  ministerios: Ministerio[] = [];
  dataSourceMinisterio!: MatTableDataSource<Ministerio>;
  dataSourceMembro!: MatTableDataSource<Membro>;

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
      next: (res: any) => {
        console.log('Dados recebidos:', res);
        
        this.membros = res.membros.map((membro: Membro) => {
          const ministerio = this.ministerios.find(
            (min) => min.id === membro.ministerio_id
          );
          return {
            ...membro,
            ministerio_nome: ministerio ? ministerio.nome : 'Não definido', 
          };
        });
        this.dataSourceMembro = new MatTableDataSource(this.membros);
        this.dataSourceMembro.paginator = this.paginator;
        this.dataSourceMembro.sort = this.sort;
      },
      error: (err) => {
        console.error('Error fetching members:', err);
        this._snackBarService.showErrorSnackbar('Failed to load members!');
      },
    });
  }
  

  getMinisterios() {
      this._ministerioService.getMinisterios().subscribe({
        next: (res: any) => {
          console.log('Dados recebidos:', res);
  
          this.ministerios = res.ministerios || [];
  
          this.dataSourceMinisterio = new MatTableDataSource(this.ministerios);
  
          setTimeout(() => {
            this.dataSourceMinisterio.sort = this.sort;
            this.dataSourceMinisterio.paginator = this.paginator;
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
      this.dataSourceMinisterio.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSourceMinisterio.paginator) {
        this.dataSourceMinisterio.paginator.firstPage();
      }
    }
}
