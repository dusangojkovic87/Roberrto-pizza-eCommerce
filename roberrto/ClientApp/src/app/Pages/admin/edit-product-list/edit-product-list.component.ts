import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-product-list',
  templateUrl: './edit-product-list.component.html',
  styleUrls: ['./edit-product-list.component.css'],
})
export class EditProductListComponent implements OnInit {
  ProductList: Product[] = [];

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.admin.dataChanged$.subscribe((changed) => {
      if (changed) {
        this.loadProducts();
      }
    });
  }

  loadProducts() {
    this.admin.getProducts().subscribe((data: Product[]) => {
      this.ProductList = data;
    });
  }
}
