import { Injectable } from '@angular/core';
import { ProbDB } from './prob-db';
import { ProbModifierService } from './prob-modifier.service';

@Injectable({
  providedIn: 'root'
})
export class ProbdbService {
  private probdbs: ProbDB[] = [];
  private active: ProbDB;

  constructor(private probModifier: ProbModifierService) {
    this.setActive('Default');
    this.setActive('A');
    this.setActive('B');
  }

  create(nameOfDB = 'Default'): ProbDB {
    let db = this.getDB(nameOfDB);

    if (!db) {
      db = this.probdbs[this.probdbs.push(new ProbDB(nameOfDB)) - 1];
      this.reset(nameOfDB);
    };

    return db;
  }

  reset(nameOfDB: string) {
    const db = this.create(nameOfDB);
    db.probabilities = this.probModifier.getDefault(3);
  }

  setActive(nameOfDB: string) {
    this.active = this.create(nameOfDB);
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

  /**
   * Returns with the number which digits should be asked
   * The number contains all the exponents
   */
  getNumberToAsk(): number[] {
    let digits = this.active.probabilities.map(exp => this.getMaxIndex(exp)).reverse();
    while (digits.length > 1 && digits[0] == 0) {
      digits = digits.slice(1)
    }

    return digits;

  }

  private getMaxIndex(arr: number[]) {
    let maxIndex = -1;
    let maxValue = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
        maxIndex = i;
      }
    }

    return maxIndex;
  }

  bad(exp: number, digit: number) {
    if (!this.active.probabilities[exp] || !this.active.probabilities[exp][digit]) {
      console.error(`Digit:${digit} or exponent:${exp} out of range`);
      return;
    }

    const prob = this.active.probabilities[exp][digit];
    this.active.probabilities[exp][digit] = this.probModifier.bad(prob);
  }

  good(exp: number, digit: number) {
    if (!this.active.probabilities[exp] || !this.active.probabilities[exp][digit]) {
      console.error(`$digit or $exp out of range`);
      return;
    }

    const prob = this.active.probabilities[exp][digit];
    this.active.probabilities[exp][digit] = this.probModifier.good(prob);
  }

  getDB(nameOfDB: string): ProbDB | undefined {
    let dbs = this.probdbs.filter(pdb => pdb.name ==  nameOfDB);

    return dbs.length === 0 ? undefined : dbs[0];
  }
}
