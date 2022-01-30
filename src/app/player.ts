import { ClueHelper } from "./cluehelper";
import { Prediction } from "./prediction";
import { WordList } from "./wordlist";

export class Player {
    cluehelper: ClueHelper;
    wordlist: WordList = new WordList()
    FIVE_LETTER_WORDS_LIST: String[] = this.wordlist.FIVE_LETTER_WORDS_CONCAT.split("|")
    chaosAnswers: String[] = []
    greenList: String[] = []
    yellowList: String[] = []
    greyList: String[] = []
    ALL_LETTERS_CONCAT: String = "abcdefghijklmnopqrstuvwxyz"
    whiteList: String[] = this.ALL_LETTERS_CONCAT.split("")


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

    updateAllList() {
        this.resetAllLists()
        this.updateYellowList()
        this.updateGreenList()
        this.updateGreyList()
    }

    updateYellowList() {
        for (var prediction of this.predictions) {
            for (let i = 0; i < prediction.result.length; i++) {
                const guessLetter = prediction.guess.charAt(i)
                const resultLetter = prediction.result.charAt(i)
                if (resultLetter === "I") {
                    if (this.whiteList.includes(guessLetter)) {
                        this.whiteList = this.stringArrayRemove(this.whiteList, guessLetter)
                    }
                    if (!this.yellowList.includes(guessLetter)) {
                        this.yellowList.push(guessLetter)
                    }
                }
            }
        }
    }

    updateGreenList() {
        for (var prediction of this.predictions) {
            for (let i = 0; i < prediction.result.length; i++) {
                const guessLetter = prediction.guess.charAt(i)
                const resultLetter = prediction.result.charAt(i)
                if (resultLetter === "M") {
                    if (this.whiteList.includes(guessLetter)) {
                        this.whiteList = this.stringArrayRemove(this.whiteList, guessLetter)
                    }
                    if (this.yellowList.includes(guessLetter)) {
                        this.yellowList = this.stringArrayRemove(this.yellowList, guessLetter)
                    }
                    if (!this.greenList.includes(guessLetter)) {
                        this.greenList.push(guessLetter)
                    }
                }
            }
        }
    }

    updateGreyList() {
        for (var prediction of this.predictions) {
            for (let i = 0; i < prediction.result.length; i++) {
                const guessLetter = prediction.guess.charAt(i)
                const resultLetter = prediction.result.charAt(i)
                if (resultLetter === "N") {
                    if (this.whiteList.includes(guessLetter)) {
                        this.whiteList = this.stringArrayRemove(this.whiteList, guessLetter)
                    }
                    if (!this.greyList.includes(guessLetter)) {
                        this.greyList.push(guessLetter)
                    }
                }
            }
        }
    }

    resetAllLists() {
        this.greenList = []
        this.yellowList = []
        this.greyList = []
        this.whiteList = this.ALL_LETTERS_CONCAT.split("")
    }

    stringArrayRemove(array: String[], value: String) {
        for (var i= 0; i < array.length; i++) {
            if (array[i] === value) {
                array.splice(i, 1)
                i--
            }
        }
        return array
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
}
