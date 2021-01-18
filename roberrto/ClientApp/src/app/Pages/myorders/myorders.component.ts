import { Component, OnInit } from '@angular/core';
import { MyOrder } from 'src/app/Models/MyOrder';
import { MyOrdersService } from 'src/app/Services/my-orders.service';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {
  myOrdersList:MyOrder[] = [];
  p:number = 1;

  constructor(private myorders:MyOrdersService ) { }

  ngOnInit(): void {
    this.myorders.getMyOrders().subscribe(data =>{
      this.myOrdersList = data;
    },err =>{
      console.log(err);
    });
  }

}
