import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { ProbDB } from './prob-db';
import { ProbModifierService } from './prob-modifier.service';

@Injectable({
  providedIn: 'root'
})
export class ProbdbService {
  constructor(private probModifier: ProbModifierService, private storage: StorageService) {
    this.reset('Default');
  }

  reset(nameOfDB: string) {
    this.storage.reset(nameOfDB, this.probModifier.getDefault(3));
    this.setActive(nameOfDB);
  }

  setActive(nameOfDB: string) {
    this.storage.setActive(nameOfDB);
  }

  getName(): string {
    return this.storage.getName(); 
  }

  getNames() : string[] {
    return this.storage.getNames();
  }

  getProbabilities(): number[][] {
    return this.storage.getProbabilities();
  }

  /**
   * Returns with the number which digits should be asked
   * The number contains all not-leading-zeroes exponents
   * 
   * If it contains only zeroes, it will return the last digit
   */
  getNumberToAsk(): number[] {
    let digits = this.getProbabilities().map(exp => this.getMaxIndex(exp)).reverse();
    console.log('Raw question:', digits.join(''));

    while (digits.length > 1 && digits[0] == 0) {
      digits = digits.slice(1)
    }

    return digits;
  }

  private getMaxIndex(arr: number[], delta = 0.01): number {
    let maxValue = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }

    const maxIndexes = arr.map((v,i) => ({value:v, index: i})).filter(vi => Math.abs(vi.value - maxValue) < delta).map(vi => vi.index);

    return maxIndexes[Math.floor(Math.random()*maxIndexes.length)];
  }

  bad(exp: number, digit: number) {
    this.storage.setProb(exp, digit, this.probModifier.bad(this.storage.getProb(exp, digit)));
  }

  good(exp: number, digit: number) {
    this.storage.setProb(exp, digit, this.probModifier.bad(this.storage.getProb(exp, digit)));
  }

}
