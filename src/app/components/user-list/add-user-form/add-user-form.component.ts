import { Component, Input, OnInit } from '@angular/core';
import { NotificationService } from '../../../services/notification/notification.service';

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

  constructor(private notificationService: NotificationService) {
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
      : this.notificationService.showErrorMessage(this.validationMessage, this.action);
  }

  ngOnInit() {
  }
}
