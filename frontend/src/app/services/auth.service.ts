import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private env: String;
  public admin: boolean;

  constructor(private http: HttpClient, private router: Router) {
    this.env = environment.APP_URL;
    this.admin = false;
  }
  registerUser(user: any) {
    return this.http.post(this.env + 'user/registerUser', user);
  }
  login(user: any) {
    return this.http.post(this.env + 'auth/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this.admin = false;
    this.router.navigate(['/login']);
  }
}
