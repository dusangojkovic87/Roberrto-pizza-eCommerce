import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { error } from 'protractor';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-review-form',
  templateUrl: './add-review-form.component.html',
  styleUrls: ['./add-review-form.component.css']
})
export class AddReviewFormComponent implements OnInit {
  addReviewForm:any;
  showSuccessMessage:boolean = false;

  constructor(private fb:FormBuilder,private admin:AdminService) { }

  ngOnInit(): void {
    this.addReviewForm = this.fb.group({
      ClientFullName:["",Validators.required],
      Text:["",Validators.required]

    });
  }

  addReview(){
    this.admin.addReview(this.addReviewForm.value).subscribe(data =>{
      console.log(data);
      this.showMessage();
      this.addReviewForm.reset();
    },err =>{
      if(err instanceof HttpErrorResponse){
        alert(err.error.title);
      }
      console.log(err);

    })
  }

  showMessage(){
    this.showSuccessMessage = true;
    setTimeout(()=>{
       this.showSuccessMessage = false;
    },3000)
  }

}
