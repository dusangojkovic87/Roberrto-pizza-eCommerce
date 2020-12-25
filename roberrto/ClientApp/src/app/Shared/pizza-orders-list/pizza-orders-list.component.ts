import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders.service';
import {map} from "rxjs/operators";
import { Product } from 'src/app/Models/Product';


@Component({
  selector: 'app-pizza-orders-list',
  templateUrl: './pizza-orders-list.component.html',
  styleUrls: ['./pizza-orders-list.component.css']
})
export class PizzaOrdersListComponent implements OnInit {
  pizzas:Product[] = [];

  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.showPizzaOrders();

  }

  showPizzaOrders(){
    this.orders.getOrders()
    .pipe(map(productArr =>{
      let filteredPizza = productArr.filter(o => o.category.toLowerCase() === "pizza");
      return filteredPizza;
    }))
      .subscribe(data =>{
        this.pizzas = data;
    })

  }

}
