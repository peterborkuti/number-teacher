import { TestBed } from '@angular/core/testing';

import { mapToRange, mapFromRange } from './speech.service';

/*
describe('SpeechService', () => {

  let service: SpeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
*/

describe('mapToRange', () => {
  it('maps [0,100] to range', () => {
    expect(mapToRange(0, 1, 2)).toBeCloseTo(1);
    expect(mapToRange(100, 1, 2)).toBeCloseTo(2);
    expect(mapToRange(50, 1, 2)).toBeCloseTo(1.5);
  });
});

describe('mapFromRange', () => {
  it('maps [min,max] to [0,100]', () => {
    expect(mapFromRange(1, 1, 2)).toBeCloseTo(0);
    expect(mapFromRange(2, 1, 2)).toBeCloseTo(100);
    expect(mapFromRange(1.5, 1, 2)).toBeCloseTo(50);
  });
});