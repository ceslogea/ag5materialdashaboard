import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { User } from '../Model/user';

@Injectable()
export class UsersService {

  // private url = 'http://jsonplaceholder.typicode.com/users';
  private url = 'http://fake-backend/users';

  constructor(private http: Http) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.url)
      .map(res => res.json() as User[]);
  }

  getUser(id): Observable<User> {
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json() as User);
  }

  addUser(user): Observable<User> {
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res.json());
  }

  updateUser(user) {
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id) {
    return this.url + '/' + id;
  }


}
