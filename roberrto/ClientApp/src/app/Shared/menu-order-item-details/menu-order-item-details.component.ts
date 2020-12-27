import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-menu-order-item-details',
  templateUrl: './menu-order-item-details.component.html',
  styleUrls: ['./menu-order-item-details.component.css']
})
export class MenuOrderItemDetailsComponent implements OnInit {
  orderDetails?:Product;
  id?:number;
  serverImgPath:string = "/images/"

  constructor(private orders:OrdersService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((p:Params)=>{
       this.id = +p.params.id;
    })
    this.orders.getOrders().pipe(
      map(orderArr =>{
        let filteredOrder = orderArr.find(o=>o.id === this.id );
        return filteredOrder;
      })
    ).subscribe(data =>{
      this.orderDetails = data;
    })

  }

}
