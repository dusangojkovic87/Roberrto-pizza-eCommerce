import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOrdersListComponent } from './pizza-orders-list.component';

describe('PizzaOrdersListComponent', () => {
  let component: PizzaOrdersListComponent;
  let fixture: ComponentFixture<PizzaOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
