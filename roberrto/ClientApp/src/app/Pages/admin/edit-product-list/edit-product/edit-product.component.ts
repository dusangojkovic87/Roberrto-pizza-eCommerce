import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  @Input() product?: Product;
  @Output() productRemoved = new EventEmitter<boolean>();
  constructor(private admin: AdminService, private router: Router) {}

  ngOnInit(): void {}

  editProduct(product?: Product) {
    if (product) {
      this.router.navigate([`/admin/edit/${product.id}`]);
    }
  }

  removeProduct(product?: Product) {
    let c = confirm('delete product!');
    if (c === true) {
      if (product) {
        this.admin.removeProduct(product).subscribe(
          (data) => {
            this.productRemoved.emit(true);
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
