import {  Component, OnInit } from '@angular/core';
import { ClientReview } from 'src/app/Models/ClientReview';
import { ReviewsService } from 'src/app/Services/reviews.service';




@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent implements OnInit {
  clientReview:ClientReview[] = [];
  pickedDot?:number = 0;

  constructor(private reviews:ReviewsService) { }


  ngOnInit(): void {
    this.reviews.getReviews()
    .subscribe(data =>{
      this.clientReview = data;
    })

  }

 pickReview(index:number){
  this.pickedDot = index;
 }

}

