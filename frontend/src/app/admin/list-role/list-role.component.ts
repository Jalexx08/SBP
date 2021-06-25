import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  public roleData: any;
  public errorMessage:String; 

  constructor(private admin: AdminService, private route: Router, public auth: AuthService) {
    this.errorMessage ='';
    this.roleData = {};
   }

  ngOnInit(): void {
    this.admin.listRole().subscribe(
      (res:any)=>{
        console.log(res);
        this.roleData = res.role; 
        console.log(this.roleData);
      }, 
      (err) =>{
        this.errorMessage = err.error;
      }
    ) 
  }

  closeAlert(){
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  deactivate(){

  }
}
