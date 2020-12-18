import { Component, OnInit } from '@angular/core';
import {Validators,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userRegistrationFailed:boolean = false;
   registerForm:any;
   registerError:string ="";




  constructor(private fb:FormBuilder,private http:AuthService,private router:Router) {

   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
       FullName:["",Validators.required],
       UserName:["",Validators.required],
       Email:["",[Validators.required,Validators.email]],
       Password:["",Validators.required]
    })
  }

  register(){
    if(this.registerForm.valid){
    this.http.register(this.registerForm.value)
        .subscribe((data:any)=>{
           if(data.succeeded  === true){
               this.router.navigate(["/login"]);
           }

        },error =>{
          this.userRegistrationFailed = true;
          console.log(error);
          if(error.status === 400 || error.status === 500){
            this.registerError = error.error;
          }

      }

    )}

  }

  }








