import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms";


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  subscribedEmail?:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.subscribedEmail = this.fb.group({
       email:["",[Validators.required,Validators.email]]
    })
  }

  sendEmail(e:Event){
   e.preventDefault();
   console.log(this.subscribedEmail);
   this.subscribedEmail?.reset();
  }

}
