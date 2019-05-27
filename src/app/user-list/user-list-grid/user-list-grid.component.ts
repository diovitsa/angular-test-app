import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-user-list-grid',
  templateUrl: './user-list-grid.component.html',
  styleUrls: ['./user-list-grid.component.css']
})

export class UserListGridComponent implements OnInit {
  displayedColumns: string[] = ['email', 'name', 'password'];
  dataSource: User[];

  constructor(svc: DataService) {
    svc.signIn();
    svc.getUsersList().subscribe((res) => {
      this.dataSource = res;
    });
  }

  ngOnInit() {
  }

}
