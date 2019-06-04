import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setLocalItem, removeLocalItem, getLocalItem } from '../../utils/LocalStorage.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = 'https://quiet-dawn-70829.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  signIn(email: string, password: string): Promise<any> {
    return this.httpClient.post(`${this.apiURL}/sign-in`, { password, email })
      .toPromise()
      .then((data: any) => setLocalItem('authToken', data.token));
  }

  isLoggedIn(): boolean {
    return !!getLocalItem('authToken');
  }

  logOut(): void {
    removeLocalItem('authToken');
  }

}