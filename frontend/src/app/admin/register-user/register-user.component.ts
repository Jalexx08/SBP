import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'] 
})
export class RegisterUserComponent implements OnInit {
  registerData: any;
  roleData: any;
  successMessage: String;
  errorMessage: String;

  constructor(private router: Router, private admin: AdminService) {
    this.registerData = {};
    this.roleData = {};
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.admin.listRole().subscribe(
      (res: any) => {
        console.log(res);
        this.roleData = res.role;
        console.log(this.roleData);
      },
      (err) => {
        console.log(err.error);

        this.errorMessage = err.error;
      }
    )
  }

  registerUser() {
    if (!this.registerData.name || !this.registerData.email || !this.registerData.password || !this.registerData.roleId) {
      this.errorMessage = 'Incomplete Data.';
      this.closeAlert();
    } else {
      this.admin.registerUser(this.registerData).subscribe(
        (res: any) => {
          console.log(res);
          this.registerData = {};
          this.router.navigate(['/listUsers']);
        },
        (err) => {
          this.errorMessage = err.error;
          this.registerData = {};
          this.closeAlert();
        }
      )
    }
  }

  closeAlert() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  closeX() {
    this.errorMessage = '';
  }

}
