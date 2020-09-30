import { TestBed } from '@angular/core/testing';

import { exponent, NumberGroupsService } from './number-groups.service';

describe('NumberGroupsService', () => {
  let service: NumberGroupsService;

  const checkProbsLength = (groups: any, groupName: string, expected: number) => {
    let probs: number[][] = groups[groupName]();
    expect([].concat(...probs).length).toBe(expected);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gives 4 groups', () => {
    expect(Object.keys(service.getServices()).length).toBe(4);
  });

  it('gives 4 groups with approprita number of probabilities', () => {
    const groups = service.getServices();
    checkProbsLength(groups, '0..9', 10);
    checkProbsLength(groups, '0..99', 20);
    checkProbsLength(groups, '0..999', 30);
    checkProbsLength(groups, '0..9999', 40);
  });

});

describe('exponent', () => {
  it('gets probabilities', () => {
    const probs = exponent(2);

    expect(probs.length).toBe(3);
    probs.forEach(digits => expect(digits.length).toBe(10));

    const N = 3 * 10;

    [].concat(...probs).forEach(p => expect(p).toBeCloseTo(1.0/N));
  })

  it('defaults should be different arrays', () => {
    const probs = exponent(2);

    probs[0][0] = 10;

    expect(probs[0][0]).toBe(10);
    expect(probs[1][0]).not.toBe(10);
    expect(probs[0][1]).not.toBe(10);
  })
})
