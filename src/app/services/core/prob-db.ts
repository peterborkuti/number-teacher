export class ProbDB {
    name: string = 'Default';
    id: string = '' + Date.now();
    probabilities: number[][] = [[]];

    constructor(name?: string) {
        this.name = name ? name : 'Default';
    }
}