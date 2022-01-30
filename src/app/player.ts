import { ClueHelper } from "./cluehelper";
import { Prediction } from "./prediction";
import { WordList } from "./wordlist";

export class Player {
    cluehelper: ClueHelper;
    wordlist: WordList = new WordList()
    FIVE_LETTER_WORDS_LIST: String[] = this.wordlist.FIVE_LETTER_WORDS_CONCAT.split("|")
    chaosAnswers: String[] = []

    constructor(
        public predictions:Prediction[],
        public answer:String = "",
        public maxGuesses:number = 6,
        public hasWon:Boolean = false,
        public hasLost:Boolean = false,
        public remainingGuesses: number = maxGuesses,
    ) {
        this.generateRandomAnswer()
        this.cluehelper = new ClueHelper(this.predictions)
        console.log("Answer is: " + this.answer)
    }

    generateRandomAnswer() {
        const randomNumber = Math.floor(Math.random() * this.FIVE_LETTER_WORDS_LIST.length)
        this.answer = this.FIVE_LETTER_WORDS_LIST[randomNumber]
    }

    recheckAllGuesses() {
        for (var prediction of this.predictions) {
            prediction.result = this.checkGuess(prediction.guess);
            prediction.generateSubpredictions();
        }
    }

    checkGuess(guess: String) {
        let result = ""
        for (let i = 0; i < guess.length; i++) {
            const answerLetter = this.answer!.charAt(i)
            const guessLetter = guess.charAt(i)
            if (answerLetter === guessLetter) {
                result += "M"
            } else if (this.answer!.includes(guessLetter)) {
                result += "I"
            } else {
                result += "N"
            }
        }
        return result
    }

    checkIfWonOrLost() {
        this.checkIfWon()
        this.checkIfLost()
    }

    checkIfWon() {
        for (var prediction of this.predictions) {
            if (prediction.result === "MMMMM") {
                this.hasWon = true
                break
            }
            this.hasWon = false
        }
    }

    checkIfLost() {
        if (this.predictions.length >= this.maxGuesses && !this.hasWon) {
            this.hasLost = true
        } else {
            this.hasLost = false
        }
    }

    updateRemainingGuesses() {
      this.remainingGuesses = this.maxGuesses - this.predictions.length
    }

    pushPrediction(prediction: Prediction) {
        this.predictions.push(prediction)
    }

    saveAnswer() {
        this.chaosAnswers.push(this.answer)
    }

    updateAllHelperLists() {
        this.cluehelper.updateAllLists()
    }
}
