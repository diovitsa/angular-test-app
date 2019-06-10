import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getLocalItem } from '../../utils/LocalStorage.util';
import { Observable } from 'rxjs';
// import { User } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  apiURL: string = 'https://quiet-dawn-70829.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  getUsersList(): Promise<any> {
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

  deleteUser(id: string): Observable<any> {
    const token = getLocalItem('authToken');
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.httpClient.delete(`${this.apiURL}/users/${id}`, { headers });
  }
}
