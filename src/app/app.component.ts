import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Player } from './player';
import { Prediction } from './prediction';
import { wordNotInListValidator } from './word-not-in-list.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'wordle-angular';
  form: FormGroup
  player: Player = new Player([])
  
  //TODO: remove test variables
  prevGuess: String = "initial value"
  testString: String = "initial value"

  guessFormControl = new FormControl('', [Validators.required, wordNotInListValidator(this.player.FIVE_LETTER_WORDS_LIST)])

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      guess: this.guessFormControl
    })
  }

  processGuess() {
    console.log("Submit button pressed!")
    const guess = this.form.value.guess
    const guessResult = this.player.checkGuess(guess)
    //const guessResult = "NNNNN"
    var newPrediction = new Prediction(guess, guessResult)
    this.prevGuess = newPrediction.guess + newPrediction.result
    newPrediction.generateSubpredictions()
    this.player.predictions.push(newPrediction)
    this.player.checkIfWonOrLost()
    this.guessFormControl.reset()
  }

  newGame() {
    console.log("New Game button pressed!")
    this.player = new Player([])
    this.guessFormControl.reset()
  }

}


