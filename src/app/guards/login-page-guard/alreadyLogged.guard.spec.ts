import { TestBed, async, inject } from '@angular/core/testing';

import { AlreadyLoggedGuard } from './alreadyLogged.guard';

describe('AlreadyLoggedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlreadyLoggedGuard]
    });
  });

  it('should ...', inject([AlreadyLoggedGuard], (guard: AlreadyLoggedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
