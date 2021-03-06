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
    expect(service.bad(0.2)).toBeCloseTo(0.6);
    expect(service.bad(0.5)).toBeCloseTo(0.75);
  })

  it('decreases probability when good', () => {
    expect(service.good(1, 0.5)).toBeLessThan(0.5);
    expect(service.good(1, 2)).toBeLessThan(1);
  })
});
