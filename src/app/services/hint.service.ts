import { Injectable } from '@angular/core';

export interface HintFunction {
  (): string;
}

@Injectable({
  providedIn: 'root'
})
export class HintService {
  public newHint(question: string): HintFunction {
    let hintIndexesIndex = 0;
    const hintIndexes = this.indexesInRandomOrder(question.length);

    return ():string => {
      const hint = Array(question.length).fill('?');

      const hintIndex = hintIndexes[hintIndexesIndex];
      hintIndexesIndex = (hintIndexesIndex >= hintIndexes.length - 1) ? 0 : hintIndexesIndex + 1;

      hint[hintIndex] = question[hintIndex];

      return hint.join('');
    }
  }

  private indexesInRandomOrder(n: number): number[] {
    return Array(n).fill(0).map((v,i) => i).map(i => [Math.random(), i]).sort().map(i => i[1]);
  }
}
