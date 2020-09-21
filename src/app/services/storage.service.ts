import { Injectable } from '@angular/core';
import { ProbDB } from './core/prob-db';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class StorageService {
  private readonly KEY_ACTIVE = 'ACTIVE_';
  private readonly KEY_DB = 'DB_';
  
  private probdbs: ProbDB[] = [];
  private active: ProbDB;

  public $storageIsReady = new BehaviorSubject<boolean>(false);

  constructor(private storage: Storage) {
    this.loadAll();
  }

  reset(nameOfDB: string, probabilities: number[][]) {
    const db = this.getOrCreate(nameOfDB);
    db.probabilities = JSON.parse(JSON.stringify(probabilities));
    this.save(db);
  }

  private getOrCreate(nameOfDB = 'Default'): ProbDB {
    let db = this.getDB(nameOfDB);

    if (!db) {
      db = this.probdbs[this.probdbs.push(new ProbDB(nameOfDB)) - 1];
      this.save(db);
    };

    return db;
  }

  setActive(nameOfDB: string) {
      this.active = this.getOrCreate(nameOfDB);
      this.saveActiveName(this.active.name);

  }

  getName(): string {
    return this.active ? this.active.name : ''; 
  }

  getNames() : string[] {
    return this.probdbs.map(db => db.name);
  }

  getProbabilities(): number[][] {
    return (this.active && this.active.probabilities) ? JSON.parse(JSON.stringify(this.active.probabilities)) : [[]];
  }

  setProb(exp: number, digit: number, probability: number) {
    if (!this.existsProb(exp, digit)) {
      return;
    }

    this.active.probabilities[exp][digit] = probability;
    this.save(this.active);
  }

  private existsProb(exp: number, digit: number): boolean {
    return !!this.active.probabilities[exp] && !!this.active.probabilities[exp][digit];
  }

  getProb(exp: number, digit: number): number {
    return this.existsProb(exp, digit) ? this.active.probabilities[exp][digit] : 0;
  }


  /**
   * returns with a ProbDB if its name is equal to nameOfDB else undefined
   * @param nameOfDB name of ProbDB database
   */
  getDB(nameOfDB: string): ProbDB | undefined {
    let dbs = this.probdbs.filter(pdb => pdb.name ==  nameOfDB);

    return dbs.length === 0 ? undefined : dbs[0];
  }

  private saveActiveName(name: string) {
    this.storage.set(this.KEY_ACTIVE, name);
  }

  private save(probDB: ProbDB) {
    this.storage.set(this.KEY_DB + probDB.name, probDB);
  }

  private loadAll() {
    let activeName = '';

    this.storage.forEach((value, key) => {
      if (key == this.KEY_ACTIVE) {
        activeName = value;
      }
      else {
        this.probdbs.push(value)
      }})
    .then(() => {
      this.active = this.getDB(activeName);
      this.$storageIsReady.next(true)
    });
  }
}
