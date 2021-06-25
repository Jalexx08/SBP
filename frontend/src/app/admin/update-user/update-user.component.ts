import { Component, OnInit } from '@angular/core';
import { AdminService } from "src/app/services/admin.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  userData: any;
  roleData: any;
  successMessage: String;
  errorMessage: String;

  constructor(private router: Router, private admin: AdminService) {
    this.userData = {};
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

  updateUser() {
    if (!this.userData.name || !this.userData.email || !this.userData.password || !this.userData.roleId) {
      this.errorMessage = 'Incomplete Data.';
      this.closeAlert();
    } else {
      this.admin.updateUser(this.userData).subscribe(
        (res: any) => {
          console.log(res);
          this.userData = {};
          this.router.navigate(['/listUsers']);
        },
        (err) => {
          this.errorMessage = err.error;
          this.userData = {};
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
