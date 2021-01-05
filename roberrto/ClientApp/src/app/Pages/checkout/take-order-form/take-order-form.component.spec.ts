import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOrderFormComponent } from './take-order-form.component';

describe('TakeOrderFormComponent', () => {
  let component: TakeOrderFormComponent;
  let fixture: ComponentFixture<TakeOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakeOrderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
