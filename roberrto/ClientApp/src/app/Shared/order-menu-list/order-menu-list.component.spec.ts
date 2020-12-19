import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderMenuListComponent } from './order-menu-list.component';

describe('OrderMenuListComponent', () => {
  let component: OrderMenuListComponent;
  let fixture: ComponentFixture<OrderMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
