import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  @Input() product?: Product;
  constructor(private admin: AdminService) {}

  ngOnInit(): void {}

  editProduct(event: Event) {
    console.log('radi');
  }

  removeProduct(product?: Product) {
    let c = confirm('delete product!');
    if (c === true) {
      if (product) {
        this.admin.removeProduct(product).subscribe(
          (data) => {
            console.log(data);
            this.admin.dataChanged.next(true);
          },
          (err) => {
            console.log(err);
          }
        );
      }
    }
  }
}
