import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Player } from './player';
import { Prediction } from './prediction';
import { wordNotInListValidator } from './word-not-in-list.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wordle-angular';
  form: FormGroup;
  player: Player = new Player([]);
  guessFormControl = new FormControl('', [
    Validators.required,
    wordNotInListValidator(this.player.FIVE_LETTER_WORDS_LIST),
  ]);
  showRules: Boolean = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      guess: this.guessFormControl,
    });
  }

  processGuess() {
    console.log('Submit button pressed!');
    const guess = this.form.value.guess.toLowerCase();
    const guessResult = this.player.checkGuess(guess);
    var newPrediction = new Prediction(guess, guessResult);
    newPrediction.generateSubpredictions();
    this.player.predictions.push(newPrediction);
    this.player.updateRemainingGuesses();
    this.player.updateAllList();
    this.player.checkIfWonOrLost();
    this.guessFormControl.reset('');
  }

  newGame() {
    console.log('New Game button pressed!');
    this.player = new Player([]);
    this.guessFormControl.reset('');
  }

  onCheckBoxChange() {
    console.log('Checkbox changed!');
    this.showRules = !this.showRules;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
