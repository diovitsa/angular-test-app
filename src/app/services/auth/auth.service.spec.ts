import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

const postRequestParams: string[] = ['"https://quiet-dawn-70829.herokuapp.com/sign-in"',
  '{"password":"testPass","email":"testEmail"}'];

describe('AuthService', () => {
  let service: AuthService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

  beforeEach(() => {
    httpClientSpy.post.and.returnValue(Observable.create());

    service = new AuthService(httpClientSpy);
  });

  describe('signIn', () => {
    beforeEach(() => {
      service.signIn('testEmail', 'testPass');
    });

    it('should be created', () => {
      const getParams: string[] = httpClientSpy.post.calls.argsFor(0);
      const getJsonParams: string[] = [...getParams.map(param => JSON.stringify(param))];

      getJsonParams.forEach((param, index) => {
        expect(param).toEqual(postRequestParams[index]);
      });
    });
  });

  describe('isLoggedIn', () => {

    describe('when there is auth token in local storage', () => {
      it('should be created', () => {
        window.localStorage.removeItem('authToken');
        expect(service.isLoggedIn()).toEqual(false);
      });
    });

    describe('when there is no auth token in local storage', () => {
      it('should be created', () => {
        window.localStorage.setItem('authToken', 'testToken');
        expect(service.isLoggedIn()).toEqual(true);
      });
    });
  });

});
