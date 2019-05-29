import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  @Input() onUserAdd;
  @Input() logOut;

  name: string = '';
  email: string = '';
  password: string = '';
  validationMessage: string = 'You should fill up all areas with valid info.';
  action: string = 'Hide';

  constructor(private snackBar: MatSnackBar) {
  }

  clearForm() {
    this.name = '';
    this.password = '';
    this.email = '';
  }

  onFormSubmit(name: string, email: string, password: string) {
    return this.isNewUserValid(name, email, password) && this.onUserAdd(name, email, password)
      .then(() => this.clearForm());
  }

  isNewUserValid(name, email, password) {
    return (name.length && (email.length && email.includes('@') && password.length))
      ? true
      : this.showErrorMessage(this.validationMessage, this.action);
  }

  showErrorMessage(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
    return false;
  }

  ngOnInit() {
  }
}
