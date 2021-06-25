import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginData: any;
  public errorMessage: String;

  constructor(private auth: AuthService, private router: Router) {

    this.loginData = {};
    this.errorMessage = '';
  }

  ngOnInit(): void {
  }

  login() {
    if (!this.loginData.email || !this.loginData.password) {

      console.log('Failed process: Incomplete data');
      this.errorMessage = 'Failed process: Incomplete data';
      this.closeAlert();
      this.loginData = {};

    } else {
      this.auth.login(this.loginData).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          if (res.role) localStorage.setItem('admin', res.role);
          this.auth.admin = !!localStorage.getItem('admin');

          this.router.navigate(['/listTasks']);

        },
        (err) => {
          console.log(err);
          this.errorMessage = err.error;
          this.loginData = {};
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
