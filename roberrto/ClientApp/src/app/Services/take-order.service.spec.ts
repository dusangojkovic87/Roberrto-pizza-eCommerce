import { TestBed } from '@angular/core/testing';

import { TakeOrderService } from './take-order.service';

describe('TakeOrderService', () => {
  let service: TakeOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakeOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
