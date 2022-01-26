package wordle.java.model;

public class Subprediction {
    private String guess;
    private String result;
    
    public void setGuess(String guess) {
        this.guess = guess;
    }

    public String getGuess() {
        return this.guess;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getResult() {
        return this.result;
    }
}
