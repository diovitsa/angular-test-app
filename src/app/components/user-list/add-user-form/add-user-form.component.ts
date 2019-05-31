import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { NotificationService } from '../../../services/notification/notification.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddUserFormErrorMatcher } from '../../../utils/EmailErrorMatcher';


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

  checkForm: FormGroup;
  errorMatcher = new AddUserFormErrorMatcher();
  @ViewChild('form') form;

  constructor(private notificationService: NotificationService, private formBuilder: FormBuilder) {
  }

  clearForm() {
    this.name = '';
    this.password = '';
    this.email = '';

    this.checkForm.markAsUntouched();
  }

  onFormSubmit(name: string, email: string, password: string) {
    return this.isNewUserValid(name, email, password) && this.onUserAdd(name, email, password)
      .then(() => {
        this.clearForm();
      });
  }

  isNewUserValid(name, email, password) {
    return (name.trim().length && (email.trim().length && email.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-])/) && password.trim().length))
      ? true
      : this.notificationService.showErrorMessage(this.validationMessage, this.action);
  }

  ngOnInit() {
    this.checkForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email] ],
      'password': ['', Validators.required]
    });
  }
}
