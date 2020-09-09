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

  it('gets default probabilities', () => {
    const probs = service.getDefault(2);

    expect(probs.length).toBe(3);
    probs.forEach(digits => expect(digits.length).toBe(10));

    const N = 3 * 10;

    [].concat(...probs).forEach(p => expect(p).toBeCloseTo(1.0/N));
  })

  it('defaults should be different arrays', () => {
    const probs = service.getDefault(2);

    probs[0][0] = 10;

    expect(probs[0][0]).toBe(10);
    expect(probs[1][0]).not.toBe(10);
    expect(probs[0][1]).not.toBe(10);
  })
});
