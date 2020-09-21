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

  /**
   * cut the asking probability to half
   * @param prob 
   */
  good(prob: number): number {
    prob = Math.max(Math.min(1, prob ? prob : 1), 0);

    return prob / 2.0;
  }

  /**
   * Rise the asking probability to
   * with its half
   * @param prob 
   */
  bad(prob: number): number {
    prob = Math.min(Math.max(0, prob ? prob : 0), 1);
  
    return Math.max(prob  + prob / 2, 1);
  }

}
