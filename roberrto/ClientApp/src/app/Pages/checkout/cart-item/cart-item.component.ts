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

  constructor(private cart: CartService) {}

  ngOnInit(): void {}

  increaseQuantity(cartItem?: Product) {
    if (cartItem)
      this.cart.increaseQuantity(cartItem).subscribe((data: any) => {
        if (data.status === true) {
          this.cart.dataChanged.next(true);
        }
      });
  }

  decreaseQuantity(cartItem?: Product) {
    if (cartItem)
      this.cart.decreaseQuantity(cartItem).subscribe((data: any) => {
        if (data.status === true) {
          this.cart.dataChanged.next(true);
        }
      });
  }

  removeCartItem(cartItem?: Product) {
    if (cartItem)
      this.cart.removeCartItem(cartItem).subscribe(
        (data: any) => {
          if (data.status === true) {
            this.cart.dataChanged.next(true);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  calculatePrice(cartItem?:Product){
    if(cartItem){
       return cartItem.price * cartItem.quantity;
    }else{
      return "";
    }
  }
}
