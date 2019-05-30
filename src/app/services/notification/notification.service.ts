import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showErrorMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
    return false;
  }

}
