import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Player } from './player';
import { Prediction } from './prediction';
import { Subprediction } from './subprediction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wordle-angular';
  form: FormGroup
  player: Player

  prevGuess: String = "initial value"
  testString: String = "initial value"
  playerDemo: Player = new Player([
    new Prediction("", "", [
      new Subprediction("g", "M"),
      new Subprediction("u", "I"),
      new Subprediction("e", "N"),
      new Subprediction("s", "I"),
      new Subprediction("1", "M"),
    ]),
    new Prediction("", "", [
      new Subprediction("g", "M"),
      new Subprediction("u", "I"),
      new Subprediction("e", "I"),
      new Subprediction("s", "M"),
      new Subprediction("2", "M"),
    ]),
    new Prediction("", "", [
      new Subprediction("g", "M"),
      new Subprediction("u", "M"),
      new Subprediction("e", "M"),
      new Subprediction("s", "M"),
      new Subprediction("3", "M"),
    ])
  ])

  guessFormControl = new FormControl('', [Validators.required])

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      guess: this.guessFormControl
    })
    this.player = new Player([])
  }

  processGuess() {
    const guess = this.form.value.guess
    const guessResult = this.player.checkGuess(guess)
    var newPrediction = new Prediction(guess, guessResult)
    this.prevGuess = newPrediction.guess + newPrediction.result
    newPrediction.generateSubpredictions()
    this.player.predictions.push(newPrediction)
    this.testString = this.player.predictions[0].subpredictions![0].guessLetter
    this.guessFormControl.reset()
  }

  newGame() {
    this.player = new Player([])
  }
}
