import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-desert-orders-list',
  templateUrl: './desert-orders-list.component.html',
  styleUrls: ['./desert-orders-list.component.css']
})
export class DesertOrdersListComponent implements OnInit {
  deserts:Product [] = [];

  constructor(private orders:OrdersService) { }

  ngOnInit(): void {
    this.orders.getOrders().pipe(
       map(desertArr =>{
         let filterDesert = desertArr.filter(o =>o.category.toLowerCase() === "desert");
         return filterDesert;
       })
    ).subscribe(data =>{
      this.deserts = data;
    })

  }

}
