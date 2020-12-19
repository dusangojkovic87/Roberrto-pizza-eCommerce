import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../Models/Product";


@Injectable({
  providedIn: 'root'
})
export class TopOrdersService {

  constructor(private http:HttpClient) { }


  getTopOffers(){
     return this.http.get<Product[]>("http://localhost:5000/products/top-offers");
  }
}
