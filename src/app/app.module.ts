import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListGridComponent } from './user-list/user-list-grid/user-list-grid.component';
import { DataService } from './services/data/data.service';
import { AddUserFormComponent } from './user-list/add-user-form/add-user-form.component';
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserListGridComponent,
    AddUserFormComponent,
    AuthorizationPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
