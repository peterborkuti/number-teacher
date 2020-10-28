import { ProbdbService } from './probdb.service';
import { ProbModifierService } from './prob-modifier.service';
import { StorageService } from '../storage/storage.service';
import { BehaviorSubject } from 'rxjs';
import { StorageWrapperService } from '../storage/storage-wrapper.service';
import { TestBed } from '@angular/core/testing';
import { NumberGroupsService } from './number-groups.service';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';

describe('ProbdbService', () => {
  const storageName = '_' + Math.random();
  let service: ProbdbService;
  let numberGroupsService: NumberGroupsService;
  let storage: Storage;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: storageName,
          driverOrder: ['localstorage']
        })
      ],
      providers: [ NumberGroupsService, ProbModifierService, StorageWrapperService, StorageService]
    });
    service = TestBed.inject(ProbdbService);
    numberGroupsService = TestBed.inject(NumberGroupsService);
    storage = TestBed.inject(Storage);
    

    service.$ready.subscribe((ready) => {
      if (ready) done();
    })

  });

  afterEach((done) => {
    storage.clear().then(() => done());
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const getDefaultGroupName = () => {
    return Object.keys(numberGroupsService.getServices())[0];
  }

  const getAnyGroupName = () => {
    const anyValidNotZeroNumber = 1;
    return Object.keys(numberGroupsService.getServices())[anyValidNotZeroNumber];
  }



  it('setst the first group when store is empty', () => {
      expect(service.getName()).toBe(getDefaultGroupName());
  });

  it('setActive calls storage.setActive', () => {
    const groupName = getAnyGroupName();
    service.setActive(groupName)
    expect(service.getName()).toBe(groupName);
  })

  it('sets digits probs to 1 or zero for newly created groups', () => {
    service.reset(getAnyGroupName());
    const flatProbs = [].concat(...service.getProbabilities());
    flatProbs.forEach(p => expect(p == 1 || p == 0).toBeTrue());
  })

  it('gets digits with maximum probabilities', () => {
    service.setActive('0..9');
    const numbersFrom0To9But5 = [0,1,2,3,4, /*5,*/  6,7,8,9];
    numbersFrom0To9But5.forEach(i => service.good(0, i));
    expect(service.getNumberToAsk()).toEqual([5]);
  });

  xit('increases probability when time goes by', () => {
    expect(false).toBeTruthy();
  })

  it('probabilities should be lowered after a good answers', () => {
    service.setActive('0..9');
    const numbersFrom0To9But5 = [0,1,2,3,4, /*5,*/  6,7,8,9];
    numbersFrom0To9But5.forEach(i => service.good(0, i));
    const probs = service.getProbabilities();

    numbersFrom0To9But5.forEach( i => expect(probs[0][i] < 1).toBeTrue());
    expect(probs[0][5]).toBe(1);
  })

  it('probabilities shoul be lifted after bad answers', () => {
    service.setActive('0..9');
    const nums = [0,1,2,3,4,5,6,7,8,9];
    nums.forEach(i => service.good(0, i)); // all will be lowered
    const flatLowProbs = [].concat(...service.getProbabilities());

    nums.forEach(i => service.bad(0, i)); // all will be lifted
    const flatProbs = [].concat(...service.getProbabilities());

    for(let i = 0; i < flatProbs.length; i++) {
      expect(flatProbs[i]).toBeGreaterThan(flatLowProbs[i]);
    }
  })

  it('answering 15 times good all numbers should be asked', () => {
    service.reset('0..15');
    service.setActive('0..15');
    console.log("before:",service.getProbabilities());
    const nums = [0,1,2,3,4,5,6,7,8,9];
    nums.forEach(i => service.good(0, i)); // all will be lowered

    console.log("after:",service.getProbabilities());

    const numbers: number[] = service.getNumberToAsk();
    console.log("numbertoask:", numbers.join(''));

    expect(numbers.length).toBeGreaterThan(1);
  })

  it('gets probdb names', () => {
    const names = Object.keys(numberGroupsService.getServices()).sort();

    expect(service.getNames().sort()).toEqual(names)
  })

});
