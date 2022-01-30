import { Prediction } from "./prediction"

export class ClueHelper {
    greenList: String[] = []
    yellowList: String[] = []
    greyList: String[] = []
    ALL_LETTERS_CONCAT: String = "abcdefghijklmnopqrstuvwxyz"
    whiteList: String[] = this.ALL_LETTERS_CONCAT.split("")

    constructor(
        public predictions:Prediction[]
    ) {
        
    }

    updateAllLists() {
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
}