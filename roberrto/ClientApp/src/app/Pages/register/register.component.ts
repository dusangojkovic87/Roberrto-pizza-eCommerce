import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerForm:any;


  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
       fullname:["",Validators.required],
       username:["",Validators.required],
       email:["",[Validators.required,Validators.email]],
       password:["",Validators.required]
    })
  }

  register(){
    console.log(this.registerForm.value);

  }

}
