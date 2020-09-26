import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { ProbDB } from '../core/prob-db';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  let localstorage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '__mydb',
          driverOrder: ['localstorage']
        })
      ]
    });
    service = TestBed.inject(StorageService);
    localstorage = TestBed.inject(Storage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('storage will be ready after a while', (done) => {
    service.$storageIsReady.subscribe(ready => {
      if (!ready) return;
      expect(ready).toBeTrue();
      done();
    })
  });

  it('reset sets id and saves probabilities', (done) => {
    const ANY_NUM = 10;
    const expected: ProbDB = { id: '', name: 'ANY_NAME', probabilities: [[ANY_NUM]]};
    service.$storageIsReady.subscribe(ready => {
      if (!ready) return;

      service.reset(expected.name, expected.probabilities);
      const db = service.getDB(expected.name);

      expect(db.name).toEqual(expected.name);
      expect(db.probabilities).toEqual(expected.probabilities);
      expect(db.id).toBeTruthy();

      localstorage.clear().then(() => done());
    })
  });

  it('sets active db', (done) => {
    service.$storageIsReady.subscribe(ready => {
      if (!ready) return;

      service.setActive('ANY_NAME');
      expect(service.getName()).toBe('ANY_NAME');
      
      localstorage.clear().then(() => done());
    })
  });

  it('gets probabilities and it is a copy not a reference', (done) => {
    const ANY_NUM = 10;
    const expected: ProbDB = { id: '', name: 'ANY_NAME', probabilities: [[ANY_NUM]]};
    service.$storageIsReady.subscribe(ready => {
      if (!ready) return;

      service.reset(expected.name, expected.probabilities);
      service.setActive(expected.name);

      const probs = service.getProbabilities();
      expect(probs).toEqual(expected.probabilities);

      probs[0][0] = ANY_NUM + 1;

      const probsAfterCopyMod = service.getProbabilities();
      expect(probsAfterCopyMod).toEqual(expected.probabilities);
      
      localstorage.clear().then(() => done());
    })
  });

  it('sets probability if it is exists', (done) => {
    const ANY_NUM = 10;
    const expected: ProbDB = { id: '', name: 'ANY_NAME', probabilities: [[ANY_NUM]]};
    service.$storageIsReady.subscribe(ready => {
      if (!ready) return;

      service.reset(expected.name, expected.probabilities);
      service.setActive(expected.name);

      // not existing exponent and digit
      service.setProb(10, 10, 1);
      expect(service.getProb(10, 10)).toEqual(0);

      service.setProb(0, 0, ANY_NUM + 1);
      expect(service.getProb(0, 0)).toEqual(ANY_NUM + 1);

      localstorage.clear().then(() => done());
    })
  });

  it('gets db names', (done) => {
      service.$storageIsReady.subscribe(ready => {
        if (!ready) return;

        service.reset('NAME1', [[]]);
        service.reset('NAME2', [[]]);

        expect(service.getNames().sort()).toEqual(['NAME1', 'NAME2']);

        localstorage.clear().then(() => done());
      })
  });

});
