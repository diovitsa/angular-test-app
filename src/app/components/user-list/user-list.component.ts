import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: object = [];

  constructor(private dataService: DataService, private router: Router, private authService: AuthService) {
    this.loadData();
  }

  logOut(): void {
    this.authService.logOut();
    this.router.navigateByUrl('');
  }

  addUser(name: string, email: string, password: string) {
    return this.dataService.createUser(name, email, password)
      .then(() => this.loadData());
  }

  deleteUser({ _id }): void {
    this.dataService.deleteUser(_id).subscribe(() => this.loadData());
  }

  loadData(): Promise<User> {
    return this.dataService.getUsersList().then((res) => {
      this.data = res;
      return res;
    });
  }

  ngOnInit() {
  }

}
