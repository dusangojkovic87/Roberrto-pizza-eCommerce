import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem?:Product;
  serverImgPath:string = "/images/";

  constructor(private cart:CartService) { }

  ngOnInit(): void {
  }

  increaseQuantity(cartItem:Product){
      console.log(cartItem);

  }

  decreaseQuantity(cartItem:Product){
    console.log(cartItem);

  }

  removeCartItem(cartItem?:Product){
     if(cartItem)
        this.cart.removeCartItem(cartItem).subscribe(data =>{
          console.log(data);

        },err=>{
          console.log(err);

        })
}
}
