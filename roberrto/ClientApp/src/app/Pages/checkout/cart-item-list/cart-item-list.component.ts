import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart-item-list',
  templateUrl: './cart-item-list.component.html',
  styleUrls: ['./cart-item-list.component.css']
})
export class CartItemListComponent implements OnInit {
  CartData?:Product[] = [];

  constructor(private cart:CartService) { }

  ngOnInit(): void {
     this.loadCartItems();
     this.cart.dataChanged$.subscribe(changed =>{
         if(changed)
          this.loadCartItems();
     })
  }

  loadCartItems(){
    this.cart.getCartData().subscribe(data =>{
      this.CartData = data;
   })

  }

}
