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

  it('increases probability by half of 1- prob when bad', () => {
    expect(service.bad(0.5)).toBeCloseTo(0.75);
  })

  it('decreases probability at it half when good', () => {
    expect(service.good(0.5)).toBeCloseTo(0.25);
  })
});
