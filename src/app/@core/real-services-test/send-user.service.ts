import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class SendUserService {
  private userSubject = new Subject<any>();

  constructor() { }
  sendUserInfo(user: User) {
    this.userSubject.next({
      user: user,
    });
  }
  getUserInfo(): Observable<any> {
    return this.userSubject.asObservable();
  }
  clearData() {
    this.userSubject.next( {
      user: '',
    });
  }
}
