import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotificationService } from './services/notification/notification.service';
import { UserListModule } from './components/user-list/userl-list.module';
import { AuthorizationPageModule } from './components/authorization-page/authorization-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserListModule,
    AuthorizationPageModule,
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
