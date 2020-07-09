import { TestBed, inject } from '@angular/core/testing';

import { WsJeeService } from './ws-jee.service';

describe('WsJeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WsJeeService]
    });
  });

  it('should be created', inject([WsJeeService], (service: WsJeeService) => {
    expect(service).toBeTruthy();
  }));
});
