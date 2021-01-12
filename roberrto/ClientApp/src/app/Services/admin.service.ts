import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Models/Product';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  options = {
    headers: new HttpHeaders({
      Accept: 'multipart/form-data',
    }),
  };

  public dataChanged = new BehaviorSubject<boolean>(false);
  public dataChanged$: Observable<boolean>;

  constructor(private http: HttpClient) {
    this.dataChanged$ = this.dataChanged.asObservable();
  }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:5000/admin/get-products');
  }

  removeProduct(product: Product) {
    return this.http.delete(
      `http://localhost:5000/admin/remove-product/${product.id}`
    );
  }

  addNewProduct(data: any) {
    return this.http.post(
      'http://localhost:5000/admin/addProduct',
      data,
      this.options
    );
  }
}
