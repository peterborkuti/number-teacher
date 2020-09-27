import { TestBed } from '@angular/core/testing';

import { StorageWrapperService } from './storage-wrapper.service';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { ProbDB } from '../core/prob-db';

describe('StorageWrapperService', () => {
  let service: StorageWrapperService;
  let storage: Storage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: '__mydb',
          driverOrder: ['localstorage']
        })
      ]
    });
    service = TestBed.inject(StorageWrapperService);
    storage = TestBed.inject(Storage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('saves active name', (done) => {
    service.saveActiveName('ANY_STRING');
    service.$getActiveName().then((name) => {
      expect(name).toBe('ANY_STRING');
      storage.clear().then(() => done());
    });
  });

  it('saves probdb', (done) => {
    const ANY_NUMBER = 10;
    const expected: ProbDB = {id: 'ANY_ID', name: 'ANY_NAME', probabilities: [[ANY_NUMBER]]};
    service.save(expected);
    service.$loadAll().then((dbs) => {
      expect(dbs[0]).toEqual(expected);
      done()
    });
  });

});
