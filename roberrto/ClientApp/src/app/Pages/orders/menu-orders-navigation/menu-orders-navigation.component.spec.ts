import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuOrdersNavigationComponent } from './menu-orders-navigation.component';

describe('MenuOrdersNavigationComponent', () => {
  let component: MenuOrdersNavigationComponent;
  let fixture: ComponentFixture<MenuOrdersNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrdersNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrdersNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
