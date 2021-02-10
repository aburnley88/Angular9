import { TestBed } from '@angular/core/testing';

import { PeoplearrayService } from './peoplearray.service';

describe('PeoplearrayService', () => {
  let service: PeoplearrayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoplearrayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
