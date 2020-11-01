import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ProbDB } from '../core/prob-db';
import { SpeechConfig } from '../speech.service';

@Injectable({
  providedIn: 'root'
})
export class StorageWrapperService {
  private readonly KEY_ACTIVE = 'ACTIVE_';
  private readonly KEY_DB = 'DB_';
  private readonly KEY_CONFIG = 'CONFIG_';

  private speechConfig$ = new BehaviorSubject<SpeechConfig>(new SpeechConfig());
  private probdbNames$ = new BehaviorSubject<string[]>([]);
  private activeProbDB$ = new BehaviorSubject<ProbDB>(new ProbDB());
  private noSavedProbDBs$ = new Subject<boolean>();

  constructor(private storage: Storage) {
    storage.ready().then(() => {
      storage.get(this.KEY_CONFIG).then((value) => !!value && this.speechConfig$.next(value));

      const getActiveName = storage.get(this.KEY_ACTIVE);
      const getKeys = storage.keys();

      Promise.all([getActiveName, getKeys]).then( ([activeName, keys]) => {
        const dbNames = this.getDBNames(keys);
        this.probdbNames$.next(dbNames);
        if (dbNames.length > 0) {
          if (activeName && dbNames.indexOf(activeName) == -1) {
            activeName = dbNames[0];
          }
          this.setActiveName(activeName);
        }
        else {
          this.noSavedProbDBs$.next(true);
        }
      })
    })
  }

  setActiveName(name: string) {
    this.storage.ready().then(() => {
      this.getProbDB(name)
        .then(probDB => {
            this.storage.set(this.KEY_ACTIVE, name);
            this.activeProbDB$.next(probDB);
          }
    )})
  }

  private getProbDB(name: string): Promise<ProbDB> {
    return this.storage.ready().then(() => this.storage.get(this.KEY_DB + name));
  }

  save(probDB: ProbDB) {
    this.storage.ready().then(() => {
      const setDB = this.storage.set(this.KEY_DB + probDB.name, probDB);
      const getActiveName = this.storage.get(this.KEY_ACTIVE);

      Promise.all([setDB, getActiveName])
        .then(([tmp, activeName]) => {
          if (probDB.name == activeName) {
            this.activeProbDB$.next(probDB);
          };
          this.refreshProbDBNames();
        });
    })
  }

  private refreshProbDBNames() {
    this.storage.ready().then(() => {
      this.storage.keys().then((keys) => {
        this.probdbNames$.next(this.getDBNames(keys));
      })
    })
  }

  private getDBNames(keys: string[]): string[] {
    let names = [];
    if (keys && keys.length > 0) {
      names = keys.filter(key => key.startsWith(this.KEY_DB))
                      .map(dbKey => dbKey.substr(this.KEY_DB.length));
    }

    return names;
  }

  clearStorage() {
    this.storage.ready().then(() => {
      this.storage.clear().then(() => {
        this.activeProbDB$.next(new ProbDB());
        this.probdbNames$.next([]);
        this.speechConfig$.next(new SpeechConfig());
        this.noSavedProbDBs$.next(true);
      })
    })
  }

  watchProbDBNames(): Observable<string[]> {
    return this.probdbNames$.pipe(filter(names => names && names.length > 0));
  }

  watchActiveProbDB(): Observable<ProbDB> {
    return this.activeProbDB$.pipe(filter(db => !!db && !!db.name));
  }

  watchSpeechConfig(): Observable<SpeechConfig> {
    return this.speechConfig$;
  }

  watchNoSavedProbDBs(): Observable<boolean> {
    return this.noSavedProbDBs$;
  }

  saveSpeechConfig(config: SpeechConfig) {
    this.storage.ready().then(() => {
      this.storage.set(this.KEY_CONFIG, config)
        .then((config) => this.speechConfig$.next(config));
    })
  }

}
