package wordle.java.model;

import java.util.LinkedList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

public class Prediction {
    private static final Logger logger = Logger.getLogger(Prediction.class.getName());
    private List<Subprediction> subpredicitons = new LinkedList<Subprediction>();
    private String wordString = "";
    private String resultString = "";

    public String predictionGuessesToString() {   
        this.wordString = subpredicitons.stream()
                    .map(Subprediction::getGuess)
                    .collect(Collectors.joining());  
        return this.wordString;
    }

    public String predictionResultsToString() {        
        this.resultString = subpredicitons.stream()
                            .map(Subprediction::getResult)
                            .collect(Collectors.joining());
        return this.resultString;
    }

    public void guessAndResultStringToSubpredictions() {
        this.subpredicitons = new LinkedList<Subprediction>();
        for (int i = 0; i < wordString.length(); i++) {
            Subprediction subprediction = new Subprediction();
            subprediction.setGuess(String.valueOf(this.wordString.charAt(i)));
            subprediction.setResult(String.valueOf(this.resultString.charAt(i)));
            this.appendSubprediction(subprediction);
        }
    }

    public void stringToSubpredictions(String guess) {
        for (String c:guess.split("")) {
            Subprediction subprediction = new Subprediction();
            subprediction.setGuess(c);
            this.appendSubprediction(subprediction);
        }
    }

    public void appendSubprediction(Subprediction subprediction) {
        this.subpredicitons.add(subprediction);
    }

    public List<Subprediction> getSubpredictions() {
        return this.subpredicitons;
    }

    public String getWordString() {
        return this.wordString;
    }

    public void setWordString(String word) {
        this.wordString = word;
    }

    public String getResultString() {
        return this.resultString;
    }

    public void setResultString(String result) {
        this.resultString = result;
    }

    public void appendResult(String character) {
        this.resultString += character;
    }
}
