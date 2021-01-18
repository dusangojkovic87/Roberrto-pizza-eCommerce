import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { MyOrder } from 'src/app/Models/MyOrder';
import { MyOrdersService } from 'src/app/Services/my-orders.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  id?:number;
  p:number = 1;
  orderItems:any[] = [];

  constructor(private route:ActivatedRoute,private myOrders:MyOrdersService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.id = +params['id'];
      console.log(this.id);
    })

    this.myOrders.getMyOrders().pipe(
      map((data:MyOrder[]) =>{
        let filterOrders = data.filter(x => x.id == this.id);
        return filterOrders;
      })
    ).subscribe((data:any)=>{
       this.orderItems = data[0].orderItems;
       console.log(this.orderItems);
    });









  }

}
