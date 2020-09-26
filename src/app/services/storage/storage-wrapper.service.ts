import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ProbDB } from '../core/prob-db';

@Injectable({
  providedIn: 'root'
})
export class StorageWrapperService {
  private readonly KEY_ACTIVE = 'ACTIVE_';
  private readonly KEY_DB = 'DB_';

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

  $getActiveName(): Promise<string> {
    return this.storage.get(this.KEY_ACTIVE);
  } 

}
