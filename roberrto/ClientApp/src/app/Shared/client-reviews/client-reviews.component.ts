import {  Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/Services/reviews.service';




@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent implements OnInit {
  clientReview?:any;
  clientCounter?:number;
  pickedDot?:number;

  constructor(private reviews:ReviewsService) { }




  ngOnInit(): void {
    this.reviews.getReviews()
    .subscribe(data =>{
      console.log(data);

      this.clientReview = data;
      this.clientCounter = this.clientReview.length -1;
      this.pickedDot = this.clientCounter;

    })
  }

 pickReview(index:number){
  this.clientCounter = index;
  this.pickedDot = index;
 }
}

