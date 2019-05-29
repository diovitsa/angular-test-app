import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.css']
})

export class AuthorizationPageComponent implements OnInit {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  onFormSubmit(email, password) {
    this.authService.signIn(email, password)
      .then(() => this.router.navigateByUrl('user-list'));
  }

  ngOnInit() {
  }

}
