import { User } from '../interfaces/user';
import { Role } from '../interfaces/role';
import { EventEmitter } from '@angular/core';

export class Auth {
  private static _user: User;
  static userEmitter = new EventEmitter<User>();

  static set user(user: User) {
    this._user = user;
    this.userEmitter.emit(user);
  }
  static get user() {
    return this._user;
  }
}
