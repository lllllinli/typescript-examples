import { TestBed, inject } from '@angular/core/testing';

import { TestHttpClientService } from './test-http-client.service';

describe('TestHttpClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestHttpClientService]
    });
  });

  it('should be created', inject([TestHttpClientService], (service: TestHttpClientService) => {
    expect(service).toBeTruthy();
  }));
});
