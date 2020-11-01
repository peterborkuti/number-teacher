import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { filter, first } from 'rxjs/operators';
import { ProbDB } from '../core/prob-db';

import { StorageService } from './storage.service';

describe('StorageService', () => {
  const storageName = '_' + Math.random();

  let service: StorageService;
  let storage: Storage;

  beforeEach((done) => {
    TestBed.configureTestingModule({
      imports: [
        IonicStorageModule.forRoot({
          name: storageName,
          driverOrder: ['localstorage']
        })
      ]
    });
    service = TestBed.inject(StorageService);
    storage = TestBed.inject(Storage);

    storage.ready().then(() => done());
  });

  afterEach((done) => {
    storage.clear().then(() => done());
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('saves db name', (done) => {
    const db = new ProbDB('ANY_NAME');

    service.watchNames().pipe(filter(names => names.indexOf('ANY_NAME')>-1)).subscribe(() => {
      expect(true).toBeTrue();
      done();
    });

    service.save(db.name, db.probabilities);
  });

  it('saves db', (done) => {
    const ANY_NUM = 10;
    const expected = new ProbDB('ANY_NAME', [[ANY_NUM]]);

    service.watchActiveProbDB().pipe(filter(db => db && (db.name == 'ANY_NAME'))).subscribe((db) => {
      expect(db.probabilities).toEqual(expected.probabilities);
      done();
    })

    service.watchNames().pipe(filter(n => n.indexOf('ANY_NAME')>-1), first()).subscribe(() =>{
      service.setActive(expected.name);
    })

    service.save(expected.name, expected.probabilities);
  });

  it('refreshes only active', (done) => {
    const db1 = new ProbDB('NAME1');
    const db2 = new ProbDB('NAME2');

    service.watchActiveProbDB().subscribe((db) => {
      expect(db.name).not.toEqual('NAME1');
      if (db.name == 'NAME2') done();
    })

    service.watchNames().pipe(filter(n => n.indexOf(db2.name)>-1), first()).subscribe(() =>{
      service.setActive(db2.name);
    })

    service.save(db1.name, db1.probabilities);
    service.save(db2.name, db2.probabilities);
  });

  it('gets probability', (done) => {
    const db = new ProbDB('DBNAME', [[0.1, 0.2, 0.3, 0.4], [0.5, 0.6, 0.7, 0.8]]);

    service.watchActiveProbDB().pipe(filter(db => db.name=='DBNAME'), first()).subscribe((db) => {
      expect(service.getProb(0, 2)).toBe(0.3);
      done();
    })

    service.watchNames().pipe(filter(n => n.indexOf(db.name)>-1), first()).subscribe(() =>{
      service.setActive(db.name);
    })

    service.save(db.name, db.probabilities);
  })



})
