import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyOrder } from 'src/app/Models/MyOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order?:MyOrder;

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  orderDetails(order?:MyOrder){
   if(order){
     this.router.navigate([`/my-orders/order-details/${order.id}`]);

   }



  }

}
