import { TestBed, inject } from '@angular/core/testing';

import { Counter.ServiceService } from './counter.service.service';

describe('Counter.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Counter.ServiceService]
    });
  });

  it('should be created', inject([Counter.ServiceService], (service: Counter.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
