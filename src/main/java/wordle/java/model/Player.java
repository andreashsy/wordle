package wordle.java.model;

import static wordle.java.Constants.*;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Player {
    private static final Logger logger = Logger.getLogger(Player.class.getName());
    private String answer;
    private List<Prediction> predictions = new LinkedList<Prediction>();
    private boolean win = false;
    private int maxGuesses = 6;
    private boolean limitHit = false;
    private List<String> correctPositionLetters = new LinkedList<String>();
    private List<String> inAnswerLetters = new LinkedList<String>();
    private List<String> incorrectLetters = new LinkedList<String>(Arrays.asList(ALL_LETTER_ARRAY));

    public Player() {
        this.answer = this.initializeAnswer();
    }

    public void updateAllLetterLists() {
        updateAllCorrectPositionLetters();
        updateAllInAnswerLetters();
    }

    private void updateAllCorrectPositionLetters() {
        for (Prediction prediction:predictions) {
            for (int i = 0; i < prediction.getWordString().length(); i++) {
                String resultLetter = String.valueOf(prediction.getResultString().charAt(i));
                String wordLetter = String.valueOf(prediction.getWordString().charAt(i));
                if (resultLetter.equals("M") ) {
                    if (incorrectLetters.contains(wordLetter)) {
                        incorrectLetters.remove(wordLetter);
                    }
                    
                    if (!correctPositionLetters.contains(wordLetter)) {
                        correctPositionLetters.add(wordLetter);
                    }                    
                }
            }
        }
    }

    private void updateAllInAnswerLetters() {
        for (Prediction prediction:predictions) {
            for (int i = 0; i < prediction.getWordString().length(); i++) {
                String resultLetter = String.valueOf(prediction.getResultString().charAt(i));
                String wordLetter = String.valueOf(prediction.getWordString().charAt(i));
                if (resultLetter.equals("I") ) {
                    if (incorrectLetters.contains(wordLetter)) {
                        incorrectLetters.remove(wordLetter);
                    }
                    
                    if (!inAnswerLetters.contains(wordLetter)) {
                        inAnswerLetters.add(wordLetter);
                    }                    
                }
            }
        }
    }

    public boolean isLetterInIncorrectLetters(String letter) {
        if (incorrectLetters.contains(letter)) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isLetterInCorrectPositionLetters(String letter) {
        if (correctPositionLetters.contains(letter)) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isLetterInInAnswerLetters(String letter) {
        if (inAnswerLetters.contains(letter)) {
            return true;
        } else {
            return false;
        }
    }

    public void checkAllPredictionsForWin() {
        for (Prediction prediction:predictions) {
            checkWin(prediction);
        }
    }

    public void checkWin(Prediction prediction) {
        if (prediction.getResultString().equals("MMMMM")) {
            this.win = true;
        }
    }

    private String initializeAnswer() {
        int rnd = new Random().nextInt(ALL_WORD_ARRAY.length);
        return ALL_WORD_ARRAY[rnd];
    }
    
    public void checkPrediction(Prediction prediction) {
        for (int i = 0; i < prediction.getWordString().length(); i++) {            
            if (prediction.getWordString().charAt(i) == this.answer.charAt(i)) {
                prediction.appendResult("M");
            } else if (this.answer.contains(Character.toString(prediction.getWordString().charAt(i)))) {
                prediction.appendResult("I");
            } else {
                prediction.appendResult("N");
            }
        }
    }

    public void appendNewGuessAndFindResult(String guess) {
        Prediction newPrediction = new Prediction();
        newPrediction.setWordString(guess);
        this.checkPrediction(newPrediction);
        this.predictions.add(newPrediction);
    }

    public void checkAndUpdateLimitHit() {
        if (this.predictions.size() >= maxGuesses) {
            this.limitHit = true;
        }
    }

    public void updateAllSubpredictions() {
        for (Prediction prediction:predictions) {
            prediction.guessAndResultStringToSubpredictions();
        }
    }

    public List<Prediction> getPredictions() {
        return this.predictions;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getAnswer() {
        return this.answer;
    }

    public boolean isWin() {
        return this.win;
    }

    public void setWin(boolean win) {
        this.win = win;
    }

    public boolean isLimitHit() {
        return this.limitHit;
    }

    public void setLimitHit(boolean limitHit) {
        this.limitHit = limitHit;
    }

    public List<String> getCorrectPositionLetters() {
        return this.correctPositionLetters;
    }

    public List<String> getInAnswerLetters() {
        return this.inAnswerLetters;
    }

    public List<String> getIncorrectLetters() {
        return this.incorrectLetters;
    }
}
