import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

import { UserListComponent } from './user-list.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data/data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  let dataService: jasmine.SpyObj<DataService>;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['logOut']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);
    dataService = jasmine.createSpyObj('DataService', ['createUser', 'deleteUser', 'getUsersList']);

    TestBed.configureTestingModule({
      declarations: [UserListComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [UserListComponent, { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }, { provide: DataService, useValue: dataService }],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    dataService.getUsersList.and.returnValue(Promise.resolve(['testUsersArray']));

    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  describe('logOut', () => {
    beforeEach(() => {
      component.logOut();
    });

    it('should trigger auth log-out method', () => {
      expect(authService.logOut).toHaveBeenCalled();
    });

    it('should redirect user to log-in page', () => {
      expect(router.navigateByUrl).toHaveBeenCalledWith('');
    });
  });

  describe('addUser', () => {
    beforeEach(() => {
      dataService.createUser.and.returnValue(Promise.resolve());
      spyOn(component, 'loadData');

      component.addUser('testName', 'testEmail@g.com', 'testPass');
    });

    it('should rend request with new user data', () => {
      expect(dataService.createUser).toHaveBeenCalledWith('testName', 'testEmail@g.com', 'testPass');
    });

    describe('on data resolve', () => {
      it('should reload data', done => {
        component.addUser('testName', 'testEmail@g.com', 'testPass').then(() => {
          expect(component.loadData).toHaveBeenCalled();
          done();
        });
      });
    });
  });

  describe('deleteUser', () => {
    const testUser = { _id: 'testId', name: 'testName', email: 'testEmail', password: 'testPass' };

    beforeEach(() => {
      dataService.deleteUser.and.returnValue(of([]));
      spyOn(component, 'loadData');

      component.deleteUser(testUser);
    });

    it('should send request with deleted user id', () => {
      expect(dataService.deleteUser).toHaveBeenCalledWith('testId');
    });

    it('should redirect user to log-in page', () => {
      fixture.detectChanges();
      expect(component.loadData).toHaveBeenCalled();
    });
  });

  describe('loadData', () => {
    beforeEach(() => {
      component.loadData();
    });

    it('should get users', () => {
      expect(dataService.getUsersList).toHaveBeenCalled();
    });

    describe('on data load', () => {
      it('should sds', done => {
        component.loadData().then(() => {
          expect(component.data).toEqual(['testUsersArray']);
          done();
        });
      });
    });
  });
});
