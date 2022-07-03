import { Subprediction } from "./subprediction";

export class Prediction{
    constructor(        
        public guess:string,
        public result:string,
        public subpredictions?: Subprediction[]
    ) {
    }

    generateSubpredictions() {
        this.subpredictions = []
        for (let i = 0; i < this.guess.length ; i++) {
            const subprediction = new Subprediction(this.guess.charAt(i), this.result.charAt(i))
            this.subpredictions.push(subprediction)
        }
    }
}