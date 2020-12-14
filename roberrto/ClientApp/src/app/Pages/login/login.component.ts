import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;
  /* requiredFields:string; */

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
       email:["",[Validators.required,Validators.email]],
       password:["",Validators.required]
    })
  }

  login(){
   console.log(this.loginForm);
  }
}
