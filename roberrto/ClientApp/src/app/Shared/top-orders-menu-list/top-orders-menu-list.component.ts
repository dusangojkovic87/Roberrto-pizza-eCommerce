import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { TopOrdersService } from 'src/app/Services/top-orders.service';

@Component({
  selector: 'app-top-orders-menu-list',
  templateUrl: './top-orders-menu-list.component.html',
  styleUrls: ['./top-orders-menu-list.component.css']
})
export class TopOrdersMenuListComponent implements OnInit {

  topOrders:Product[] = [];

  constructor(private orders:TopOrdersService) { }

  ngOnInit(): void {
    this.orders.getTopOffers()
           .subscribe(data =>{
             this.topOrders = data;
           })

  }

}
