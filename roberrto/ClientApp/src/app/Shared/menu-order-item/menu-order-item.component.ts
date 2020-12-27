import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Product} from "../../Models/Product";

@Component({
  selector: 'app-menu-order-item',
  templateUrl: './menu-order-item.component.html',
  styleUrls: ['./menu-order-item.component.css']
})
export class MenuOrderItemComponent implements OnInit {
  serverImgUrl:string = "/images/";
  @Input() Order?:Product;


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  orderItemDetails(product:Product){
    if(product.id != null || undefined){
      this.router.navigate(["/details",product.id]);
    }



  }

}
