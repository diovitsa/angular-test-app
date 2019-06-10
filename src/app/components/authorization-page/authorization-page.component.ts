import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
// import { User } from '../../interfaces/user';

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

  onFormSubmit(email: string, password: string): Promise<any> {
    return this.authService.signIn(email, password)
      .then(() => this.router.navigateByUrl('user-list'));
  }

  ngOnInit() {
  }

}
