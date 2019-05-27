import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {
  @Input() onFormSubmit;

  name: string = '';
  email: string = '';
  password: string = '';

  constructor() {
  }

  clearForm() {
    this.name = '';
    this.password = '';
    this.email = '';
  }

  ngOnInit() {
  }

}
