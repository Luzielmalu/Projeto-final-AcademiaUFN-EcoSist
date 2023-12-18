import { TestBed } from '@angular/core/testing';

import { AgendarService } from './agendar.service';

describe('AgendarService', () => {
  let service: AgendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
