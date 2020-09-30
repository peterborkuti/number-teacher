import { TestBed } from '@angular/core/testing';

import { ProbModifierService } from './prob-modifier.service';

describe('ProbModifierService', () => {
  let service: ProbModifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbModifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('increases probability when bad', () => {
    expect(service.bad(0.5)).toBeGreaterThan(0.5);
  })

  it('decreases probability when good', () => {
    expect(service.good(0.5)).toBeLessThan(0.5);
    expect(service.good(2)).toBeLessThan(1);
  })
});
