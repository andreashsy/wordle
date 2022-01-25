package wordle.java.model;

import static wordle.java.Constants.*;

import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Player {
    private static final Logger logger = Logger.getLogger(Player.class.getName());
    private String answer;
    Prediction firstPrediction;
    Prediction secondPrediction;
    Prediction thirdPrediction;
    Prediction fourthPrediction;
    Prediction fifthPrediction;
    Prediction sixthPrediction;

    public Player() {
        this.answer = this.initializeAnswer();
    }

    private String initializeAnswer() {
        String[] allWords = FIVE_LETTER_WORDS_CONCAT.split("\\|");
        int rnd = new Random().nextInt(allWords.length);
        return allWords[rnd];
    }
    
    public void checkPrediction(Prediction prediction) {
        for (int i = 0; i < prediction.getWord().length(); i++) {            
            if (prediction.getWord().charAt(i) == this.answer.charAt(i)) {
                prediction.appendResult("M");
            } else if (this.answer.contains(Character.toString(prediction.getWord().charAt(i)))) {
                prediction.appendResult("I");
            } else {
                prediction.appendResult("N");
            }
        }
    }
}
