import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TakeOrderService } from 'src/app/Services/take-order.service';

@Component({
  selector: 'app-take-order-form',
  templateUrl: './take-order-form.component.html',
  styleUrls: ['./take-order-form.component.css'],
})
export class TakeOrderFormComponent implements OnInit {
  TakeOrderForm: any;

  constructor(private fb: FormBuilder, private postOrder: TakeOrderService) {}

  ngOnInit(): void {
    this.TakeOrderForm = this.fb.group({
      adress: ['', Validators.required],
    });
  }

  submitOrder() {
    console.log(this.TakeOrderForm.value);

    this.postOrder.takeOrder(this.TakeOrderForm.value).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
