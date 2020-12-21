import { Component, OnInit } from '@angular/core';
import {TopOrdersService} from "../../Services/top-orders.service";
import {Product} from "../../Models/Product";

@Component({
  selector: 'app-order-menu-list',
  templateUrl: './order-menu-list.component.html',
  styleUrls: ['./order-menu-list.component.css']
})
export class OrderMenuListComponent implements OnInit {

  topOrders:Product[] = [];

  constructor(private orders:TopOrdersService) { }

  ngOnInit(): void {
    this.orders.getTopOffers()
           .subscribe(data =>{
             this.topOrders = data;
           })

  }

}
