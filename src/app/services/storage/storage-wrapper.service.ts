import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProbDB } from '../core/prob-db';
import { SpeechConfig } from '../speech.service';

@Injectable({
  providedIn: 'root'
})
export class StorageWrapperService {
  private readonly KEY_ACTIVE = 'ACTIVE_';
  private readonly KEY_DB = 'DB_';
  private readonly KEY_CONFIG = 'CONFIG_';

  constructor(private storage: Storage) { }

  saveActiveName(name: string) {
    this.storage.set(this.KEY_ACTIVE, name);
  }

  save(probDB: ProbDB) {
    this.storage.set(this.KEY_DB + probDB.name, probDB);
  }

  $loadAll(): Promise<ProbDB[]> {
    const db: ProbDB[] = [];

    return this.storage.forEach((value, key) => {
      if (key.startsWith(this.KEY_DB)) {
        db.push(value);
      }})
    .then(() => db);
  }

  clear(dbName: string): Promise<any> {
    return this.storage.remove(dbName);
  }

  $getActiveName(): Promise<string> {
    return this.storage.get(this.KEY_ACTIVE);
  }
  
  $loadSpeechConfig(): Promise<SpeechConfig> {
    return this.storage.get(this.KEY_CONFIG);
  }

  saveSpeechConfig(config: SpeechConfig) {
    this.storage.set(this.KEY_CONFIG, config);
  }


}
