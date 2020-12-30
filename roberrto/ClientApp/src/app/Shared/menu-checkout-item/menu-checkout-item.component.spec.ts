import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCheckoutItemComponent } from './menu-checkout-item.component';

describe('MenuCheckoutItemComponent', () => {
  let component: MenuCheckoutItemComponent;
  let fixture: ComponentFixture<MenuCheckoutItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCheckoutItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuCheckoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
