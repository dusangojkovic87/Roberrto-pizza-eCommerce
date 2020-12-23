import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ClientReview } from '../Models/ClientReview';


@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private http:HttpClient) { }

  getReviews(){
    return this.http.get<ClientReview[]>("http://localhost:5000/reviews/get-reviews");
  }


}
