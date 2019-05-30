import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthorizationPageComponent } from './components/authorization-page/authorization-page.component';
import { AuthGuard } from './guards/user-list-guard/auth.guard';
import { AlreadyLoggedGuard } from './guards/login-page-guard/alreadyLogged.guard';

const routes: Routes = [{ path: 'user-list', component: UserListComponent, canActivate: [AuthGuard] }, {
  path: '',
  component: AuthorizationPageComponent,
  canActivate: [AlreadyLoggedGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
