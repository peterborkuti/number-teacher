import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProbModifierService {
  private readonly DIGITS_NUM = 10;

  constructor() { }

  /**
   * cut the asking probability to half
   * @param prob 
   */
  good(exp: number, prob: number): number {
    prob = Math.max(Math.min(1, prob ? prob : 1), 0);

    // the highest the exponent, the lesser the probability will be lowered

    return prob - (prob / (exp+2));
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
