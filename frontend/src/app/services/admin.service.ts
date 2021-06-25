import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private env: String;

  constructor(private http: HttpClient, private router: Router) {
    this.env = environment.APP_URL;
  }

  registerUser(user: any) {
    return this.http.post(this.env + "user/registerAdmin", user)
  }

  listUsers(){
    return this.http.get(this.env + "user/listUsers");
  }

  listRole() {
    return this.http.get(this.env + "role/listRole");
  }
}
