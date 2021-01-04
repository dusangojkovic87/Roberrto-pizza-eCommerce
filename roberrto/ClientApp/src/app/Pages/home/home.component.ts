import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  addToCartModalState: boolean = false;

  constructor(private cart: CartService) {}

  ngOnInit(): void {
    this.cart.addToCartModalState$.subscribe((changed) => {
      this.addToCartModalState = changed;
    });
  }

  closeAddToCartModal($event: boolean) {
    if ($event) this.addToCartModalState = false;
  }

  ngOnDestroy() {
    this.cart.addToCartModalState.next(false);
  }
}
