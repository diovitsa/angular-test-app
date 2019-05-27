import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { setLocalItem, getLocalItem } from '../utils/LocalStorage.util.js';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiURL: string = 'https://quiet-dawn-70829.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  signIn() {
    this.httpClient.post(`${this.apiURL}/sign-in`, { password: 'admin', email: 'admin' } )
      .subscribe(res => setLocalItem('authToken', res.token));
  }

  getUsersList() {
    const token = getLocalItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.httpClient.get(`${this.apiURL}/users`, { headers });
  }

}
