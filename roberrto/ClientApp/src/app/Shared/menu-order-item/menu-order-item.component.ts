import { Component, Input, OnInit } from '@angular/core';
import {Product} from "../../Models/Product";

@Component({
  selector: 'app-menu-order-item',
  templateUrl: './menu-order-item.component.html',
  styleUrls: ['./menu-order-item.component.css']
})
export class MenuOrderItemComponent implements OnInit {
  serverImgUrl:string = "/images/";
  @Input() topOrder?:Product;


  constructor() { }

  ngOnInit(): void {
  }

}
