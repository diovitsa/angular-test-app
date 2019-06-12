import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showErrorMessage(message: string, action: string): boolean {
    this.snackBar.open(message, action, {
      panelClass: 'warning',
      duration: 3000,
    });
    return false;
  }

}
