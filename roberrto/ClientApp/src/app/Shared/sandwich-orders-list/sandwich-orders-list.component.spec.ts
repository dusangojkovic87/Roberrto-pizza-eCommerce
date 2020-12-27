import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichOrdersListComponent } from './sandwich-orders-list.component';

describe('SandwichOrdersListComponent', () => {
  let component: SandwichOrdersListComponent;
  let fixture: ComponentFixture<SandwichOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SandwichOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
