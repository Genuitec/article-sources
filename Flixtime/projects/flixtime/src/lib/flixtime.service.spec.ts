import { TestBed } from '@angular/core/testing';

import { FlixtimeService } from './flixtime.service';

describe('FlixtimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlixtimeService = TestBed.get(FlixtimeService);
    expect(service).toBeTruthy();
  });
});
