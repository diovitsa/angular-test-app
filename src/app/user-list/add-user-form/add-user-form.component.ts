import { Component, Input, OnInit } from '@angular/core';

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

  clearForm() {
    this.name = '';
    this.password = '';
    this.email = '';
  }

  onFormSubmit(name, email, password) {
    this.clearForm();
    this.onUserAdd(name, email, password);
  }

  ngOnInit() {
  }
}
