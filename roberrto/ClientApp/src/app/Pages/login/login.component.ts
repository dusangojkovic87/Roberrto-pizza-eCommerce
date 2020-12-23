import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any;





  constructor(private fb:FormBuilder,private http:AuthService,private router:Router ) {

   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
       email:["",[Validators.required,Validators.email]],
       password:["",Validators.required]
    })
  }

  login(){
    this.http.login(this.loginForm.value)
        .subscribe((userData:User) =>{
          console.log(userData);
           localStorage.setItem("token",userData.token);
           this.router.navigate(["/orders"]);

        })

  }
}
