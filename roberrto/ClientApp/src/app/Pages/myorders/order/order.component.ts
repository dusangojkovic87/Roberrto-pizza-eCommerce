import { Component, Input, OnInit } from '@angular/core';
import { MyOrder } from 'src/app/Models/MyOrder';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order?:MyOrder;

  constructor() { }

  ngOnInit(): void {
  }

}
