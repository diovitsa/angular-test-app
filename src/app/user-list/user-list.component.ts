import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: object = [];

  constructor(private dataService: DataService, private router: Router) {
    this.loadData();
  }

  logOut() {
    this.dataService.logOut();
    this.router.navigateByUrl('');

  }

  onUserAdd(name: string, email: string, password: string) {
    this.dataService.createUser(name, email, password).then(() => this.loadData());
  }

  onUserDelete({ _id }) {
    this.dataService.deleteUser(_id).subscribe(() => this.loadData());
  }

  loadData() {
    this.dataService.getUsersList().then((res) => {
      this.data = res;
    });
  }

  ngOnInit() {
  }

}
