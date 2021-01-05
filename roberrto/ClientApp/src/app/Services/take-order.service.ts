import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Models/Order';

@Injectable({
  providedIn: 'root',
})
export class TakeOrderService {
  constructor(private http: HttpClient) {}

  takeOrder(order: Order) {
    return this.http.post('http://localhost:5000/order/take-order', order);
  }
}
