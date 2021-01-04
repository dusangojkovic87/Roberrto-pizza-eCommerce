import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-modal',
  templateUrl: './add-to-cart-modal.component.html',
  styleUrls: ['./add-to-cart-modal.component.css'],
})
export class AddToCartModalComponent implements OnInit {
  @Output() closeModalState = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.closeModalState.emit(true);
  }
}
