export class ProbDB {
    name: string = 'Default';
    id: string = '' + Date.now();
    probabilities: number[][] = [[]];

    constructor(name?: string, probs?: number[][]) {
        this.name = name ? name : '';
        this.probabilities = probs ? probs : [[]];
    }
}