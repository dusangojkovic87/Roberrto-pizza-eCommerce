import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem?: Product;
  serverImgPath: string = '/images/';
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  increaseQuantity(cartItem?: Product) {
    if (cartItem)
      this.cart.increaseQuantity(cartItem).subscribe((data: any) => {
        if (data.status === true) {
          this.reloadData.emit(true);
        }
      });
  }

  decreaseQuantity(cartItem?: Product) {
    if (cartItem)
      this.cart.decreaseQuantity(cartItem).subscribe((data: any) => {
        if (data.status === true) {
          this.reloadData.emit(true);
        }
      });
  }

  removeCartItem(cartItem?: Product) {
    if (cartItem)
      this.cart.removeCartItem(cartItem).subscribe(
        (data: any) => {
          if (data.status === true) {
            this.reloadData.emit(true);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
