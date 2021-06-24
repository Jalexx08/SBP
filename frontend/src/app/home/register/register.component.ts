import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerData: any;
  public successMessage: String;
  public errorMessage: String;

  constructor(private auth: AuthService, private router: Router) {
    this.registerData = {
      name: '',
      email: '',
      password: '',
    };
    this.successMessage = '';
    this.errorMessage = '';
  }

  ngOnInit(): void { }

  registerUser() {
    if (
      !this.registerData.name ||
      !this.registerData.email ||
      !this.registerData.password
    ) {
      console.log('Failed process: Incomplete data');
      this.errorMessage = 'Failed process: Incomplete data';
      this.closeAlert();
      this.registerData = {};

    } else {
      this.auth.registerUser(this.registerData).subscribe(
        (res: any) => {
          console.log(res);
          localStorage.setItem('token', res.jwtToken);
          this.registerData = {};
          this.router.navigate(['/saveTask']);
          // this.successMessage = 'Register user: succesful';
          // this.closeAlert();

        },
        (err) => {
          console.log(err);
          this.errorMessage = err.error;
          this.registerData = {};
          this.closeAlert();

        }
      );
    }
  }

  closeAlert() {
    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000);
  }

  closeX() {
    this.successMessage = '';
    this.errorMessage = '';
  }

}
