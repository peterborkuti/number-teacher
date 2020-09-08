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
    
    return Array(maxExponent + 1).map(() => [0,1,2,3,4,5,6,7,8,9].map(i => defaultProb));
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
