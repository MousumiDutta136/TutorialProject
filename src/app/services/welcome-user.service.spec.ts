import { TestBed } from '@angular/core/testing';

import { WelcomeUserService } from './welcome-user.service';

describe('WelcomeUserService', () => {
  let service: WelcomeUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WelcomeUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
