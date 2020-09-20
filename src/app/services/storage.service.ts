import { Injectable } from '@angular/core';
import { ProbDB } from './core/prob-db';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'

})
export class StorageService {
  
  private probdbs: ProbDB[] = [];
  private active: ProbDB;

  constructor(private storage: Storage) {
    //this.probdbs = this.loadAll();
  }

  reset(nameOfDB: string, probabilities: number[][]) {
    const db = this.getOrCreate(nameOfDB);
    db.probabilities = JSON.parse(JSON.stringify(probabilities));
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
  }

  getName(): string {
    return this.active ? this.active.name : ''; 
  }

  getNames() : string[] {
    return this.probdbs.map(db => db.name);
  }

  getProbabilities(): number[][] {
    // deep copy
    return JSON.parse(JSON.stringify(this.active.probabilities));
  }

  setProb(exp: number, digit: number, probability: number) {
    if (!this.existsProb(exp, digit)) {
      console.error(`Digit:${digit} or exponent:${exp} out of range`);
      return;
    }

    this.active.probabilities[exp][digit] = probability;
  }

  private existsProb(exp: number, digit: number): boolean {
    return !!this.active.probabilities[exp] && !!this.active.probabilities[exp][digit];
  }

  getProb(exp: number, digit: number): number {
    return this.active.probabilities[exp][digit]
  }


  /**
   * returns with a ProbDB if its name is equal to nameOfDB else undefined
   * @param nameOfDB name of ProbDB database
   */
  getDB(nameOfDB: string): ProbDB | undefined {
    let dbs = this.probdbs.filter(pdb => pdb.name ==  nameOfDB);

    return dbs.length === 0 ? undefined : dbs[0];
  }

  private save(probDB: ProbDB) {

  }

  private load(nameOfDB: string): ProbDB {
    return null;

  }

  private loadAll(): ProbDB[] {
    return []

  }
}
