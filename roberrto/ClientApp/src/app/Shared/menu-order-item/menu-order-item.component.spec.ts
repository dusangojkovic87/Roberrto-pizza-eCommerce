import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrderItemComponent } from './menu-order-item.component';

describe('MenuOrderItemComponent', () => {
  let component: MenuOrderItemComponent;
  let fixture: ComponentFixture<MenuOrderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
