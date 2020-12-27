import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-sandwich-orders-list',
  templateUrl: './sandwich-orders-list.component.html',
  styleUrls: ['./sandwich-orders-list.component.css']
})
export class SandwichOrdersListComponent implements OnInit {
  sandwiches:Product [] = [];

  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.orders.getOrders().pipe(
      map(ordersArr =>{
        let filteredSadwiches = ordersArr.filter(o=>o.category.toLowerCase() === "sandwich");
        return filteredSadwiches;
      })
    ).subscribe(data =>{
        this.sandwiches = data;
    })
  }

}
