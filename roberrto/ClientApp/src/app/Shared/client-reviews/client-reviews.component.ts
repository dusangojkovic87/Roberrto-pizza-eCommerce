import {  Component, OnInit } from '@angular/core';
import { ReviewsService } from 'src/app/Services/reviews.service';




@Component({
  selector: 'app-client-reviews',
  templateUrl: './client-reviews.component.html',
  styleUrls: ['./client-reviews.component.css']
})
export class ClientReviewsComponent implements OnInit {
  clientReview?:any;
  pickedDot?:number = 0;

  constructor(private reviews:ReviewsService) { }


  ngOnInit(): void {
    this.reviews.getReviews()
    .subscribe(data =>{
      this.clientReview = data;
    })

  }

 pickReview(index:any){
  this.pickedDot = index;
 }

}

