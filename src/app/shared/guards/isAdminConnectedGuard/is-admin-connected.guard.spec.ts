import { TestBed } from '@angular/core/testing';

import { IsAdminConnectedGuard } from './is-admin-connected.guard';

describe('IsAdminConnectedGuard', () => {
  let guard: IsAdminConnectedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminConnectedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
