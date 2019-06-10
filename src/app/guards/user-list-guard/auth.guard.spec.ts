import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

const activatedRouteSnap = new ActivatedRouteSnapshot();
let routerSnapshotMock: jasmine.SpyObj<RouterStateSnapshot>;

describe('AuthGuard', () => {
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;
  routerSnapshotMock = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);

  beforeEach(() => {
    authService = jasmine.createSpyObj('AuthService', ['isLoggedIn']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      providers: [AuthGuard, { provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }]
    });
  });

  it('should check if user is logged-in', inject([AuthGuard], (guard: AuthGuard) => {
    guard.canActivate(activatedRouteSnap, routerSnapshotMock);
    expect(authService.isLoggedIn).toHaveBeenCalled();
  }));

  describe('if user is logged-in', () => {
    it('should let to go on user list page view', inject([AuthGuard], (guard: AuthGuard) => {
      authService.isLoggedIn.and.returnValue(true);
      expect(guard.canActivate(activatedRouteSnap, routerSnapshotMock)).toEqual(true);
    }));
  });

  describe('if user is not logged-in', () => {
    it('should redirect user to log-in page', inject([AuthGuard], (guard: AuthGuard) => {
      authService.isLoggedIn.and.returnValue(false);
      guard.canActivate(activatedRouteSnap, routerSnapshotMock);

      expect(router.navigateByUrl).toHaveBeenCalledWith('');
    }));
  });
});
