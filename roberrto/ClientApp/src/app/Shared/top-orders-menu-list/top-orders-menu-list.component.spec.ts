import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOrdersMenuListComponent } from './top-orders-menu-list.component';

describe('TopOrdersMenuListComponent', () => {
  let component: TopOrdersMenuListComponent;
  let fixture: ComponentFixture<TopOrdersMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOrdersMenuListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOrdersMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
