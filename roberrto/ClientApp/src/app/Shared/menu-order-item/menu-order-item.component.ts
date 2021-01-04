import { error } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import {Product} from "../../Models/Product";

@Component({
  selector: 'app-menu-order-item',
  templateUrl: './menu-order-item.component.html',
  styleUrls: ['./menu-order-item.component.css']
})
export class MenuOrderItemComponent implements OnInit {
  serverImgUrl?:string = "/images/";
  @Input() Order?:Product;


  constructor(private router:Router,private cart:CartService,private auth:AuthService) { }

  ngOnInit(): void {
  }

  orderItemDetails(product?:Product){
    if(product?.id != null || undefined){
      this.router.navigate(["/details",product?.id]);
    }
  }

  addToCart(product?:Product){
    if(product != null)
       this.cart.addToCart(product).subscribe(saved =>{
         this.cart.dataChanged.next(true);
       },err =>{
           if(err.status === 401){
             this.router.navigate(["/login"]);
           }
           console.log(err);

       })

  }

}
