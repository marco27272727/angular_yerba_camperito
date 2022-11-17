import { TestBed } from '@angular/core/testing';

import { YerbaCartService } from './yerba-cart.service';

describe('YerbaCartService', () => {
  let service: YerbaCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YerbaCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
