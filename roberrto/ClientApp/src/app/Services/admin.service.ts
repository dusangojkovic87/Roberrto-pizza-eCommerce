import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  options = {
    headers: new HttpHeaders({
      Accept: 'multipart/form-data',
    }),
  };

  constructor(private http: HttpClient) {}

  addNewProduct(data: any) {
    return this.http.post(
      'http://localhost:5000/admin/addProduct',
      data,
      this.options
    );
  }
}
