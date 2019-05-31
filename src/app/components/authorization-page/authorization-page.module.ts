import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthorizationPageComponent } from './authorization-page.component';
import { AuthService } from '../../services/auth/auth.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AuthorizationPageComponent,
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [AuthService],
  bootstrap: [AuthorizationPageComponent]
})
export class AuthorizationPageModule {
}
