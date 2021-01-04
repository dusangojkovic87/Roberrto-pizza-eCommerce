import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public dataChanged = new BehaviorSubject<boolean>(false);
  public dataChanged$:Observable<boolean>;

   constructor(private http:HttpClient) {
     this.dataChanged$ = this.dataChanged.asObservable();
   }



   addToCart(product:Product){
     return this.http.post<Product>("http://localhost:5000/cart/add",product);
   }

   getCartData(){
     return this.http.get<Product[]>("http://localhost:5000/cart/get-cart-data");
   }

   removeCartItem(product:Product){
     return this.http.delete(`http://localhost:5000/cart/remove/${product.id}`);
   }



   increaseQuantity(product:Product){
    return this.http.post<Product>("http://localhost:5000/cart/increase-quantity",product);

   }

   decreaseQuantity(product:Product){
    return this.http.post<Product>("http://localhost:5000/cart/decrease-quantity",product);

   }

   totalCartItemsCount(){
    return this.http.get("http://localhost:5000/cart/count");

   }

}




