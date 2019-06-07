import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

const getRequestParams: string[] = ['"https://quiet-dawn-70829.herokuapp.com/users"',
  '{"headers":{"normalizedNames":{},"lazyUpdate":null}}'];

const postRequestParams: string[] = ['"https://quiet-dawn-70829.herokuapp.com/users"',
  '{"password":"testPass","email":"test@gmail.com","name":"testName"}',
  '{"headers":{"normalizedNames":{},"lazyUpdate":null}}'];

const deleteRequestParams: string[] = ['"https://quiet-dawn-70829.herokuapp.com/users/testId"',
  '{"headers":{"normalizedNames":{},"lazyUpdate":null}}'];

describe('DataServiceService', () => {
  let service: DataService;
  const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post', 'delete']);

  beforeEach(() => {
    httpClientSpy.get.and.returnValue(Observable.create());
    httpClientSpy.post.and.returnValue(Observable.create());
    httpClientSpy.delete.and.returnValue();

    service = new DataService(httpClientSpy);
  });

  describe('getUsersList', () => {

    beforeEach(() => {
      service.getUsersList();
    });

    it('should send \'get\' request with provided params', () => {
      const getParams = httpClientSpy.get.calls.argsFor(0);
      const getJsonParams = [...getParams.map(param => JSON.stringify(param))];

      getJsonParams.forEach((param, index) => {
        expect(param).toEqual(getRequestParams[index]);
      });
    });
  });

  describe('createUser', () => {

    beforeEach(() => {
      service.createUser('testName', 'test@gmail.com', 'testPass');
    });

    it('should send \'post\' request with provided params', () => {
      const getParams = httpClientSpy.post.calls.argsFor(0);
      const getJsonParams = [...getParams.map(param => JSON.stringify(param))];

      getJsonParams.forEach((param, index) => {
        expect(param).toEqual(postRequestParams[index]);
      });
    });
  });

  describe('deleteUser', () => {

    beforeEach(() => {
      service.deleteUser('testId');
    });

    it('should send \'delete\' request with provided params', () => {
      const getParams = httpClientSpy.delete.calls.argsFor(0);
      const getJsonParams = [...getParams.map(param => JSON.stringify(param))];

      getJsonParams.forEach((param, index) => {
        expect(param).toEqual(deleteRequestParams[index]);
      });
    });
  });
});

