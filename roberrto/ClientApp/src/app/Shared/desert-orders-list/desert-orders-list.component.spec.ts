import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesertOrdersListComponent } from './desert-orders-list.component';

describe('DesertOrdersListComponent', () => {
  let component: DesertOrdersListComponent;
  let fixture: ComponentFixture<DesertOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesertOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesertOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
