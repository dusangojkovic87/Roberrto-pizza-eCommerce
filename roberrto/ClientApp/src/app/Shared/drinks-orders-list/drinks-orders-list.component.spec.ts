import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksOrdersListComponent } from './drinks-orders-list.component';

describe('DrinksOrdersListComponent', () => {
  let component: DrinksOrdersListComponent;
  let fixture: ComponentFixture<DrinksOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
