import { TestBed } from '@angular/core/testing';

import { CartProdsService } from './cart-prods.service';

describe('CartProdsService', () => {
  let service: CartProdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartProdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
