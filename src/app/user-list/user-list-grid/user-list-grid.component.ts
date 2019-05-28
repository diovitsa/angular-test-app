import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-grid',
  templateUrl: './user-list-grid.component.html',
  styleUrls: ['./user-list-grid.component.css']
})

export class UserListGridComponent implements OnInit {
  @Input() data: object;
  @Input() onUserDelete;

  displayedColumns: string[] = ['email', 'name', 'password', 'actions'];

  ngOnInit() {
  }

}
