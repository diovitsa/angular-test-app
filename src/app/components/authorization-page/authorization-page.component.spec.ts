import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorizationPageComponent } from './authorization-page.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

describe('AuthorizationPageComponent', () => {
  let component: AuthorizationPageComponent;
  let fixture: ComponentFixture<AuthorizationPageComponent>;
  let authService: jasmine.SpyObj<AuthService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async(() => {
    authService = jasmine.createSpyObj('AuthService', ['signIn']);
    router = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [AuthorizationPageComponent],
      imports: [
        FormsModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [{ provide: AuthService, useValue: authService },
        { provide: Router, useValue: router }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('onFormSubmit', () => {
    let res;

    beforeEach(() => {
      authService.signIn.and.returnValue(Promise.resolve());
      res = component.onFormSubmit('test@email.com', 'testPassword');
    });

    it('should send form data to sign-in', () => {
      expect(authService.signIn).toHaveBeenCalledWith('test@email.com', 'testPassword');
    });

    describe('on data resolve', () => {
      it('should send form data to sign-in', done => {
        res.then(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith('user-list');
          done();
        });
      });
    });
  });
});
