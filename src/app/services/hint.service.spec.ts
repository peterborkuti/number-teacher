import { HintService, HintFunction } from './hint.service';

describe('HintService', () => {
  let service: HintService;

  beforeEach(() => {
    service = new HintService();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets a function when calls newHint', () =>
  expect(service.newHint('123')).toEqual(jasmine.any(Function))
  );
});

describe('HintFunction', () => {
  const service = new HintService();

  it('should be created', () => {
    expect(service.newHint('123')).toBeTruthy();
  });

  it('gets hint as long as question', () => {
    const question = 'SOME_DIGITS';
    const hintFunction = service.newHint(question);
    const hint = hintFunction();

    expect(hint.length).toBe(question.length);
  })

  it('gets hint contains all ? but one and it is in the right place', () => {
    const question = 'SOME_DIGITS';
    const hintFunction = service.newHint(question);
    const hint = hintFunction();

    const displayedDigits = hint.split('').map((d,i) => [d,i]).filter(di => di[0] !== '?');
    const [digit, index] = displayedDigits[0];

    expect(displayedDigits.length).toBe(1);
    expect(hint[index]).toBe(digit);
  });
});
