import { ProbdbService } from './probdb.service';
import { ProbModifierService } from './prob-modifier.service';

describe('ProbdbService', () => {
  let service: ProbdbService;
  const originalProbModService = new ProbModifierService();
  const BADVALUE = 10;
  const GOODVALUE = 5;
  const probModifier = <ProbModifierService><unknown>{
    bad: () => BADVALUE,
    good: () => GOODVALUE,
    getDefault: () => originalProbModService.getDefault(3)
  }

  beforeEach(() => {
    service = new ProbdbService(probModifier);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('creates new db group', () => {
    service.create("DBNAME");
    expect(service.getDB("DBNAME")).toBeTruthy();
  });

  it('sets db group', () => {
    service.setActive("ACTIVE")
    expect(service.getName()).toBe("ACTIVE");
  })
  it('sets db group to default when instantiates', () => {
    expect(service.getName()).toBe("Default");
  })
  it('sets digits probs to 1/N or zero for newly created groups', () => {
    const probs = service.getProbabilities();
    const N = probs.length * 10;
    const defaultProb = 1.0 / N;
    probs.forEach(col => col.forEach(p => expect(p).toBeCloseTo(defaultProb)));
  })
  it('gets digits with maximum probabilities', () => {
    service.bad(0,1);
    service.bad(1,2);
    service.bad(2,3);
    expect(service.getNumberToAsk()).toEqual([3,2,1]);
  });

  xit('increases probability when time goes by', () => {
    expect(false).toBeTruthy();
  })

  it('calls probModifier and use its value for a digit when answer is bad', () => {
    service.bad(0, 1);
    const probs = service.getProbabilities();
    expect(probs[0][1]).toBe(BADVALUE);
  })

  it('calls probModifier and use its value for a digit when answer is good', () => {
    service.good(2, 1);
    const probs = service.getProbabilities();
    expect(probs[2][1]).toBe(GOODVALUE);
  })

});
