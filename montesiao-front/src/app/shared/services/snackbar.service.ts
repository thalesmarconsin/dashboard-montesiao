import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  duracion: number = 3000;
  constructor(private _snackBar: MatSnackBar) {}

  showErrorSnackbar(error: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-error'];
    config.duration = this.duracion;
    (config.horizontalPosition = 'right'), (config.verticalPosition = 'top');
    this._snackBar.open(error, 'x', config);
  }

  showSuccessSnackbar(successMessage: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-success'];
    config.duration = this.duracion;
    (config.horizontalPosition = 'right'), (config.verticalPosition = 'top');
    this._snackBar.open(successMessage, 'x', config);
  }

  showWarningSnackbar(warningMessage: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['snackbar-warning'];
    config.duration = this.duracion;
    (config.horizontalPosition = 'right'), (config.verticalPosition = 'top');
    this._snackBar.open(warningMessage, 'x', config);
  }
}
