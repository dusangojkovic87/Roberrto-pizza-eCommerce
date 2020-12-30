import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-menu-checkout-item',
  templateUrl: './menu-checkout-item.component.html',
  styleUrls: ['./menu-checkout-item.component.css']
})
export class MenuCheckoutItemComponent implements OnInit {
  serverImgUrl?:string = "/images/";
  @Input() Order?:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
