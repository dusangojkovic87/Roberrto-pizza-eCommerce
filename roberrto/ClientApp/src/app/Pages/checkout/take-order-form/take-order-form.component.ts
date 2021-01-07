import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/Services/cart.service';
import { TakeOrderService } from 'src/app/Services/take-order.service';

@Component({
  selector: 'app-take-order-form',
  templateUrl: './take-order-form.component.html',
  styleUrls: ['./take-order-form.component.css'],
})
export class TakeOrderFormComponent implements OnInit {
  TakeOrderForm: any;
  @Output() orderSent = new EventEmitter<boolean>(false);

  constructor(
    private fb: FormBuilder,
    private postOrder: TakeOrderService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.TakeOrderForm = this.fb.group({
      adress: ['', Validators.required],
    });
  }

  submitOrder() {
    console.log(this.TakeOrderForm.value);
    this.postOrder.takeOrder(this.TakeOrderForm.value).subscribe(
      (data: any) => {
        if (data.success === true) {
          this.orderSent.emit(true);
          this.cart.dataChanged.next(true);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
