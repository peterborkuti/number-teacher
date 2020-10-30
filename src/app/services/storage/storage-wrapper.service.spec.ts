import { TestBed } from '@angular/core/testing';

import { StorageWrapperService } from './storage-wrapper.service';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { ProbDB } from '../core/prob-db';
import { SpeechConfig } from '../speech.service';

import { filter } from 'rxjs/operators';

describe('StorageWrapperService', () => {
  const storageName = '_' + Math.random();

  let service: StorageWrapperService;
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
    service = TestBed.inject(StorageWrapperService);
    storage = TestBed.inject(Storage);

    storage.ready().then(() => done());    
  });

  afterEach((done) => {
    storage.clear().then(() => done());
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('refreshes probdb names', (done) => {
    service.watchProbDBNames().subscribe(
      (names) => {
        if (names.indexOf('DBNAME') > -1) {
          expect(true).toBeTrue();
          done();
        }
      });

    const probdb = new ProbDB('DBNAME');
    service.save(probdb);
  });

  it('refreshes speechconfig', (done) => {
    service.watchSpeechConfig().pipe(filter(conf => conf.voiceName == 'VOICENAME')).subscribe(
      (config) => {
        expect(true).toBeTrue();
        done();
    });

    const config = new SpeechConfig();
    config.voiceName = 'VOICENAME';
    service.saveSpeechConfig(config);
  });


  it('refreshes active probdb', (done) => {
    service.watchActiveProbDB().pipe(filter(db => db.name == 'ACTIVENAME')).subscribe(
      (db) => {
        expect(true).toBeTrue();
        done();
    });

    const probdb = new ProbDB('ACTIVENAME');
    service.save(probdb);

    service.setActiveName('ACTIVENAME')
  });

  it('refreshes active probdb', (done) => {
    service.watchActiveProbDB()
      .pipe(filter(db => db.name == 'ACTIVENAME')).subscribe(
      (db) => {
        expect(true).toBeTrue();
        done();
    });

    const probdb = new ProbDB('ACTIVENAME');
    service.save(probdb);

    service.setActiveName('ACTIVENAME')
  });

});
