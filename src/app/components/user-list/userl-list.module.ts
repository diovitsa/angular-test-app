import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { UserListComponent } from './user-list.component';
import { UserListGridComponent } from './user-list-grid/user-list-grid.component';
import { DataService } from '../../services/data/data.service';
import { AddUserFormComponent } from './add-user-form/add-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    UserListComponent,
    UserListGridComponent,
    AddUserFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [DataService],
  bootstrap: [UserListComponent]
})
export class UserListModule {
}
