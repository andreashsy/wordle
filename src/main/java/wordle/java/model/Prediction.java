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

    public void updateSubpredictions() {
        this.subpredicitons = new LinkedList<Subprediction>();
        for (int i = 0; i < wordString.length(); i++) {
            Subprediction subprediction = new Subprediction();
            subprediction.setGuess(this.wordStringAt(i));
            subprediction.setResult(this.resultStringAt(i));
            this.appendSubprediction(subprediction);
        }
    }

    public String wordStringAt(int i) {
        char targetChar = this.wordString.charAt(i);
        return String.valueOf(targetChar);
    }

    public String resultStringAt(int i) {
        char targetChar = this.resultString.charAt(i);
        return String.valueOf(targetChar);
    }

    public void appendSubprediction(Subprediction subprediction) {
        this.subpredicitons.add(subprediction);
    }

    public void appendResult(String character) {
        this.resultString += character;
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

}
