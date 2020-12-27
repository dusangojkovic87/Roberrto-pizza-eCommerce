import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderItemDetailsComponent } from './menu-order-item-details.component';

describe('MenuOrderItemDetailsComponent', () => {
  let component: MenuOrderItemDetailsComponent;
  let fixture: ComponentFixture<MenuOrderItemDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrderItemDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
