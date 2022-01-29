import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Player } from './player';
import { Prediction } from './prediction';
import { Statistics } from './statistics';
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
  showHelpers: Boolean = true;
  readonly KEY_STORAGE: string = "gameHistory-" + "standard" + "_" + this.player.answer.length + "_" + this.player.maxGuesses;
  gameHistory: string = ""
  statistics: Statistics;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      guess: this.guessFormControl,
    });
    this.loadGameHistoryFromLocalStorage()
    this.statistics = new Statistics(this.gameHistory)
  }

  onSubmitGuess() {
    console.log('Submit button pressed!');
    var guess = this.form.value.guess.toLowerCase();
    const guessResult = this.player.checkGuess(guess);
    var newPrediction = new Prediction(guess, guessResult);
    newPrediction.generateSubpredictions();
    this.player.predictions.push(newPrediction);
    this.player.updateRemainingGuesses();
    this.player.updateAllList();
    this.player.checkIfWonOrLost();
    this.updateStatisticsIfGameOver();
    this.statistics = new Statistics(this.gameHistory)
    this.guessFormControl.reset('');
    //this.onClearFormContent();
  }

  onNewGame() {
    console.log('New Game button pressed!');
    this.player = new Player([]);
    this.loadGameHistoryFromLocalStorage()
    this.statistics = new Statistics(this.gameHistory)
    this.guessFormControl.reset('');
    //this.onClearFormContent();
  }

  protected onClearFormContent() {
    this.form.reset('');
    Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].setErrors(null);
    });
  }

  updateStatisticsIfGameOver() {
    if (this.player.hasWon) {
      this.gameHistory += this.player.predictions.length.toString()
    } else if (this.player.hasLost) {
      this.gameHistory += this.player.maxGuesses + 1
    }
    this.saveGameHistoryToLocalStorage()
  }

  loadGameHistoryFromLocalStorage() {
    this.gameHistory = localStorage.getItem(this.KEY_STORAGE) || ""
  }

  saveGameHistoryToLocalStorage() {
    localStorage.setItem(this.KEY_STORAGE, this.gameHistory)
  }

  onRuleCheckboxChange() {
    console.log('Checkbox for rules changed!');
    this.showRules = !this.showRules;
  }

  onResetStatistics() {
    console.log('Reset Statistics Button Pressed!');
    localStorage.removeItem(this.KEY_STORAGE)
    this.statistics = new Statistics("")
    this.gameHistory = ""
  }

  numSequence(n: number): Array<number> {
    if (n <= 0) {
      return []
    }
    return Array(n);
  }

}
