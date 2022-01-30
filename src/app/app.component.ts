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
import {Title} from "@angular/platform-browser";
import { ChaosPlayer } from './chaosplayer';

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
  showRulesSection: Boolean = false;
  showStatisticsSection: Boolean = true;
  gameHistory: string = ""
  statistics: Statistics;
  isChaosChecked: Boolean = false;
  gameMode: string = "standard"
  KEY_STORAGE: string = "gameHistory-" + this.gameMode + "_" + this.player.answer.length + "_" + this.player.maxGuesses;

  constructor(
    private fb: FormBuilder,
    private titleService: Title
     ) {
    this.form = this.fb.group({
      guess: this.guessFormControl,
    });
    this.loadGameHistoryFromLocalStorage()
    this.statistics = new Statistics(this.gameHistory)
    this.setTitle("Wordle")
  }

  onSubmitGuess() {
    console.log('Submit button pressed!');
    var guess = this.form.value.guess.toLowerCase();
    const guessResult = this.player.checkGuess(guess);
    var newPrediction = new Prediction(guess, guessResult);
    newPrediction.generateSubpredictions();
    this.player.pushPrediction(newPrediction);
    this.player.updateRemainingGuesses();
    this.player.updateAllList();
    this.player.checkIfWonOrLost();
    this.updateStatisticsIfGameOver();
    this.player.saveAnswer();
    if (this.isChaosChecked && !(this.player.hasLost || this.player.hasWon)) {
      this.player.generateRandomAnswer()
      this.player.recheckAllGuesses()
      var recheckCount = 0
      while (recheckCount < 5) {
        this.player.checkIfWon()
        console.log("Has player won? " + this.player.hasWon)
        if (this.player.hasWon) {
          console.log("Answer has already won, repicking...")
          this.player.generateRandomAnswer()
          this.player.recheckAllGuesses()
        } else {
          this.player.updateAllList();
          break
        }
        recheckCount ++
      }
      console.log("Chaos! Answer has changed to: " + this.player.answer)
    }
    this.statistics = new Statistics(this.gameHistory)
    this.guessFormControl.reset('');
    this.form.reset()
  }

  onNewGame() {
    console.log('New Game button pressed!');
    this.player = new Player([]);
    this.loadGameHistoryFromLocalStorage()
    this.statistics = new Statistics(this.gameHistory)
    this.guessFormControl.reset('');
  }

  onChaosCheckbox() {
    this.isChaosChecked = !this.isChaosChecked
    this.updateGameModeAndStorageKey()
    this.onNewGame()
  }
  
  updateGameModeAndStorageKey() {
    if (this.isChaosChecked) {
      this.gameMode = "chaos"
    } else if (!this.isChaosChecked) {
      this.gameMode = "standard"
    }
    this.KEY_STORAGE = "gameHistory-" + this.gameMode + "_" + this.player.answer.length + "_" + this.player.maxGuesses;
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

  onRulesButtonPress() {
    this.showRulesSection = !this.showRulesSection;
  }

  onStatisticsButtonPress() {
    this.showStatisticsSection = !this.showStatisticsSection;
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

  public setTitle (newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
