import { TestBed } from '@angular/core/testing';

import { YerbaDataService } from './yerba-data.service';

describe('YerbaDataService', () => {
  let service: YerbaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YerbaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
