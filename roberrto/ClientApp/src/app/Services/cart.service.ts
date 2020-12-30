import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   constructor(private http:HttpClient) { }



   addToCart(product:Product){
     return this.http.post<Product>("http://localhost:5000/cart/add",product);
   }

}




