import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})

export class AuthorizationPageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private dataService: DataService, private router: Router) {
  }

  onFormSubmit(email, password) {
    this.dataService.signIn(email, password)
      .then(() => this.router.navigateByUrl('user-list'));
  }

  ngOnInit() {
  }

}
