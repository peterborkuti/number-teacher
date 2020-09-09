import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProbModifierService {
  private readonly DIGITS_NUM = 10;

  constructor() { }

  getDefault(maxExponent: number): number[][] {
    if (maxExponent < 0) maxExponent = 0;
    maxExponent = Math.floor(maxExponent);

    const N = (maxExponent + 1) * this.DIGITS_NUM;
    const defaultProb = 1.0/N;
    
    return Array(maxExponent + 1).fill(1)
        .map(() => Array(this.DIGITS_NUM).fill(defaultProb).map(i => i));
  }

  good(prob: number): number {
    let newProb = 1;
    if (prob >= 0 && prob < 1) {
      newProb = prob / 2.0;
    }
 
    return newProb;
  }

  bad(prob: number): number {
    let newProb = 1;
    if (prob >= 0 && prob < 1) {
      newProb = prob  + (1.0 - prob) / 2.0;
    }
 
    return newProb;
  }

}
