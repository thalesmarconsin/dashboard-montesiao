import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { Dashboard } from '../../core/models/dashboard.model';
import { DashboardService } from '../../core/services/dashboard.service';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-top-3-cursos',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './top-3-cursos.component.html',
  styles: ``,
})
export class Top3CursosComponent implements OnInit {
  // Pie
  public pieChartOptions: ChartOptions<'pie'> = {
    plugins: {
      title: {
        display: true, // Mostrar el título
        text: 'Top 3 cursos con mas estudiantes', // Texto del título
        font: {
          size: 16, // Tamaño de la fuente
          weight: 'bold', // Peso de la fuente
        },
      },
    },
    responsive: false,
  };
  public pieChartLabels: string[] = [];
  public pieChartDatasets: any[] = [];
  public pieChartLegend = true;
  public pieChartPlugins = [];

  datosD?: Dashboard[] = [];

  constructor(
    private _dashboardService: DashboardService,
    private _snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this._dashboardService.getTopCursos().subscribe({
      next: (res) => {
        this.datosD = [...res] as Dashboard[];

        // Actualizar las etiquetas del gráfico
        this.pieChartLabels = this.datosD!.map((x) => {
          return x.nombre;
        });

        // Actualizar los datos del gráfico
        const newData: number[] = this.datosD!.map((x) => {
          return x.total;
        });

        // Insertar los nuevos datos en pieChartDatasets
        this.pieChartDatasets = [
          {
            data: this.datosD.map((item) => item.total),
            label: 'Total estudiante:',
          },
        ];
      },
      error: (error) => {
        this._snackBarService.showErrorSnackbar('Error al obtener los datos');
        console.log(error);
      },
    });
  }
}
