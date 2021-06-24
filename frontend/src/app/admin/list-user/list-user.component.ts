import { Component, OnInit } from '@angular/core';
import { AdminService } from "../../services/admin.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public userData: any;
  public errorMessage:String; 

  constructor() {
    this.errorMessage ='';
   }

  ngOnInit(): void {
  }

}
