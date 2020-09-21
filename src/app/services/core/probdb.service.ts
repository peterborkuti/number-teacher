import { Injectable } from '@angular/core';
import { StorageService } from '../storage.service';
import { ProbModifierService } from './prob-modifier.service';

@Injectable({
  providedIn: 'root'
})
export class ProbdbService {
  constructor(private probModifier: ProbModifierService, private storage: StorageService) {
    this.storage.$storageIsReady.subscribe((ready) => {
      this.setDb(ready);
    })
  }

  private setDb(ready: boolean) {
    if (ready) {
      if (this.storage.getNames().length == 0) {
        this.reset('Default');
      }
    }
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

    /**
   * The score shows how good us the user based on the probability table
   * Returns with a number between 0 and 100
   *
   * The closer to zero the better
   */
  getScore(): number {
    const flatProbs = [].concat(...this.getProbabilities());
    let sum = flatProbs.reduce((sum, act) => sum + act, 0);

    sum = Math.max(0, sum);
    sum = Math.min(1, sum);

    return Math.round(sum * 100); 
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
    this.storage.setProb(exp, digit, this.probModifier.good(this.storage.getProb(exp, digit)));
  }

}
