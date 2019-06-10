import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserFormComponent } from './add-user-form.component';
import { NotificationService } from '../../../services/notification/notification.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddUserFormComponent', () => {
  let component: AddUserFormComponent;
  let fixture: ComponentFixture<AddUserFormComponent>;
  let notificationService: jasmine.SpyObj<NotificationService>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    notificationService = jasmine.createSpyObj('NotificationService', ['showErrorMessage']);

    TestBed.configureTestingModule({
      declarations: [AddUserFormComponent],
      imports: [
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
      ],
      providers: [AddUserFormComponent, { provide: NotificationService, useValue: notificationService },
        { provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserFormComponent);
    component = fixture.componentInstance;
    component.addUser = () => {};
    fixture.detectChanges();
  });

  describe('ngOnInit', () => {
    it('should group inputs with validators', () => {
      spyOn(formBuilder, 'group');
      component.ngOnInit();
      expect(formBuilder.group).toHaveBeenCalledWith({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required]
      });
    });
  });

  describe('clearForm', () => {
    beforeEach(() => {
      component.name = 'testName';
      component.email = 'testEmail';
      component.password = 'testPassword';
      spyOn(component.checkForm, 'markAsUntouched');
      component.clearForm();
    });

    it('should clear form', () => {
      expect([component.name, component.email, component.password]).toEqual(['', '', '']);
    });

    it('should clear form', () => {
      expect(component.checkForm.markAsUntouched).toHaveBeenCalled();
    });
  });

  describe('onFormSubmit', () => {
    let res;
    beforeEach(() => {
      spyOn(component, 'isNewUserValid').and.returnValue(true);
      spyOn(component, 'addUser').and.returnValue(Promise.resolve());
      spyOn(component, 'clearForm');
      res = component.onFormSubmit('testName', 'testEmail', 'testPass');
    });

    it('should check if user is valid', () => {
      expect(component.isNewUserValid).toHaveBeenCalledWith('testName', 'testEmail', 'testPass');
    });

    it('should add user to grid', () => {
      expect(component.addUser).toHaveBeenCalledWith('testName', 'testEmail', 'testPass');
    });

    describe('on data resolve', () => {
      it('should clear form', done => {
        res.then(() => {
          expect(component.clearForm).toHaveBeenCalled();
          done();
        });
      });
    });
  });

  describe('isNewUserValid', () => {

    describe('when user info is valid', () => {
      it('should group inputs with validators', () => {
        expect(component.isNewUserValid('testName', 'testEmail@gmail.com', 'testPass')).toEqual(true);
      });
    });

    describe('when user info is invalid', () => {
      beforeEach(() => {
        component.isNewUserValid('', 'invalidTestEmail', 'testPass');
      });
      it('should show error message', () => {
        expect(notificationService.showErrorMessage).toHaveBeenCalled();
      });
    });

  });
});
