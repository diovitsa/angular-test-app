import { TestBed, inject } from '@angular/core/testing';

import { AlreadyLoggedGuard } from './alreadyLogged.guard';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

const activatedRouteSnap = new ActivatedRouteSnapshot();
let routerSnapshotMock: jasmine.SpyObj<RouterStateSnapshot>;

describe('AlreadyLoggedGuard', () => {
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  routerSnapshotMock = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      providers: [AlreadyLoggedGuard, { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }]
    });
  });

  it('should check if user is logged-in', inject([AlreadyLoggedGuard], (guard: AlreadyLoggedGuard) => {
    guard.canActivate(activatedRouteSnap, routerSnapshotMock);
    expect(authService.isLoggedIn).toHaveBeenCalled();
  }));

  describe('if user is not logged-in', () => {
    it('should let to go on login page view', inject([AlreadyLoggedGuard], (guard: AlreadyLoggedGuard) => {
      authService.isLoggedIn.and.returnValue(false);
      expect(guard.canActivate(activatedRouteSnap, routerSnapshotMock)).toEqual(true);
    }));
  });

  describe('if user is not logged-in', () => {
    it('should redirect user to user list', inject([AlreadyLoggedGuard], (guard: AlreadyLoggedGuard) => {
      authService.isLoggedIn.and.returnValue(true);
      guard.canActivate(activatedRouteSnap, routerSnapshotMock);

      expect(router.navigateByUrl).toHaveBeenCalledWith('user-list');
    }));
  });
});
