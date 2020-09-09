import { TestBed } from '@angular/core/testing';

import { AnswerCheckerService } from './answer-checker.service';
import { CheckedAnswer } from './checked-answers';

describe('AnswerCheckerService', () => {
  let service: AnswerCheckerService;

  const expectedSameLength = <{goods: CheckedAnswer[], bads:CheckedAnswer[]}>{
    goods: [{digit: 1, exp: 4}, {digit: 3, exp: 2}, {digit: 4, exp: 1}],
    bads: [
      {digit:2, exp:3}, {digit:4, exp:3},
      {digit:5, exp:0}, {digit:7, exp:0}
    ]
  }


  const expectedDiffLength = <{goods: CheckedAnswer[], bads:CheckedAnswer[]}>{
    goods: [{digit: 1, exp: 4}, {digit: 3, exp: 2}, {digit: 4, exp: 1}],
    bads: [
      {digit:2, exp:3}, {digit:4, exp:3},
      {digit:5, exp:0}, {digit:7, exp:0},
      {digit:6, exp:6}, {digit:7, exp:5}
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnswerCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checks same length', () => {
    const experienced = service.checkSameLength(
      "12345",
      "14347");

    expect(expectedSameLength.goods).toEqual(jasmine.arrayWithExactContents(experienced.goods));
    expect(expectedSameLength.bads).toEqual(jasmine.arrayWithExactContents(experienced.bads));
  })

  it('checks different length', () => {
    const experienced = service.checkDifferentLength(
      "6712345",
        "14347");

    expect(expectedDiffLength.goods).toEqual(jasmine.arrayWithExactContents(experienced.goods));
    expect(expectedDiffLength.bads).toEqual(jasmine.arrayWithExactContents(experienced.bads));
  })

  it('checks question longer than answer', () => {
    const experienced = service.check(
      "6712345",
        "14347");

    expect(expectedDiffLength.goods).toEqual(jasmine.arrayWithExactContents(experienced.goods));
    expect(expectedDiffLength.bads).toEqual(jasmine.arrayWithExactContents(experienced.bads));
  })

  it('checks question shorter than answer', () => {
    const experienced = service.check(
        "14347",
      "6712345");

    expect(expectedDiffLength.goods).toEqual(jasmine.arrayWithExactContents(experienced.goods));
    expect(expectedDiffLength.bads).toEqual(jasmine.arrayWithExactContents(experienced.bads));
  })

  it('checks question same length as answer', () => {
    const experienced = service.check(
      "12345",
      "14347");

    expect(expectedSameLength.goods).toEqual(jasmine.arrayWithExactContents(experienced.goods));
    expect(expectedSameLength.bads).toEqual(jasmine.arrayWithExactContents(experienced.bads));
  })

});
