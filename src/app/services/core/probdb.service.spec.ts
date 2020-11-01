import { ProbdbService } from './probdb.service';
import { TestBed } from '@angular/core/testing';
import { NumberGroupsService } from './number-groups.service';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { bufferCount, count, filter, skip, take, tap } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { ProbModifierService } from './prob-modifier.service';
import { ProbDB } from './prob-db';

describe('ProbdbService', () => {
  const storageName = '_' + Math.random();
  let service: ProbdbService;
  let numberGroupsService: NumberGroupsService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '_' + Math.random(),
          driverOrder: ['localstorage']
        })
      ],
      providers: [ProbModifierService, StorageService, NumberGroupsService]
    });
    service = TestBed.inject(ProbdbService);
    numberGroupsService = TestBed.inject(NumberGroupsService);
    storage = TestBed.inject(Storage);


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

  it('setst the first group when store is empty', (done) => {
    service.watchName().pipe(filter(name => !!name)).subscribe(name => {
      expect(name).toBe(getDefaultGroupName());
      done();
    })
  });

  it('setActive refreshes name', (done) => {
    const groupName = getAnyGroupName();

    service.watchName().pipe(filter(name => name == groupName)).subscribe(name => {
      expect(true).toBeTrue();
      done();
    })

    service.setActive(groupName);
  })

  it('digits with maximum probabilities should be asked', (done) => {
    service.watchName().pipe(filter(name => name == '0..9'),skip(9)).subscribe(name => {
      expect(service.getNumberToAsk()).toEqual([5]);
      done();
    })

    service.setActive('0..9');
    service.watchName().pipe(filter(name => name == '0..9'), take(1)).subscribe(()=>{
      const numbersFrom0To9But5 = [0,1,2,3,4, /*5,*/  6,7,8,9];
      numbersFrom0To9But5.forEach(i => service.good(0, i));
    })
  });

  xit('increases probability when time goes by', () => {
    expect(false).toBeTruthy();
  })

  it('score should be increased after two good answers', (done) => {
    service.watchScore().pipe(bufferCount(6))
      .subscribe(values => {
        expect(values[0]).toBeLessThan(values[values.length - 1]);
        done();
      });

    service.setActive('0..9');
    service.watchName().pipe(filter(name => name == '0..9'), take(1)).subscribe(()=>{
      for (let i = 0; i < 4; i++) service.good(0, 1);
    });
  })

  it('score should be decreased after two bad answers', (done) => {
    service.watchScore().pipe(bufferCount(4), skip(3))
      .subscribe(values => {
        expect(values[0]).toBeGreaterThan(values[values.length -1]);
        done();
      });

    service.watchName().pipe(filter(name => name == '0..9'), take(1)).subscribe(()=>{
      console.log('start');
      for (let j = 0; j<2; j++) for (let i = 0; i < 4; i++) setTimeout(() => service.good(0, i), 4*j+i);
      console.log('bads');
      for (let j = 2; j<4; j++) for (let i = 0; i < 4; i++) setTimeout(() => service.bad(0, i), 4*j+i);
    });

    service.setActive('0..9');

  })

  it('refreshes names', (done) => {
    const names = Object.keys(numberGroupsService.getServices()).sort();

    service.watchNames().pipe(filter(n => n.length > 1)).subscribe(n => {
      expect(n.sort()).toEqual(names);
      done();
    })
  })

});
