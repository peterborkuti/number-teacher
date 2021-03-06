import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberGroupsService {
  constructor() { }

  getServices(): {[key:string]: Function} {
    return {
      '0..9' : exponent.bind(null, 0),
      '0..99' : exponent.bind(null, 1),
      '0..999' : exponent.bind(null, 2),
      '0..9999' : exponent.bind(null, 3),
      '0..19' : () => {
        return [
                [1,1,1,1,1,1,1,1,1,1],
                [0,1,0,0,0,0,0,0,0,0]
              ]
      }
    }
  }
}

export function exponent(maxExponent: number): number[][] {
  const DIGITS_NUM = 10;

  if (maxExponent < 0) maxExponent = 0;
  maxExponent = Math.floor(maxExponent);

  const defaultProb = 1;

  const probs = Array(maxExponent + 1).fill(1)
    .map(() => Array(DIGITS_NUM).fill(defaultProb).map(i => i));

  if (maxExponent>0) probs[maxExponent][0] = 0;

  return probs;
}

