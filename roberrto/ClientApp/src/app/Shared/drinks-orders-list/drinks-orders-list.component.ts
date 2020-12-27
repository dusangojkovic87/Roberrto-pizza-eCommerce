import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-drinks-orders-list',
  templateUrl: './drinks-orders-list.component.html',
  styleUrls: ['./drinks-orders-list.component.css']
})
export class DrinksOrdersListComponent implements OnInit {
  drinks:Product [] = [];

  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.orders.getOrders().pipe(
      map(drinksArr =>{
        let filteredDrinks = drinksArr.filter(o => o.category.toLowerCase() === "drink");
        return filteredDrinks;
      })
    ).subscribe(data =>{
      this.drinks = data;
    })
  }

}
