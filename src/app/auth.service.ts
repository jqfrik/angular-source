import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  userIsAuth: boolean = false;
  user = {
    login: 'admin',
    password: 'admin'
  }
  isAuthUser(userInput): boolean {
    this.userIsAuth = this.user.login === userInput.login && this.user.password === userInput.password;
    console.log('userIsAuth ' + this.userIsAuth);
    return this.userIsAuth;
  }
}
