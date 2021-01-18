import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyOrder } from '../Models/MyOrder';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {

  constructor(private http:HttpClient) { }

  getMyOrders():Observable<MyOrder[]>{
    return this.http.get<MyOrder[]>("http://localhost:5000/myorders/get-orders");
  }

  getOrderDetails(id:number){
    return this.http.get(`http://localhost:5000/myorders/order-details/${id}`);
  }




}
