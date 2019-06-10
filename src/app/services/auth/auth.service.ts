import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { setLocalItem, removeLocalItem, getLocalItem } from '../../utils/LocalStorage.util';
import { SuccessObj } from '../../interfaces/succesObj';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiURL: string = 'https://quiet-dawn-70829.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  signIn(email: string, password: string): Promise<SuccessObj> {
    return this.httpClient.post<SuccessObj>(`${this.apiURL}/sign-in`, { password, email })
      .toPromise()
      .then((data: SuccessObj) => setLocalItem('authToken', data.token));
  }

  isLoggedIn(): boolean {
    return !!getLocalItem('authToken');
  }

  logOut(): void {
    removeLocalItem('authToken');
  }

}
