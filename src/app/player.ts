import { Prediction } from "./prediction";

export class Player {
    constructor(
        public predictions:Prediction[],
        public answer:String = "testy"
    ) {

    }

    checkGuess(guess: String) {
        let result = ""
        for (let i = 0; i < guess.length; i++) {
            const answerLetter = this.answer.charAt(i)
            const guessLetter = guess.charAt(i)
            
            if (answerLetter === guessLetter) {
                result += "M"
            } else if (this.answer.includes(guessLetter)) {
                result += "I"
            } else {
                result += "N"
            }
        }
        return result
    }
}