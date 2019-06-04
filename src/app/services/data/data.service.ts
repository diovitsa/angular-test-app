import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { setLocalItem, getLocalItem } from '../../utils/LocalStorage.util';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiURL: string = 'https://quiet-dawn-70829.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  getUsersList() {
    const token = getLocalItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.httpClient.get(`${this.apiURL}/users`, { headers })
      .toPromise();
  }

  createUser(userName: string, userEmail: string, userPassword: string): Promise<any> {
    const token = getLocalItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.httpClient.post(`${this.apiURL}/users`, { password: userPassword, email: userEmail, name: userName }, { headers })
      .toPromise();
  }

  deleteUser(id: string) {
    const token = getLocalItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.httpClient.delete(`${this.apiURL}/users/${id}`, { headers });
  }
}
