import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register-role',
  templateUrl: './register-role.component.html',
  styleUrls: ['./register-role.component.css']
})
export class RegisterRoleComponent implements OnInit {
  roleData: any;
  successMessage: String;
  errorMessage: String;

  constructor(private router: Router, private admin: AdminService) { 
    this.roleData = {};
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  registerRole() {
    if(!this.roleData.name || !this.roleData.description) {
      this.errorMessage = 'Incomplete Data.';
      this.closeAlert();
    } else {
      this.admin.registerRole(this.roleData).subscribe(
        (res) => {
          console.log(res);
          this.roleData = {};
          this.router.navigate(['/listRole']);
        },
        (err) => {
          this.errorMessage = err.error;
          this.roleData = {};
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
