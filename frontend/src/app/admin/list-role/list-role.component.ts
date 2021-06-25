import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css']
})
export class ListRoleComponent implements OnInit {
  public roleData: any;
  public errorMessage:String;

  constructor(private admin: AdminService, private route: Router) { 
    this.errorMessage= '';
  }

  ngOnInit(): void {
    this.admin.listRole().subscribe(
      (res:any)=>{
        // console.log(res);
        this.roleData = res.role;
      },
      (err)=>{
        this.errorMessage = err.error;

      }

    )
  }

  deactivate(){}

  closeAlert(){
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
  closeX(){
      this.errorMessage = '';
  }
}
