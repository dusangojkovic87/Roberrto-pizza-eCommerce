import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Product } from 'src/app/Models/Product';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-menu-order-item-details',
  templateUrl: './menu-order-item-details.component.html',
  styleUrls: ['./menu-order-item-details.component.css'],
})
export class MenuOrderItemDetailsComponent implements OnInit {
  orderDetails: Product[] = [];
  id?: number;
  orderImg?: string = '';

  constructor(private orders: OrdersService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: Params) => {
      this.id = p.params.id;
    });
    if (this.id)
      this.orders.getOrderDetail(this.id).subscribe((data: any) => {
        this.orderDetails = data;
      });
  }
}
