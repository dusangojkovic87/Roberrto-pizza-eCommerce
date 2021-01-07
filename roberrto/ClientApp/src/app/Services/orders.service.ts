import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:5000/products/orders');
  }

  getOrderDetail(id: number): Observable<Product> {
    return this.http.get<Product>(
      `http://localhost:5000/products/order-detail/${id}`
    );
  }
}
