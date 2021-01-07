import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css'],
})
export class CartItemListComponent implements OnInit {
  CartData?: Product[] = [];
  showSentOrderNotification: boolean = false;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.loadCartItems();
    this.cart.dataChanged$.subscribe((changed) => {
      if (changed) this.loadCartItems();
    });
  }

  loadCartItems() {
    this.cart.getCartData().subscribe((data) => {
      this.CartData = data;
    });
  }

  showOrderForm() {
    if (this.CartData)
      if (this.CartData?.length > 0) {
        return true;
      } else {
        return false;
      }

    return false;
  }

  orderSentNotification($event: Boolean) {
    if ($event) {
      this.showSentOrderNotification = true;
    }
  }
}
